import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoCalendar } from './go-calendar';
import { LocaleFormat } from './locale-format';

@Component({
  selector: 'go-datepicker',
  styleUrls: ['./go-datepicker.component.scss'],
  templateUrl: './go-datepicker.component.html'
})
export class GoDatepickerComponent implements OnInit {
  selectedDate: string;
  goCalendar: GoCalendar;
  min: Date;
  max: Date;
  displayFromRight: boolean = false;
  displayAbove: boolean = false;

  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() key: string;
  @Input() label: string;
  @Input() locale: string = 'en-US';
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';
  @Input() maxDate: Date | string;
  @Input() minDate: Date | string;

  @ViewChild('datepickerInput') datepickerInput: ElementRef;

  constructor(
  ) {
    this.goCalendar = new GoCalendar();
  }

  ngOnInit(): void {
    this.min = this.initializeDate(this.minDate);
    this.max = this.initializeDate(this.maxDate);

    this.selectedDate = this.control.value;
    if (this.control.value instanceof Date) {
      this.datePicked(this.control.value);
    } else if (typeof this.control.value === 'string') {
      this.validateDate('en-US');
    }

    this.control.valueChanges.subscribe((value: Date) => {
      if (!value && this.selectedDate) {
        this.control.setErrors([{ message: 'format is invalid' }]);
      }
    });
  }

  public openDatepicker(): void {
    const distance: object = this.datepickerInput.nativeElement.getBoundingClientRect();

    this.displayFromRight = window.innerWidth - distance['left'] < 350;
    this.displayAbove = window.innerHeight - distance['top'] < 350;
    this.goCalendar.setLocale(this.locale);
    this.goCalendar.openCalendar(this.control.value);
  }

  public datePicked(date: Date): void {
    if (!this.goCalendar.dateOutOfRange(date, this.min, this.max)) {
      this.control.setValue(date);
      if (this.control.value) {
        this.selectedDate = LocaleFormat.formatDate(date, this.locale);
      }
    } else {
      this.control.setValue(null);
      this.control.setErrors([{ message: 'Date is out of range' }]);
    }
  }

  public validateDate(locale: string): void {
    locale = locale || this.locale;
    this.datePicked(LocaleFormat.parse(this.selectedDate, locale));
  }

  public restrictInput(): void {
    this.selectedDate = this.selectedDate.replace(/[^0-9/.-]+$/, '');
  }

  private initializeDate(date: Date | string): Date {
    if (date instanceof Date) {
      return date;
    }
    return LocaleFormat.parse(date, 'en-US');
  }
}
