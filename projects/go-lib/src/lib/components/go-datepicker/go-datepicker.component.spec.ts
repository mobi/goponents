import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoDatepickerComponent } from './go-datepicker.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoCalendarComponent } from './go-calendar.component';
import { GoCalendarDayViewComponent } from './day-view/go-calendar-day-view.component';
import { GoCalendarMonthViewComponent } from './month-view/go-calendar-month-view.component';
import { GoCalendarYearViewComponent } from './year-view/go-calendar-year-view.component';

describe('GoDatepickerComponent', () => {
  let component: GoDatepickerComponent;
  let fixture: ComponentFixture<GoDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCalendarComponent,
        GoCalendarDayViewComponent,
        GoCalendarMonthViewComponent,
        GoCalendarYearViewComponent,
        GoDatepickerComponent
      ],
      imports: [
        GoIconButtonModule,
        GoHintModule,
        FormsModule,
        GoHintModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoDatepickerComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    afterEach(() => {
      component.selectedDate = null;
      component.min = null;
      component.minDate = null;
      component.max = null;
      component.maxDate = null;
    });

    it('should allow the control to be initialized with a date object', () => {
      component.control.setValue(new Date(2015, 4, 15));

      fixture.detectChanges();

      expect(component.selectedDate).toEqual('5/15/2015');
    });

    it('should allow the control to be initialized with a date string', () => {
      component.control.setValue('05/15/2015');

      fixture.detectChanges();

      expect(component.selectedDate).toEqual('5/15/2015');
      expect(component.control.value).toEqual(new Date (2015, 4, 15));
    });

    it('sets a min if minDate is passed in', () => {
      component.minDate = '05/15/2015';

      fixture.detectChanges();

      expect(component.min).toEqual(new Date (2015, 4, 15));
    });

    it('sets min to null if no minDate is passed in', () => {
      fixture.detectChanges();

      expect(component.min).toEqual(null);
    });

    it('sets a max date if maxDate is passed in', () => {
      component.maxDate = '05/15/2015';

      fixture.detectChanges();

      expect(component.max).toEqual(new Date (2015, 4, 15));
    });

    it('sets max date to null if no maxDate is passed in', () => {
      fixture.detectChanges();

      expect(component.max).toEqual(null);
    });

    it('should set control to null if date is above maxDate', () => {
      component.maxDate = '05/15/2015';
      component.control.setValue('05/16/2015');

      fixture.detectChanges();
      expect(component.control.value).toBe(null);
    });

    it('should set control to null if date is below minDate', () => {
      component.minDate = '05/15/2015';
      component.control.setValue('05/14/2015');

      fixture.detectChanges();
      expect(component.control.value).toBe(null);
    });

    it('should set control to date if between min and max dates', () => {
      component.minDate = '05/15/2015';
      component.maxDate = '05/17/2015';
      component.control.setValue('05/16/2015');

      fixture.detectChanges();
      expect(component.control.value).toEqual(new Date(2015, 4, 16));
    });
  });

  describe('restrictInput', () => {
    afterEach(() => {
      component.selectedDate = null;
    });

    it('should strip out letters from selectedDate input', () => {
      fixture.detectChanges();

      component.selectedDate = '15/d25/1as';
      component.restrictInput();

      expect(component.selectedDate).toBe('15/25/1');
    });
  });

  describe('template', () => {
    afterEach(() => {
      component.selectedDate = null;
      component.locale = null;
    });

    it('should allow input based on locale', () => {
      component.locale = 'de';
      component.selectedDate = '05.12.15';

      component.validateDate();

      expect(component.control.value).toEqual(new Date(2015, 11, 5));
    });

    it('should always allow for international date format regardless of locale', () => {
      component.locale = 'de';
      component.selectedDate = '2015.12.5';

      component.validateDate();

      expect(component.control.value).toEqual(new Date(2015, 11, 5));
    });

    it('should set date to empty if invalid based on locale', () => {
      component.locale = 'de';
      component.selectedDate = '05.27.15';

      component.validateDate();

      expect(component.control.value).toEqual(null);
    });
  });

  xdescribe('openDatepicker', () => {
    // TODO figure out how to test this
  });
});
