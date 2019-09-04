import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() displayFromRight: boolean;
  @Input() displayAbove: boolean;

  @Output() datePicked: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(
    private elementRef: ElementRef
  ) {
    this.dateAdapter = new DateAdapter();
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    if (this.opened && !this.elementRef.nativeElement.contains(target)) {
      this.closeCalendar();
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
  }

  public updateYear(year: number): void {
    this.currentYear = {
      year: year,
      translated: this.dateAdapter.getYearName(year)
    };
  }

  public pickDay(day: Date): void {
    this.datePicked.emit(day);
    this.calendar.closeCalendar();
  }

  public switchView(viewType: string): void {
    this.view = viewType;
  }

  private initializeDate(): void {
    let newDate: Date;

    if (!this.selectedDate) {
      newDate = new Date();
      newDate.setHours(0, 0, 0, 0);

      const invalid: boolean = this.calendar.dateOutOfRange(this.selectedDate, this.minDate, this.maxDate);
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
