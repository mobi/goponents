import { EmbeddedViewRef, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoHeaderBarComponent } from './go-header-bar.component';
import { GoHeaderBarItem } from './go-header-bar.interface';
import { GoHeaderBarService } from './go-header-bar.service';
import createSpy = jasmine.createSpy;

describe('GoHeaderBarComponent', () => {
  let component: GoHeaderBarComponent;
  let fixture: ComponentFixture<GoHeaderBarComponent>;
  let goHeaderBarService: GoHeaderBarService;

  beforeEach(async(() => {
    goHeaderBarService = new GoHeaderBarService();

    TestBed.configureTestingModule({
      declarations: [GoHeaderBarComponent],
      imports: [GoIconModule],
      providers: [
        { provide: GoHeaderBarService, useValue: goHeaderBarService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.currentItem = {
        templateRef: {
          elementRef: fixture.elementRef,
          createEmbeddedView(context: any): EmbeddedViewRef<any> {
            return undefined;
          }
        },
        title: 'Some Title',
        backButtonFn: new EventEmitter<any>(),
        showBackArrow: true
      };
    });

    it('calls setCurrentItem method', () => {
      spyOn(goHeaderBarService.activeItem, 'subscribe');
      component.ngOnInit();
      expect(goHeaderBarService.activeItem.subscribe).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    beforeEach(() => {});

    it ('Removes all listeners on destroy', () => {
      spyOn(goHeaderBarService.activeItem, 'unsubscribe');
      component.ngOnDestroy();

      expect(goHeaderBarService.activeItem.unsubscribe).toHaveBeenCalled();
    });

    afterEach(() => {
      component.reset();
    });
  });

  it('resets current item', () => {
    component.currentItem = jasmine.createSpyObj('GoHeaderBarItem', ['templateRef']);
    component.reset();

    expect(component.currentItem).toBeNull();
  });

  describe('processBackBtn', () => {
    beforeEach(() => {
      component.currentItem = {
        templateRef: {
          elementRef: fixture.elementRef,
          createEmbeddedView(context: any): EmbeddedViewRef<any> {
            return undefined;
          }
        },
        title: 'Some Title',
        backButtonFn: new EventEmitter<any>(),
        showBackArrow: true
      };
    });

    it('calls history.back when no observers exist', () => {
      spyOn(window.history, 'back');

      component.processBackBtn();

      expect(window.history.back).toHaveBeenCalledTimes(1);
    });

    it('calls custom method when observer is passed', () => {
      const handlerSpy: any = createSpy('handler', (): void => {});

      component.currentItem.backButtonFn.subscribe(handlerSpy);
      component.processBackBtn();

      expect(handlerSpy).toHaveBeenCalledTimes(1);
    });
  });
});
