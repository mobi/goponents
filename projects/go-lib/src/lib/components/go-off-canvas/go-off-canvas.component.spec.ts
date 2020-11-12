import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoOffCanvasService } from './go-off-canvas.service';

describe('GoOffCanvasComponent', () => {
  let component: GoOffCanvasComponent;
  let fixture: ComponentFixture<GoOffCanvasComponent>;
  let offCanvasService: GoOffCanvasService;
  let goOffCanvasHostFixture: ComponentFixture<GoTestOffCanvasHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoOffCanvasComponent,
        GoOffCanvasDirective,
        GoTestOffCanvasHostComponent
      ],
      imports: [
        BrowserAnimationsModule,
        GoIconButtonModule
      ],
      providers: [
        GoOffCanvasService
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ GoTestOffCanvasHostComponent ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoOffCanvasComponent);
    goOffCanvasHostFixture = TestBed.createComponent(GoTestOffCanvasHostComponent);

    component = fixture.componentInstance;
    component.goOffCanvasHost = goOffCanvasHostFixture.componentInstance.goOffCanvasHost;

    fixture.detectChanges();
    offCanvasService = TestBed.get(GoOffCanvasService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('loads the component', () => {
      spyOn(component.goOffCanvasHost.viewContainerRef, 'createComponent');

      offCanvasService.openOffCanvas({
        component: GoTestOffCanvasHostComponent,
        bindings: {},
        header: 'Test Header',
      });

      expect(component.currentOffCanvasItem).toEqual({
        component: GoTestOffCanvasHostComponent,
        bindings: {},
        header: 'Test Header',
      });

      expect(component.goOffCanvasHost.viewContainerRef.createComponent).toHaveBeenCalled();
      expect(component.header).toEqual('Test Header');
    });

    it('sets up a subscription to clear the view container if the off canvas is closed', () => {
      spyOn(component.goOffCanvasHost.viewContainerRef, 'clear');

      offCanvasService.openOffCanvas({
        component: GoTestOffCanvasHostComponent,
        bindings: {},
        header: 'Test Header'
      });

      expect(component.currentOffCanvasItem).toEqual({
        component: GoTestOffCanvasHostComponent,
        bindings: {},
        header: 'Test Header'
      });

      offCanvasService.closeOffCanvas();
      expect(component.goOffCanvasHost.viewContainerRef.clear).toHaveBeenCalled();
    });
  });

  describe('closeOffCanvas', () => {
    it('closes the off canvas', () => {
      component.opened = true;
      spyOn(offCanvasService, 'closeOffCanvas').and.callThrough();

      component.closeOffCanvas();

      expect(offCanvasService.closeOffCanvas).toHaveBeenCalled();
      expect(component.opened).toBe(false);
    });
  });

  describe('getOffCanvasWidth', () => {
    it('returns 100vw if window width is less than 768px', () => {
      component.screenWidth = 360;

      expect(component.getOffCanvasWidth()).toBe('100vw');
    });

    it('returns 75vw if window width is greater than 768px and size is large', () => {
      component.screenWidth = 1200;
      component.size = 'large';

      expect(component.getOffCanvasWidth()).toBe('75vw');
    });

    it('returns 350px if window width is greater than 768px and size is small', () => {
      component.screenWidth = 1200;
      component.size = 'small';

      expect(component.getOffCanvasWidth()).toBe('350px');
    });
  });

});

@Component({
  selector: 'go-test',
  template: '<ng-template go-off-canvas-host></ng-template>'
})
class GoTestOffCanvasHostComponent {
  @ViewChild(GoOffCanvasDirective, { static: true }) goOffCanvasHost: GoOffCanvasDirective;
}
