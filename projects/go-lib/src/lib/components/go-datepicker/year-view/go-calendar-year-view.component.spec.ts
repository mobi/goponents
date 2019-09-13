import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../../go-icon-button/go-icon-button.module';
import { GoCalendarYearViewComponent } from './go-calendar-year-view.component';
import { DateAdapter } from '../date-adapter';


describe('GoCalendarYearViewComponent', () => {
  let component: GoCalendarYearViewComponent;
  let fixture: ComponentFixture<GoCalendarYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCalendarYearViewComponent
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
    fixture = TestBed.createComponent(GoCalendarYearViewComponent);
    component = fixture.componentInstance;
    component.year = { translated: '', value: 2015 };
    component.dateAdapter = new DateAdapter();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('nextYearGroup', () => {
    it('should set up the next group of years starting after the last year in the current group', () => {
      fixture.detectChanges();
      component.nextYearGroup();

      expect(component.years[0][0].value).toBe(2024);
    });
  });

  describe('previousYearGroup', () => {
    it('should set up the previous group of years starting before the first year in the current group', () => {
      fixture.detectChanges();
      component.previousYearGroup();

      expect(component.years[5][3].value).toBe(1999);
    });
  });

  describe('onInit', () => {
    afterEach(() => {
      component.maxDate = null;
      component.minDate = null;
      component.year.value = 2015;
    });

    it('sets up a first year 15 years before the selected year', () => {
      fixture.detectChanges();
      expect(component.years[0][0].value).toBe(2000);
      expect(component.firstYear.value).toBe(2000);
    });

    it('sets up a last year 15 years before the selected year', () => {
      fixture.detectChanges();
      expect(component.years[5][3].value).toBe(2023);
      expect(component.lastYear.value).toBe(2023);
    });

    it('sets the focused year to be the year passed in', () => {
      fixture.detectChanges();
      expect(component.focusedYear.value).toBe(2015);
    });

    it('set nextGroupDisabled if first day of next group is after max Date', () => {
      component.maxDate = new Date(2016, 0, 1);
      fixture.detectChanges();

      expect(component.nextGroupDisabled).toBe(true);
    });

    it('sets previousGroupDisabled if last day of previous group is before min Date', () => {
      component.minDate = new Date(2014, 0, 1);
      fixture.detectChanges();

      expect(component.previousGroupDisabled).toBe(true);
    });
  });

  describe('keyboard events', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should increase the focused year by 1 if arrow right', () => {
      keyPress('ArrowRight');
      expect(component.focusedYear.value).toEqual(2016);
    });

    it('should decrease the focused year by 1 if arrow left', () => {
      keyPress('ArrowLeft');
      expect(component.focusedYear.value).toEqual(2014);
    });

    it('should increase the focused year by 4 if arrow down', () => {
      keyPress('ArrowDown');
      expect(component.focusedYear.value).toEqual(2019);
    });

    it('should decrease the focused year by 4 if arrow up', () => {
      keyPress('ArrowUp');
      expect(component.focusedYear.value).toEqual(2011);
    });

    it('should not change years if next year group is disabled and last year in group', () => {
      component.focusedYear.value = 2023;
      component.nextGroupDisabled = true;
      keyPress('ArrowRight');

      expect(component.focusedYear.value).toEqual(2023);
    });

    it('should not change years if previous year group is disabled and first year in group', () => {
      component.focusedYear.value = 2000;
      component.previousGroupDisabled = true;
      keyPress('ArrowLeft');

      expect(component.focusedYear.value).toEqual(2000);
    });

    it('should set year group to next year group if last year in group', () => {
      component.focusedYear.value = 2023;
      keyPress('ArrowRight');

      expect(component.focusedYear.value).toEqual(2024);
      expect(component.firstYear.value).toBe(2024);
      expect(component.years[0][0].value).toBe(2024);
      expect(component.lastYear.value).toBe(2047);
      expect(component.years[5][3].value).toBe(2047);
    });

    it('should set year group to previous year group if first year in group', () => {
      component.focusedYear.value = 2000;
      keyPress('ArrowLeft');

      expect(component.focusedYear.value).toEqual(1999);
      expect(component.firstYear.value).toBe(1976);
      expect(component.years[0][0].value).toBe(1976);
      expect(component.lastYear.value).toBe(1999);
      expect(component.years[5][3].value).toBe(1999);
    });

    it('should submit the year if valid year when enter pressed', () => {
      spyOn(component.setYear, 'emit');
      keyPress('Enter');

      expect(component.setYear.emit).toHaveBeenCalledWith(2015);
    });

    it('should switch to month view when valid year submitted', () => {
      spyOn(component.setView, 'emit');
      keyPress('Enter');

      expect(component.setView.emit).toHaveBeenCalledWith('month');
    });

    it('should not submit the year if year is disabled when enter pressed', () => {
      component.focusedYear.disabled = true;
      spyOn(component.setYear, 'emit');
      spyOn(component.setView, 'emit');

      keyPress('Enter');

      expect(component.setYear.emit).not.toHaveBeenCalled();
      expect(component.setView.emit).not.toHaveBeenCalled();
    });
  });
});


function keyPress(key: string): void {
  window.dispatchEvent(new KeyboardEvent('keydown', {key: key }));
}
