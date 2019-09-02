import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DateAdapter } from '../date-adapter';

@Component({
  selector: 'go-calendar-month-view',
  styleUrls: ['./go-calendar-month-view.component.scss'],
  templateUrl: './go-calendar-month-view.component.html',
})
export class GoCalendarMonthViewComponent implements OnChanges, OnInit {
  focusedMonth: object;
  months: object[][];

  @Input() month: number;
  @Input() year: object;
  @Input() dateAdapter: DateAdapter;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  @Output() setView: EventEmitter<string> = new EventEmitter<string>();
  @Output() setMonth: EventEmitter<number> = new EventEmitter<number>();
  @Output() setYear: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        event.preventDefault();
        this.setFocusedMonth(this.focusedMonth['month'] + 4);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        event.preventDefault();
        this.setFocusedMonth(this.focusedMonth['month'] - 4);
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        event.preventDefault();
        this.setFocusedMonth(this.focusedMonth['month'] - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        event.preventDefault();
        this.setFocusedMonth(this.focusedMonth['month'] + 1);
        break;
      case 'Enter':
        event.preventDefault();
        if (!this.focusedMonth['disabled']) {
          this.pickMonth(this.focusedMonth['month']);
        }
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    this.setFocusedMonth(this.month);
  }

  ngOnChanges(): void {
    this.setUpMonths();
  }

  public nextYear(): void {
    this.setYear.emit(this.year['year'] + 1);
  }

  public previousYear(): void {
    this.setYear.emit(this.year['year'] - 1);
  }

  public switchView(): void {
    this.setView.emit('day');
  }

  public pickMonth(month: number): void {
    this.setMonth.emit(month);
    this.setView.emit('day');
  }

  private setUpMonths(): void {
    this.months = [];

    for (let row: number = 0; row < 3; row++) {
      this.months.push([]);
      for (let col: number = 0; col < 4; col++) {
        const currentMonth: number = (4 * row) + col;
        this.months[row].push(this.createMonth(currentMonth));

        if (!this.focusedMonth && this.months[row][col]['selected']) {
          this.focusedMonth = this.findMonth(currentMonth);
        }
      }
    }
  }

  private setFocusedMonth(month: number): void {
    if (month < 12 && month >= 0) {
      this.focusedMonth['focused'] = false;
      this.focusedMonth = this.findMonth(month);
      this.focusedMonth['focused'] = true;
    }
  }

  private findMonth(month: number): object {
    const row: number = Math.floor(month / 4);
    const col: number = month % 4;
    return this.months[row][col];
  }

  private createMonth(month: number): object {
    const isSelected: boolean = month === this.month;
    return {
      disabled: this.isDisabled(month),
      month: month,
      selected: isSelected,
      translated: this.dateAdapter.monthNames[month]
    };
  }

  private isDisabled(month: number): boolean {
    return this.afterMaxMonth(month) || this.beforeMinMonth(month);
  }

  private afterMaxMonth(month: number): boolean {
    if (!this.maxDate) {
      return false;
    }
    if (this.year['year'] < this.maxDate.getFullYear() || // year is before max dates year
         (this.year['year'] === this.maxDate.getFullYear() && // year is the same as max dates year and
           month <= this.maxDate.getMonth() // month is before or equal to max dates month
         )
    ) {
      return false;
    }
    return true;
  }

  private beforeMinMonth(month: number): boolean {
    if (!this.minDate) {
      return false;
    }
    if (this.year['year'] > this.minDate.getFullYear() ||
         (this.year['year'] === this.minDate.getFullYear() &&
           month >= this.minDate.getMonth()
         )
    ) {
      return false;
    }
    return true;
  }
}
