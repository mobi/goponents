import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToastComponent } from './go-toast.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('GoToastComponent', () => {
  let component: GoToastComponent;
  let fixture: ComponentFixture<GoToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToastComponent ],
      imports: [ GoIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToastComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('sets a default statusClass if no type is passed in', () => {
      fixture.detectChanges();

      expect(component.statusClass).toEqual('go-toast-status--neutral');
    });

    it('sets a statusClass if type is passed in', () => {
      component.type = 'positive';
      fixture.detectChanges();

      expect(component.statusClass).toEqual('go-toast-status--positive');
    });

    it('sets a default icon if no type is passed in', () => {
      fixture.detectChanges();

      expect(component.icon).toEqual('notifications_none');
    });

    it('should set an icon if type is passed in', () => {
      component.type = 'positive';
      fixture.detectChanges();

      expect(component.icon).toEqual('done');
    });
  });

  describe('dismiss', () => {
    it('emits the handleClick event', () => {
      spyOn(component.handleDismiss, 'emit');
      spyOn(component, 'dismiss').and.callThrough();

      component.dismissable = true;
      fixture.detectChanges();

      const goToastTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLElement = goToastTemplate.querySelector('.go-toast-dismiss__icon');

      buttonElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.dismiss).toHaveBeenCalled();
      expect(component.handleDismiss.emit).toHaveBeenCalled();
    });
  });

  describe('the template', () => {
    it('hides the dismiss button by default', () => {
      fixture.detectChanges();

      const goToastTemplate: HTMLElement = fixture.nativeElement;
      const goToastDismissButton: HTMLElement = goToastTemplate.querySelector('.go-toast-dismiss__button');

      expect(goToastDismissButton).toBeNull();
    });

    it('renders dismiss button if dismissable is true', () => {
      component.dismissable = true;
      fixture.detectChanges();

      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const goToastDismissButton: HTMLElement = goCardTemplate.querySelector('.go-toast-dismiss__button');

      expect(goToastDismissButton).not.toBeNull();
    });
  });
});
