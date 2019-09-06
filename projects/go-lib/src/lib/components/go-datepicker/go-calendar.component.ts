import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { GoCalendar } from './go-calendar';
import { DateAdapter } from './date-adapter';
import { CalendarCell } from './calendar-cell.model';

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
  currentYear: CalendarCell;
  selectedDate: Date;
  dateAdapter: DateAdapter;
  view: string = 'day';
  canClose: boolean = true;

  @Input() calendar: GoCalendar;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() displayFromRight: boolean;
  @Input() displayAbove: boolean;
  @Input() locale: string;

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.dateAdapter = new DateAdapter();
  }

  @HostListener('click')
  ClickInside(): void {
    this.canClose = false;
  }

  @HostListener('document: click')
  onDocumentClick(): void {
    if (this.canClose) {
      this.closeCalendar();
    }
    this.canClose = true;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        event.preventDefault();
        this.closeCalendar();
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    this.calendar.calendarOpen.subscribe((value: boolean) => {
      if (value) {
        this.selectedDate = this.calendar.selectedDate;
        this.initializeDate();
      }
      this.opened = value;
    });

    this.dateAdapter.setLocale(this.locale);
  }

  public closeCalendar(): void {
    this.calendar.closeCalendar();
  }

  public setMonth(month: number): void {
    this.currentMonth = month;
  }

  public updateYear(year: number): void {
    this.currentYear = {
      value: year,
      translated: this.dateAdapter.getYearName(year)
    };
  }

  public pickDay(day: Date): void {
    this.datePicked.emit(day);
    this.closeCalendar();
  }

  public switchView(viewType: 'year' | 'month' | 'day'): void {
    this.view = viewType;
  }

  private initializeDate(): void {
    let newDate: Date;

    if (!this.selectedDate) {
      newDate = new Date();
      newDate.setHours(0, 0, 0, 0);

      const invalid: boolean = this.calendar.dateOutOfRange(newDate, this.minDate, this.maxDate);
      if (invalid && this.minDate) {
        newDate = this.minDate;
      } else if (invalid && this.maxDate) {
        newDate = this.maxDate;
      }
      this.selectedDate = newDate;
    }
    this.currentMonth = this.selectedDate.getMonth();
    this.updateYear(this.selectedDate.getFullYear());
  }
}
