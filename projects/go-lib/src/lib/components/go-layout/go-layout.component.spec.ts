import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GoHeaderBarModule } from '../go-header-bar/go-header-bar.module';

import { GoLayoutComponent } from './go-layout.component';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoModalModule } from '../go-modal/go-modal.module';
import { GoModalService } from '../go-modal/go-modal.service';
import { GoOffCanvasModule } from '../go-off-canvas/go-off-canvas.module';
import { GoOffCanvasService } from '../go-off-canvas/go-off-canvas.service';
import { GoToasterModule } from '../go-toaster/go-toaster.module';
import { GoToasterService } from '../go-toaster/go-toaster.service';
import { Subject } from 'rxjs';
import { ElementRef } from '@angular/core';

class MockHeaderBar {
  reset = jasmine.createSpy('reset');
}

describe('GoLayoutComponent', () => {
  let component: GoLayoutComponent;
  let fixture: ComponentFixture<GoLayoutComponent>;
  let routerEvents$: Subject<RouterEvent>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    routerEvents$ = new Subject<RouterEvent>();
    mockRouter = {
      events: routerEvents$.asObservable(),
      url: '/initial'
    };

    await TestBed.configureTestingModule({
      declarations: [GoLayoutComponent],
      imports: [
        BrowserAnimationsModule,
        GoHeaderBarModule,
        GoLoaderModule,
        GoModalModule,
        GoOffCanvasModule,
        GoToasterModule,
        RouterTestingModule
      ],
      providers: [
        GoModalService,
        GoOffCanvasService,
        GoToasterService,
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GoLayoutComponent);
    component = fixture.componentInstance;
    // Replace headerBar and routeContainer
    component.headerBar = new MockHeaderBar() as any;
    component.routeContainer = new ElementRef({ scrollTop: 0 });
    fixture.detectChanges();
  });

  it('should set routeLoader true and save scrollTop on NavigationStart', () => {
    // Arrange
    (mockRouter.url as string) = '/page1';
    component.routeContainer.nativeElement.scrollTop = 123;

    // Act
    routerEvents$.next(new NavigationStart(1, '/page2'));

    // Assert
    expect(component.routeLoader).toBe(true);
    expect(component['routeScrollPositions']['/page1']).toBe(123);
    expect(component['goingBack']).toBeFalsy();
  });

  it('should detect popstate on NavigationStart', () => {
    // Act
    const start = new NavigationStart(2, '/page3', 'popstate');
    routerEvents$.next(start);

    // Assert
    expect(component.routeLoader).toBe(true);
    expect(component['goingBack']).toBe(true);
  });


  [NavigationEnd, NavigationCancel, NavigationError].forEach(eventType => {
    const name = eventType.name;

    it(`should handle ${name} by resetting, hiding loader, and scrolling to top when not going back`, () => {
      // Arrange
      component.routeContainer.nativeElement.scrollTop = 50;

      // Act
      const evt = new (eventType as any)(3, '/page4', '/page4');
      routerEvents$.next(evt);

      // Assert
      expect(component.headerBar.reset).toHaveBeenCalled();
      expect(component.routeLoader).toBeFalsy();
      expect(component.routeContainer.nativeElement.scrollTop).toBe(0);
      expect(component['goingBack']).toBeFalsy();
    });

    it(`should restore scroll position on ${name} when going back`, () => {
      // Arrange: simulate returning to a saved URL
      component['routeScrollPositions']['/page5'] = 200;
      component['goingBack'] = true;

      // Act
      const evt = new (eventType as any)(4, '/page5', '/page5');
      routerEvents$.next(evt);

      // Assert
      expect(component.headerBar.reset).toHaveBeenCalled();
      expect(component.routeLoader).toBeFalsy();
      expect(component.routeContainer.nativeElement.scrollTop).toBe(200);
      expect(component['goingBack']).toBeFalsy();
    });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});