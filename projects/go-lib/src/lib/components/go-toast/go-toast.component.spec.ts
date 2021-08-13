import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToastComponent } from './go-toast.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

describe('GoToastComponent', () => {
  let component: GoToastComponent;
  let fixture: ComponentFixture<GoToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToastComponent ],
      imports: [
        GoIconButtonModule,
        GoIconModule
      ]
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

  describe('_status', () => {
    it('returns a default status if no type is passed in', () => {
      fixture.detectChanges();

      expect(component._status).toEqual('go-toast-status--neutral');
    });

    it('returns a type status if type is passed in', () => {
      component.type = 'positive';
      fixture.detectChanges();

      expect(component._status).toEqual('go-toast-status--positive');
    });
  });

  describe('_icon', () => {
    it('returns a default icon if no type is passed in', () => {
      fixture.detectChanges();

      expect(component._icon).toEqual('notifications_none');
    });

    it('returns an icon if type is passed in', () => {
      component.type = 'positive';
      fixture.detectChanges();

      expect(component._icon).toEqual('done');
    });

    it('returns an icon if icon is passed in', () => {
      component.icon = 'pets';
      fixture.detectChanges();

      expect(component._icon).toEqual('pets');
    });
  });

  describe('dismiss', () => {
    it('emits the handleClick event', () => {
      spyOn(component.handleDismiss, 'emit');
      spyOn(component, 'dismiss').and.callThrough();

      component.dismissable = true;
      fixture.detectChanges();

      const goToastTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLElement = goToastTemplate.querySelector('button');

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
      const goToastDismissButton: HTMLElement = goToastTemplate.querySelector('go-icon-button');

      expect(goToastDismissButton).toBeNull();
    });

    it('renders dismiss button if dismissable is true', () => {
      component.dismissable = true;
      fixture.detectChanges();

      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const goToastDismissButton: HTMLElement = goCardTemplate.querySelector('go-icon-button');

      expect(goToastDismissButton).not.toBeNull();
    });
  });
});
