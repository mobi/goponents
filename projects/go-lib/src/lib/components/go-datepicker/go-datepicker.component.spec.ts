import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoDatepickerComponent } from './go-datepicker.component';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

describe('GoDatepickerComponent', () => {
  let component: GoDatepickerComponent;
  let fixture: ComponentFixture<GoDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoDatepickerComponent ],
      imports: [
        GoIconButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoDatepickerComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should set a placeholder from the locale if there is no placeholder passed in', () => {
      component.placeholder = undefined;
      component.locale = 'de';
      fixture.detectChanges();
      expect(component.placeholder).toEqual('dd.mm.yyyy');
    });

    it('sets the default locale to en-US if no locale is passed in', () => {
      component.placeholder = undefined;
      fixture.detectChanges();
      expect(component.placeholder).toEqual('mm/dd/yyyy');
    });
  });

  describe('template', () => {
    it('should allow input based on locale', () => {
      component.locale = 'de';
      fixture.detectChanges();

      const goDatepickerTemplate: HTMLElement = fixture.nativeElement;
      const inputElement: HTMLButtonElement = goDatepickerTemplate.querySelector('input');

      // dd/mm/yyyy
      inputElement.value = '05.12.15';
      inputElement.dispatchEvent(new Event('input'));

      fixture.whenStable().then(() => {
        // December 5th 2015
        expect(component.control.value).toEqual(new Date(2015, 11, 5));
      });
    });

    it('should always allow for international date format regardless of locale', () => {
      component.locale = 'de';
      fixture.detectChanges();

      const goDatepickerTemplate: HTMLElement = fixture.nativeElement;
      const inputElement: HTMLButtonElement = goDatepickerTemplate.querySelector('input');

      // yyyy.mm.dd
      inputElement.value = '2015.12.5';
      inputElement.dispatchEvent(new Event('input'));

      fixture.whenStable().then(() => {
        // December 5th 2015
        expect(component.control.value).toEqual(new Date(2015, 11, 5));
      });
    });

    it('should set date to empty if invalid based on locale', () => {
      component.locale = 'de';
      fixture.detectChanges();

      const goDatepickerTemplate: HTMLElement = fixture.nativeElement;
      const inputElement: HTMLButtonElement = goDatepickerTemplate.querySelector('input');

      // dd.mm.yyyy
      inputElement.value = '05.27.15';
      inputElement.dispatchEvent(new Event('input'));

      fixture.whenStable().then(() => {
        expect(component.control.value).toEqual(null);
      });
    });

    it('should add an error if invalid based on locale', () => {
      component.locale = 'de';
      fixture.detectChanges();

      const goDatepickerTemplate: HTMLElement = fixture.nativeElement;
      const inputElement: HTMLButtonElement = goDatepickerTemplate.querySelector('input');

      // dd.mm.yyyy
      inputElement.value = '05.27.15';
      inputElement.dispatchEvent(new Event('input'));

      fixture.whenStable().then(() => {
        expect(component.control.getError('format')).toEqual('format is invalid');
      });
    });
  });
});
