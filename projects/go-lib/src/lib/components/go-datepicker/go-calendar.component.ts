import {
  AfterViewInit,
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
export class GoCalendarComponent implements OnDestroy, OnInit, AfterViewInit {
  canClose: boolean = true;
  currentMonth: number = 0;
  currentYear: CalendarCell;
  dateAdapter: DateAdapter;
  opened: boolean = false;
  selectedDate: Date;
  subscription: any;
  view: string = 'day';
  clickInner: boolean = false;

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.calendarView.nativeElement.contains(event.target) || this.clickInner) {
    this.canClose = true;
    this.clickInner = false;
  } else {
    if (this.canClose) {
      this.closeCalendar();
    }
    this.canClose = false;
    }
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

  ngAfterViewInit(): void {
    this.appendToCalendar();
    this.calendarView.nativeElement.addEventListener('click', (): void => {
      this.clickInner = true;
    });
}

  ngOnDestroy(): void {
    this.removeCalendarFromBody();
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
        bottom: `${calenderBodyPosition.bottom - 5 }px`,
        right: `${calenderBodyPosition.right}px`,
        width: `${calenderBodyPosition.width}px`,
        left: `${calenderBodyPosition.left}px`,
        height: this.displayAbove ? 'auto' : `max-content`,
        top: this.displayAbove ? 'auto' : `${calenderBodyPosition.top}px`
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
