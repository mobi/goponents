import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
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
export class GoCalendarComponent implements OnDestroy, OnInit, AfterViewChecked {
  canClose: boolean = true;
  currentMonth: number = 0;
  currentYear: CalendarCell;
  dateAdapter: DateAdapter;
  opened: boolean = false;
  selectedDate: Date;
  subscription: any;
  view: string = 'day';

  @Input() appendToContent: boolean;
  @Input() calendar: GoCalendar;
  @Input() displayAbove: boolean;
  @Input() displayFromRight: boolean;
  @Input() locale: string;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() appendTo: string;

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();
  @ViewChild('calendarView', { static: true }) calendarView: ElementRef;

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
    this.canClose = false;
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
    this.selectedDate = this.calendar.selectedDate;
    this.initializeDate();
    this.dateAdapter.setLocale(this.locale);
  }

  ngAfterViewChecked(): void {
    this.appendToCalendar();
  }

  ngOnDestroy(): void {
    this.removeCalendarFromBody();
    this.closeCalendar();
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

  appendToCalendar(): void {
    if (this.appendTo === 'body') {
      const calenderBodyPosition: any = this.calendarView.nativeElement.getBoundingClientRect();
      Object.assign(this.calendarView.nativeElement.style, {
        height: `${calenderBodyPosition.height}px`,
        bottom: `${calenderBodyPosition.bottom}px`,
        top: `${calenderBodyPosition.top}px`,
        right: `${calenderBodyPosition.right}px`,
        width: `${calenderBodyPosition.width}px`,
        left: `${calenderBodyPosition.left}px`,
      });
      document.body.appendChild(this.calendarView.nativeElement);
    }
  }

  removeCalendarFromBody(): void {
    if (this.appendTo && this.calendarView) {
      document.body.removeChild(this.calendarView.nativeElement);
    }
  }
}
