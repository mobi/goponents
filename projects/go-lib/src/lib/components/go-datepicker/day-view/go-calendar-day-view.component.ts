import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DateAdapter } from '../date-adapter';
import { CalendarCell, CalendarCellDate } from '../calendar-cell.model';

@Component({
  selector: 'go-calendar-day-view',
  styleUrls: ['../calendar-views.scss'],
  templateUrl: './go-calendar-day-view.component.html',
})
export class GoCalendarDayViewComponent implements OnChanges, OnInit {
  focusedDate: CalendarCellDate;
  nextMonthDisabled: boolean;
  previousMonthDisabled: boolean;
  weeks: CalendarCellDate[][];

  @Input() dateAdapter: DateAdapter;
  @Input() day: Date;
  @Input() maxDate?: Date;
  @Input() minDate?: Date;
  @Input() month: number;
  @Input() year: CalendarCell;

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() setMonth: EventEmitter<number> = new EventEmitter<number>();
  @Output() setView: EventEmitter<string> = new EventEmitter<string>();
  @Output() setYear: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate.value.getDate() + 7);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate.value.getDate() - 7);
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate.value.getDate() - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate.value.getDate() + 1);
        break;
      case 'Enter':
        event.preventDefault();
        if (!this.focusedDate.disabled) {
          this.pickDay(this.focusedDate.value);
        }
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    if (this.validDate(this.day)) {
      this.setFocusedDate(this.day.getDate());
    } else {
      this.setFocusedDate(1);
    }
  }

  ngOnChanges(): void {
    this.calculateMonth();
    if (this.focusedDate) {
      this.setFocusedDate(this.focusedDate.value.getDate());
    }
    this.nextMonthDisabled = this.nextMonthInvalid();
    this.previousMonthDisabled = this.previousMonthInvalid();
  }

  public nextMonth(): void {
    const nextMonth: number = this.dateAdapter.nextMonth(this.month);

    this.setMonth.emit(nextMonth);

    if (nextMonth === 0) {
      this.setYear.emit(this.year.value + 1);
    }
  }

  public previousMonth(): void {
    const previousMonth: number = this.dateAdapter.previousMonth(this.month);

    this.setMonth.emit(previousMonth);

    if (previousMonth === 11) {
      this.setYear.emit(this.year.value - 1);
    }
  }

  public switchView(): void {
    this.setView.emit('year');
  }

  public pickDay(date: Date): void {
    this.datePicked.emit(date);
  }

  private setFocusedDate(day: number): void {
    let newDate: number;
    if (this.focusedDate) {
      this.focusedDate.focused = false;
    }
    if (day > this.dateAdapter.daysInMonth(this.month, this.year.value)) {
      if (!this.nextMonthDisabled) {
        newDate = day - this.dateAdapter.daysInMonth(this.month, this.year.value);
        this.focusedDate = this.createDay(newDate, this.dateAdapter.nextMonth(this.month));
        this.nextMonth();
      }
    } else if (day < 1) {
      if (!this.previousMonthDisabled) {
        const previousMonth: number = this.dateAdapter.previousMonth(this.month);
        newDate = day + this.dateAdapter.daysInMonth(previousMonth, this.year.value);
        this.focusedDate = this.createDay(newDate, previousMonth);
        this.previousMonth();
      }
    } else {
      this.focusedDate = this.findDay(day);
    }
    this.focusedDate.focused = true;
  }

  private calculateMonth(): void {
    const firstDate: number = new Date(this.year.value + '/' + (this.month + 1) + '/01').getDay();

    this.weeks = [[]];
    let daysLeft: number = this.dateAdapter.daysInMonth(this.month, this.year.value);
    let currentDay: number = 1;

    for (let i: number = firstDate - 1; i >= 0; i--) {
      this.weeks[0].push({ value: null, translated: '' });
    }

    for (let i: number = this.weeks[0].length; i < 7; i++) {
      this.addDate(0, currentDay, i);
      daysLeft --;
      currentDay ++;
    }

    let currentWeek: number = 1;

    while (daysLeft > 0) {
      let daysInWeek: number;
      this.weeks.push([]);
      if (daysLeft < 7) {
        daysInWeek = daysLeft;
      } else {
        daysInWeek = 7;
      }

      for (let i: number = 0; i < daysInWeek; i++) {
        this.addDate(currentWeek, currentDay, i);

        daysLeft --;
        currentDay ++;
      }
      currentWeek ++;
    }
  }


  private addDate(currentWeek: number, currentDay: number, idx: number): void {
    this.weeks[currentWeek].push(this.createDay(currentDay));

    if (!this.focusedDate && this.weeks[currentWeek][idx].selected) {
      this.focusedDate = this.findDay(currentDay);
    }
  }

  private isSelected(day: Date): boolean {
    if (day.getFullYear() === this.day.getFullYear() &&
        day.getMonth() === this.day.getMonth() &&
        day.getDate() === this.day.getDate()) {
      return true;
    }
    return false;
  }


  private createDay(day: number, month?: number): CalendarCellDate {
    month = month || this.month;
    const date: Date = new Date(this.year.value, month, day);
    const selected: boolean = this.isSelected(date);
    const disabled: boolean = this.isDisabled(date);

    return {
      value: date,
      disabled: disabled,
      translated: this.dateAdapter.dateNames[day - 1],
      selected: selected
    };
  }

  private findDay(day: number): CalendarCellDate {
    const firstDate: number = new Date(this.year.value, this.month, 1).getDay();
    const week: number = Math.floor((day + firstDate - 1) / 7);
    const dayOfWeek: number = (day + firstDate - 1) % 7;
    return this.weeks[week][dayOfWeek];
  }

  private validDate(date: Date): boolean {
    if (
      !date
      || date.getMonth() !== this.month
      || date.getFullYear() !== this.year.value
    ) {
      return false;
    }
    return true;
  }

  private isDisabled(date: Date): boolean {
    return this.isAfterMax(date) || this.isBeforeMin(date);
  }

  private isAfterMax(date: Date): boolean {
    if (!this.maxDate) {
      return false;
    }
    if (date.getFullYear() < this.maxDate.getFullYear()  || // dates year is before max year
         (this.maxDate.getFullYear() === date.getFullYear() && // years are equal and
           (date.getMonth() < this.maxDate.getMonth() || // dates month is before max dates month or
             (date.getMonth() === this.maxDate.getMonth() && // same month and date is before max date
              date.getDate() <= this.maxDate.getDate()
             )
           )
         )
    ) {
      return false;
    }
    return true;
  }

  private isBeforeMin(date: Date): boolean {
    if (!this.minDate) {
      return false;
    }
    if (date.getFullYear() > this.minDate.getFullYear() || // dates year is after min year
         (this.minDate.getFullYear() === date.getFullYear() && // years are euqal and
           (date.getMonth() > this.minDate.getMonth() || // dates month is after min dates month or
             (date.getMonth() === this.minDate.getMonth() && // same month and date is after min date
              date.getDate() >= this.minDate.getDate()
             )
           )
         )
    ) {
      return false;
    }
    return true;
  }

  private nextMonthInvalid(): boolean {
    if (!this.maxDate) {
      return false;
    }
    const nextMonth: number = this.dateAdapter.nextMonth(this.month);
    let year: number = this.year.value;
    if (nextMonth === 0) {
      year ++;
    }
    const firstDateOfMonth: Date = new Date(year, nextMonth, 1);
    if (firstDateOfMonth > this.maxDate) {
      return true;
    }
    return false;
  }

  private previousMonthInvalid(): boolean {
    if (!this.minDate) {
      return false;
    }
    const previousMonth: number = this.dateAdapter.previousMonth(this.month);
    let year: number = this.year.value;
    if (previousMonth === 11) {
      year --;
    }
    const lastDateOfMonth: Date = new Date(year, previousMonth, this.dateAdapter.daysInMonth(previousMonth, year));
    if (lastDateOfMonth < this.minDate) {
      return true;
    }
    return false;
  }
}
