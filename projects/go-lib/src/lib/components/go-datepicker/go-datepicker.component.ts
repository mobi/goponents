import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoCalendar } from './go-calendar';
import { LocaleFormat } from './locale-format';

@Component({
  selector: 'go-datepicker',
  styleUrls: ['./go-datepicker.component.scss'],
  templateUrl: './go-datepicker.component.html'
})
export class GoDatepickerComponent implements OnDestroy, OnInit {
  displayAbove: boolean = false;
  displayFromRight: boolean = false;
  goCalendar: GoCalendar;
  id: string;
  max: Date;
  min: Date;
  selectedDate: string;
  subscription: any;

  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() key: string;
  @Input() label: string;
  @Input() locale: string = 'en-US';
  @Input() maxDate: Date | string;
  @Input() minDate: Date | string;
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  @ViewChild('datepickerInput') datepickerInput: ElementRef;

  constructor() {
    this.goCalendar = new GoCalendar();
  }

  ngOnInit(): void {
    this.min = this.initializeDate(this.minDate);
    this.max = this.initializeDate(this.maxDate);
    this.id = this.key || this.generateId(this.label);

    this.selectedDate = this.control.value;
    if (this.control.value) {
      this.datePicked(this.initializeDate(this.control.value));
    }

    this.initializePlaceholder();

    if (!this.control.value && this.selectedDate) {
      // valueChanges doesn't pick up the initialized date
      this.control.setErrors([{ message: 'format is invalid' }]);
    }

    this.subscription = this.control.valueChanges.subscribe((value: Date) => {
      if (!value && this.selectedDate) {
        this.control.setErrors([{ message: 'format is invalid' }]);
      } else {
        this.selectedDate = LocaleFormat.formatDate(value, this.locale);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public openDatepicker(event: Event): void {
    event.stopPropagation();
    const distance: object = this.datepickerInput.nativeElement.getBoundingClientRect();

    this.displayFromRight = window.innerWidth - distance['left'] < 350;
    this.displayAbove = window.innerHeight - distance['top'] < 350;
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

  public validateDate(): void {
    this.datePicked(LocaleFormat.parse(this.selectedDate, this.locale));
  }

  public restrictInput(): void {
    this.selectedDate = this.selectedDate.replace(/[^0-9/.-]/g, '');
  }

  private initializeDate(date: Date | string): Date {
    if (date instanceof Date) {
      return date;
    }
    return LocaleFormat.parse(date, 'en-US');
  }

  private generateId(label: string): string {
    const labelText: string = label || 'datepicker';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }

  private initializePlaceholder(): void {
    this.placeholder = this.placeholder || LocaleFormat.format(this.locale);
  }
}
