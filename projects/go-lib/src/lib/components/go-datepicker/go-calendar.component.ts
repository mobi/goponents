import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { GoCalendar } from './go-calendar';
import { DateAdapter } from './date-adapter';

@Component({
  selector: 'go-calendar',
  styleUrls: ['./go-calendar.component.scss'],
  templateUrl: './go-calendar.component.html',
  animations: [
    fadeAnimation
  ]
})
export class GoCalendarComponent implements OnInit {
  opened: boolean = false;
  currentMonth: number = 0;
  currentYear: object;
  selectedDate: Date;
  dateAdapter: DateAdapter;
  view: string = 'day';

  @Input() calendar: GoCalendar;

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(
  ) {
    this.dateAdapter = new DateAdapter();
  }

  ngOnInit(): void {
    this.calendar.calendarOpen.subscribe((value: boolean) => {
      if (value) {
        this.selectedDate = this.calendar.selectedDate;
        this.initializeDate();
      }
      this.opened = value;
    });

    this.calendar.locale.subscribe((value: string) => {
      this.dateAdapter.setLocale(value);
    });
  }

  public closeCalendar(): void {
    this.calendar.closeCalendar();
  }

  public setMonth(month: number): void {
    this.currentMonth = month;
    this.setValidDate();
  }

  public updateYear(year: number): void {
    this.currentYear = {
      year: year,
      translated: this.dateAdapter.getYearName(year)
    };

    this.setValidDate();
  }

  public pickDay(day: Date): void {
    this.datePicked.emit(day);
    this.calendar.closeCalendar();
  }

  public switchView(viewType: string): void {
    this.view = viewType;
  }

  private initializeDate(): void {
    if (!this.selectedDate) {
      this.selectedDate = new Date();
      this.selectedDate.setHours(0, 0, 0, 0);
    }
    this.currentMonth = this.selectedDate.getMonth();
    this.updateYear(this.selectedDate.getFullYear());
  }

  private setValidDate(): void {
    if (this.selectedDate.getMonth() !== this.currentMonth || this.selectedDate.getFullYear() !== this.currentYear['year']) {
      this.selectedDate = new Date(this.currentYear['year'], this.currentMonth, 1, 0, 0, 0, 0);
    }
  }
}
