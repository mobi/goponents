import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../../go-icon-button/go-icon-button.module';
import { GoCalendarDayViewComponent } from './go-calendar-day-view.component';
import { DateAdapter } from '../date-adapter';
import { CalendarCellDate } from '../calendar-cell.model';


describe('GoCalendarDayViewComponent', () => {
  let component: GoCalendarDayViewComponent;
  let fixture: ComponentFixture<GoCalendarDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCalendarDayViewComponent
      ],
      imports: [
        GoIconButtonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCalendarDayViewComponent);
    component = fixture.componentInstance;

    component.day = new Date(2015, 4, 15);
    component.month = 4;
    component.year = { translated: '', value: 2015 };
    component.dateAdapter = new DateAdapter();

    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('nextMonth', () => {
    it('should emit an event with the next month', () => {
      spyOn(component.setMonth, 'emit');
      component.nextMonth();
      expect(component.setMonth.emit).toHaveBeenCalledWith(5);
    });

    it('should emit an event with the next year if this month is december', () => {
      spyOn(component.setMonth, 'emit');
      spyOn(component.setYear, 'emit');

      component.month = 11;
      component.nextMonth();
      expect(component.setMonth.emit).toHaveBeenCalledWith(0);
      expect(component.setYear.emit).toHaveBeenCalledWith(2016);
    });
  });

  describe('previousMonth', () => {
    it('should emit an event with the previous month', () => {
      spyOn(component.setMonth, 'emit');
      component.previousMonth();
      expect(component.setMonth.emit).toHaveBeenCalledWith(3);
    });

    it('should emit an event with the previous year if this month is january', () => {
      spyOn(component.setMonth, 'emit');
      spyOn(component.setYear, 'emit');

      component.month = 0;
      component.previousMonth();
      expect(component.setMonth.emit).toHaveBeenCalledWith(11);
      expect(component.setYear.emit).toHaveBeenCalledWith(2014);
    });
  });

  describe('onChanges', () => {
    afterEach(() => {
      component.day = new Date(2015, 4, 15);
      component.month = 4;
      component.year = { translated: '', value: 2015 };
      component.focusedDate = null;
    });

    it('should set up weeks with 29 days if month is February and leap year', () => {
      component.day = new Date(2015, 1, 28);
      component.month = 1;
      component.year = { value: 2016, translated: '' };
      component.ngOnChanges();

      const lastWeek: CalendarCellDate[] = component.weeks[component.weeks.length - 1];
      expect(lastWeek[lastWeek.length - 1].value.getDate()).toBe(29);
    });

    it('should set up weeks with 28 days if month is February and not leap year', () => {
      component.day = new Date(2015, 1, 28);
      component.month = 1;
      component.year = { value: 2015, translated: '' };
      component.ngOnChanges();

      const lastWeek: CalendarCellDate[] = component.weeks[component.weeks.length - 1];
      expect(lastWeek[lastWeek.length - 1].value.getDate()).toBe(28);
    });

    it('should set nextMonthDisabled if first day of next month is after maxDate', () => {
      component.maxDate = new Date(2015, 4, 31);
      component.ngOnChanges();
      expect(component.nextMonthDisabled).toBe(true);
    });

    it('should not set nextMonthDisabled if first day of next month is same as maxDate', () => {
      component.maxDate = new Date(2015, 5, 1);
      component.ngOnChanges();
      expect(component.nextMonthDisabled).toBe(false);
    });

    it('should set previousMonthDisabled if last day of previous month is before minDate', () => {
      component.minDate = new Date(2015, 4, 1);
      component.ngOnChanges();
      expect(component.previousMonthDisabled).toBe(true);
    });

    it('should not set previousMonthDisabled if last day of previous month is same as minDate', () => {
      component.minDate = new Date(2015, 3, 30);
      component.ngOnChanges();
      expect(component.previousMonthDisabled).toBe(false);
    });

    it('should set a focused day to selected date if in the same month and year', () => {
      component.ngOnChanges();
      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 15));
    });
  });

  describe('keyboard events', () => {
    afterEach(() => {
      component.focusedDate.value = new Date(2015, 4, 15);
      component.nextMonthDisabled = false;
      component.previousMonthDisabled = false;
      component.focusedDate.disabled = false;
    });

    it('should increase the focused date by 1 if arrow right', () => {
      keyPress('ArrowRight');
      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 16));
    });

    it('should decrease the focused date by 1 if arrow left', () => {
      keyPress('ArrowLeft');
      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 14));
    });

    it('should increase the focused date by 7 if arrow down', () => {
      keyPress('ArrowDown');
      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 22));
    });

    it('should decrease the focused date by 7 if arrow up', () => {
      keyPress('ArrowUp');
      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 8));
    });

    it('should go to next month if date is over number of days in month', () => {
      spyOn(component, 'nextMonth');

      component.focusedDate.value = new Date(2015, 4, 31);
      keyPress('ArrowRight');

      expect(component.focusedDate.value).toEqual(new Date(2015, 5, 1));
      expect(component.nextMonth).toHaveBeenCalled();
    });

    it('should go to previous month if date is less than 1', () => {
      spyOn(component, 'previousMonth');

      component.focusedDate.value = new Date(2015, 4, 1);
      keyPress('ArrowLeft');

      expect(component.focusedDate.value).toEqual(new Date(2015, 3, 30));
      expect(component.previousMonth).toHaveBeenCalled();
    });

    it('should not change dates if date is over number of days in month and next month is disabled', () => {
      spyOn(component, 'nextMonth');
      component.nextMonthDisabled = true;

      component.focusedDate.value = new Date(2015, 4, 28);
      keyPress('ArrowDown');

      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 28));
      expect(component.nextMonth).not.toHaveBeenCalled();
    });

    it('should not change dates if date is less than 1 and previous month is disabled', () => {
      spyOn(component, 'previousMonth');
      component.previousMonthDisabled = true;

      component.focusedDate.value = new Date(2015, 4, 3);
      keyPress('ArrowUp');

      expect(component.focusedDate.value).toEqual(new Date(2015, 4, 3));
      expect(component.previousMonth).not.toHaveBeenCalled();
    });

    it('should submit the date if valid date when enter pressed', () => {
      spyOn(component.datePicked, 'emit');
      keyPress('Enter');

      expect(component.datePicked.emit).toHaveBeenCalledWith(new Date(2015, 4, 15));
    });

    it('should not submit the date if date is disabled when enter pressed', () => {
      component.focusedDate.disabled = true;
      spyOn(component.datePicked, 'emit');
      keyPress('Enter');

      expect(component.datePicked.emit).not.toHaveBeenCalled();
    });
  });
});


function keyPress(key: string): void {
  window.dispatchEvent(new KeyboardEvent('keydown', {key: key }));
}
