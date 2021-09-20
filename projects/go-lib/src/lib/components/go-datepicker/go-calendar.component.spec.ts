import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoCalendarComponent } from './go-calendar.component';
import { GoCalendarDayViewComponent } from './day-view/go-calendar-day-view.component';
import { GoCalendarMonthViewComponent } from './month-view/go-calendar-month-view.component';
import { GoCalendarYearViewComponent } from './year-view/go-calendar-year-view.component';
import { GoCalendar } from './go-calendar';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

describe('GoCalendarComponent', () => {
  let component: GoCalendarComponent;
  let fixture: ComponentFixture<GoCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCalendarComponent,
        GoCalendarDayViewComponent,
        GoCalendarMonthViewComponent,
        GoCalendarYearViewComponent
      ],
      imports: [
        GoFormErrorsModule,
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
    fixture = TestBed.createComponent(GoCalendarComponent);
    component = fixture.componentInstance;
    component.calendar = new GoCalendar();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    afterEach(() => {
      component.calendar.selectedDate = null;
      component.selectedDate = null;
    });

    it('should not update selected date if valid when opened', () => {
      const date: Date = new Date(2015, 4, 15);

      component.calendar.openCalendar(date);
      fixture.detectChanges();

      expect(component.selectedDate).toEqual(date);
    });

    it('should set selected date to todays date if not passed in and todays date is valid', () => {
      const date: Date = new Date();

      date.setHours(0, 0, 0, 0);
      fixture.detectChanges();
      component.calendar.openCalendar(null);

      expect(component.selectedDate).toEqual(date);
    });

    it('should set selected date to min date if min date available and todays date not valid', () => {
      const minDate: Date = new Date(2015, 4, 15);
      component.minDate = minDate;
      component.maxDate = new Date(2016, 4, 15);
      fixture.detectChanges();
      component.calendar.openCalendar(null);

      expect(component.selectedDate).toEqual(minDate);
    });

    it('should set selected date to max date if no min date and todays date not valid', () => {
      const maxDate: Date = new Date(2015, 4, 15);
      component.maxDate = maxDate;
      fixture.detectChanges();
      component.calendar.openCalendar(null);

      expect(component.selectedDate).toEqual(maxDate);
    });

    it('should set month from selected date', () => {
      const date: Date = new Date(2015, 4, 15);

      component.calendar.openCalendar(date);
      fixture.detectChanges();

      expect(component.currentMonth).toEqual(4);
    });

    it('should set year from selected date', () => {
      const date: Date = new Date(2015, 4, 15);

      component.calendar.openCalendar(date);
      fixture.detectChanges();

      expect(component.currentYear.value).toEqual(2015);
    });
  });
});
