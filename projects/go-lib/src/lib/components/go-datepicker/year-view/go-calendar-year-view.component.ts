import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '../date-adapter';
import { CalendarCell } from '../calendar-cell.model';

@Component({
  selector: 'go-calendar-year-view',
  styleUrls: ['../calendar-views.scss'],
  templateUrl: './go-calendar-year-view.component.html',
})
export class GoCalendarYearViewComponent implements OnInit {
  firstYear: CalendarCell;
  focusedYear: CalendarCell;
  lastYear: CalendarCell;
  nextGroupDisabled: boolean;
  previousGroupDisabled: boolean;
  years: CalendarCell[][];

  @Input() dateAdapter: DateAdapter;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() year: CalendarCell;

  @Output() setView: EventEmitter<string> = new EventEmitter<string>();
  @Output() setYear: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear.value + 4);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear.value - 4);
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear.value - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear.value + 1);
        break;
      case 'Enter':
        event.preventDefault();
        if (!this.focusedYear.disabled) {
          this.pickYear(this.focusedYear.value);
        }
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    this.setUpYears(this.year.value - 6);
    this.setFocusedYear(this.year.value);
  }

  public nextYearGroup(): void {
    this.setUpYears(this.lastYear.value + 1);
    this.setFocusedYear(this.focusedYear.value + 12);
  }

  public previousYearGroup(): void {
    this.setUpYears(this.firstYear.value - 12);
    this.setFocusedYear(this.focusedYear.value - 12);
  }

  public pickYear(year: number): void {
    this.setYear.emit(year);
    this.setView.emit('month');
  }

  private setUpYears(startYear: number): void {
    this.years = [];
    this.firstYear = this.createYear(startYear);

    for (let row: number = 0; row < 3; row++) {
      this.years.push([]);
      for (let col: number = 0; col < 4; col++) {
        const currentYear: number = startYear + (4 * row) + col;
        this.years[row].push(this.createYear(currentYear));

        if (!this.focusedYear && this.years[row][col].selected) {
          this.focusedYear = this.findYear(currentYear);
        }
      }
    }
    this.lastYear = this.years[2][3];

    this.nextGroupDisabled = this.nextYearGroupInvalid();
    this.previousGroupDisabled = this.previousYearGroupInvalid();
  }

  private setFocusedYear(year: number): void {
    this.focusedYear.focused = false;
    if (year > this.lastYear.value) {
      if (!this.nextGroupDisabled) {
        this.nextYearGroup();
        this.focusedYear = this.findYear(year);
      }
    } else if (year < this.firstYear.value) {
      if (!this.previousGroupDisabled) {
        this.previousYearGroup();
        this.focusedYear = this.findYear(year);
      }
    } else {
      this.focusedYear = this.findYear(year);
    }
    this.focusedYear.focused = true;
  }

  private findYear(year: number): CalendarCell {
    const row: number = Math.floor((year - this.firstYear.value) / 4);
    const col: number = (year - this.firstYear.value) % 4;
    return this.years[row][col];
  }

  private createYear(year: number): CalendarCell {
    const isSelected: boolean = year === this.year.value;
    return {
      disabled: this.isDisabled(year),
      value: year,
      selected: isSelected,
      translated: this.dateAdapter.getYearName(year)
    };
  }

  private isDisabled(year: number): boolean {
    return this.afterMaxDate(year) || this.beforeMinDate(year);
  }

  private afterMaxDate(year: number): boolean {
    if (!this.maxDate) {
      return false;
    }
    return this.maxDate.getFullYear() < year;
  }

  private beforeMinDate(year: number): boolean {
    if (!this.minDate) {
      return false;
    }
    return this.minDate.getFullYear() > year;
  }

  private nextYearGroupInvalid(): boolean {
    if (!this.maxDate) {
      return false;
    }
    const firstDateOfYear: Date = new Date(this.lastYear.value + 1, 0, 1);
    if (firstDateOfYear > this.maxDate) {
      return true;
    }
    return false;
  }

  private previousYearGroupInvalid(): boolean {
    if (!this.minDate) {
      return false;
    }
    const lastDateOfYear: Date = new Date(this.firstYear.value - 1, 11, 31);
    if (lastDateOfYear < this.minDate) {
      return true;
    }
    return false;
  }
}
