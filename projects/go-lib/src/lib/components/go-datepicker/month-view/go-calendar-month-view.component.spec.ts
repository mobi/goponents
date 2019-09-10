import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../../go-icon-button/go-icon-button.module';
import { GoCalendarMonthViewComponent } from './go-calendar-month-view.component';
import { DateAdapter } from '../date-adapter';


describe('GoCalendarMonthViewComponent', () => {
  let component: GoCalendarMonthViewComponent;
  let fixture: ComponentFixture<GoCalendarMonthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCalendarMonthViewComponent
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
    fixture = TestBed.createComponent(GoCalendarMonthViewComponent);
    component = fixture.componentInstance;
    component.month = 5;
    component.year = { translated: '', value: 2015 };
    component.dateAdapter = new DateAdapter();
  });

  it('should create', () => {
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('nextYear', () => {
    beforeEach(() => {
      component.ngOnChanges();
      fixture.detectChanges();
    });

    it('should send an event with the next year', () => {
      spyOn(component.setYear, 'emit');
      component.nextYear();
      expect(component.setYear.emit).toHaveBeenCalledWith(2016);
    });
  });

  describe('previousYear', () => {
    beforeEach(() => {
      component.ngOnChanges();
      fixture.detectChanges();
    });

    it('should send an event with the previous year', () => {
      spyOn(component.setYear, 'emit');
      component.previousYear();
      expect(component.setYear.emit).toHaveBeenCalledWith(2014);
    });
  });

  describe('onChanges', () => {
    afterEach(() => {
      component.maxDate = null;
      component.minDate = null;
    });

    it('should set up months', () => {
      component.ngOnChanges();

      expect(component.months.length).toBe(3);
      expect(component.months[2].length).toBe(4);
    });

    it('should set disabled on any months after the maxDate', () => {
      component.maxDate = new Date(2015, 5, 15);
      component.ngOnChanges();

      expect(component.months[1][1].disabled).toBe(false); // Same month as maxDate
      expect(component.months[1][2].disabled).toBe(true); // month after maxDate
    });

    it('should set next year disabled if first day of next year is after max date', () => {
      component.maxDate = new Date(2015, 11, 31);
      component.ngOnChanges();
      expect(component.nextYearDisabled).toBe(true);
    });

    it('should set disabled on any months before the minDate', () => {
      component.minDate = new Date(2015, 3, 15);
      component.ngOnChanges();

      expect(component.months[0][3].disabled).toBe(false); // Same month as minDate
      expect(component.months[0][2].disabled).toBe(true); // month before minDate
    });

    it('should set previous year disabled if last day of previous year is before minDate', () => {
      component.minDate = new Date(2015, 0, 1);
      component.ngOnChanges();
      expect(component.previousYearDisabled).toBe(true);
    });

    it('should set focusedMonth to be the month passed in', () => {
      component.focusedMonth = null;
      component.ngOnChanges();
      expect(component.focusedMonth.value).toBe(5);
    });
  });

  describe('keyboard events', () => {
    beforeEach(() => {
      component.ngOnChanges();
    });

    it('should increase the focused month by 1 if arrow right', () => {
      keyPress('ArrowRight');
      expect(component.focusedMonth.value).toEqual(6);
    });

    it('should decrease the focused month by 1 if arrow left', () => {
      keyPress('ArrowLeft');
      expect(component.focusedMonth.value).toEqual(4);
    });

    it('should increase the focused month by 4 if arrow down', () => {
      keyPress('ArrowDown');
      expect(component.focusedMonth.value).toEqual(9);
    });

    it('should decrease the focused month by 4 if arrow up', () => {
      keyPress('ArrowUp');
      expect(component.focusedMonth.value).toEqual(1);
    });

    it('should not change months if next month is over 11', () => {
      component.focusedMonth.value = 11;
      keyPress('ArrowRight');

      expect(component.focusedMonth.value).toEqual(11);
    });

    it('should not change months if previous month is under 0', () => {
      component.focusedMonth.value = 0;
      keyPress('ArrowLeft');

      expect(component.focusedMonth.value).toEqual(0);
    });

    it('should submit the month if valid month when enter pressed', () => {
      spyOn(component.setMonth, 'emit');
      keyPress('Enter');

      expect(component.setMonth.emit).toHaveBeenCalledWith(5);
    });

    it('should switch to day view when valid month submitted', () => {
      spyOn(component.setView, 'emit');
      keyPress('Enter');

      expect(component.setView.emit).toHaveBeenCalledWith('day');
    });

    it('should not submit the month if month is disabled when enter pressed', () => {
      component.focusedMonth.disabled = true;
      spyOn(component.setMonth, 'emit');
      spyOn(component.setView, 'emit');

      keyPress('Enter');

      expect(component.setMonth.emit).not.toHaveBeenCalled();
      expect(component.setView.emit).not.toHaveBeenCalled();
    });
  });
});


function keyPress(key: string): void {
  window.dispatchEvent(new KeyboardEvent('keydown', {key: key }));
}
