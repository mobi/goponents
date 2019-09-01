import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DateAdapter } from '../date-adapter';

@Component({
  selector: 'go-calendar-day-view',
  styleUrls: ['./go-calendar-day-view.component.scss'],
  templateUrl: './go-calendar-day-view.component.html',
})
export class GoCalendarDayViewComponent implements OnChanges, OnInit {
  focusedDate: object;
  weeks: object[][];

  @Input() day: Date;
  @Input() month: number;
  @Input() year: object;
  @Input() dateAdapter: DateAdapter;

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
        this.setFocusedDate(this.focusedDate['date'].getDate() + 7);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate['date'].getDate() - 7);
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate['date'].getDate() - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        event.preventDefault();
        this.setFocusedDate(this.focusedDate['date'].getDate() + 1);
        break;
      case 'Enter':
        event.preventDefault();
        this.pickDay(this.focusedDate['date']);
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    this.setFocusedDate(this.day.getDate());
  }

  ngOnChanges(): void {
    this.calculateMonth();
    if (this.focusedDate) {
      this.setFocusedDate(this.focusedDate['date'].getDate());
    }
  }

  public nextMonth(): void {
    const nextMonth: number = this.dateAdapter.nextMonth(this.month);

    this.setMonth.emit(nextMonth);

    if (nextMonth === 0) {
      this.setYear.emit(this.year['year'] + 1);
    }
  }

  public previousMonth(): void {
    const previousMonth: number = this.dateAdapter.previousMonth(this.month);

    this.setMonth.emit(previousMonth);

    if (previousMonth === 11) {
      this.setYear.emit(this.year['year'] - 1);
    }
  }

  public switchView(): void {
    this.setView.emit('year');
  }

  public pickDay(date: Date): void {
    this.datePicked.emit(date);
  }

  private setFocusedDate(day: number): void {
    this.focusedDate['focused'] = false;
    if (day > this.dateAdapter.daysInMonth(this.month, this.year['year'])) {
      const lastMonth: number = this.month;
      this.nextMonth();
      this.focusedDate = this.findDay(day - this.dateAdapter.daysInMonth(lastMonth, this.year['year']));
    } else if (day < 1) {
      this.previousMonth();
      this.focusedDate = this.findDay(this.dateAdapter.daysInMonth(this.month, this.year['year']) + day);
    } else {
      this.focusedDate = this.findDay(day);
    }
    this.focusedDate['focused'] = true;
  }

  private calculateMonth(): void {
    const firstDate: number = new Date(this.year['year'] + '/' + (this.month + 1) + '/01').getDay();

    this.weeks = [[]];
    let daysLeft: number = this.dateAdapter.daysInMonth(this.month, this.year['year']);
    let currentDay: number = 1;

    for (let i: number = firstDate - 1; i >= 0; i--) {
      this.weeks[0].push({ month: '', date: '' });
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

    if (!this.focusedDate && this.weeks[currentWeek][idx]['selected']) {
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


  private createDay(day: number): object {
    const date: Date = new Date(this.year['year'] + '/' + (this.month + 1) + '/' + day);
    const selected: boolean = this.isSelected(date);

    return {
      date: date,
      dateToShow: this.dateAdapter.dateNames[day - 1],
      selected: selected
    };
  }

  private findDay(day: number): object {
    const firstDate: number = new Date(this.year['year'] + '/' + (this.month + 1) + '/01').getDay();
    const week: number = Math.floor((day + firstDate - 1) / 7);
    const dayOfWeek: number = (day + firstDate - 1) % 7;
    return this.weeks[week][dayOfWeek];
  }
}
