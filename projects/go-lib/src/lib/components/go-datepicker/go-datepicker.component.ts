import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoCalendar } from './go-calendar';
import { LocaleFormat } from './locale-format';
import { GoFormService } from '../../services/form.service';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-datepicker',
  styleUrls: ['./go-datepicker.component.scss'],
  templateUrl: './go-datepicker.component.html'
})
export class GoDatepickerComponent extends GoFormBaseComponent implements OnDestroy, OnInit {
  displayAbove: boolean = false;
  displayFromRight: boolean = true;
  goCalendar: GoCalendar;
  max: Date;
  min: Date;
  selectedDate: string;
  subscription: any;

  @Input() appendTo: 'body' | null = null;
  @Input() appendToContent: boolean = false;
  @Input() locale: string = 'en-US';
  @Input() maxDate: Date | string;
  @Input() minDate: Date | string;

  @ViewChild('datepickerInput', { static: true }) datepickerInput: ElementRef;

  constructor(goFormService: GoFormService) {
    super(goFormService);
    this.goCalendar = new GoCalendar();
  }

  ngOnInit(): void {
    this.min = this.initializeDate(this.minDate);
    this.max = this.initializeDate(this.maxDate);

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
      if (!value) {
        this.selectedDate = null;
      } else {
        const localeDateIsValid: boolean = LocaleFormat.validDate(value.getMonth(), value.getDate(), value.getFullYear());

        const dateValid: boolean = (value instanceof Date) && localeDateIsValid;

        if (!dateValid) {
          this.control.setErrors([{ message: 'format is invalid' }]);
        } else {
          this.selectedDate = LocaleFormat.formatDate(value, this.locale);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleDatepicker(event: Event): void {
    event.stopPropagation();

    // Have to disable this here because of the event that we need to stop propagation on.
    if (this.control.disabled) {
      return;
    }

    if (this.goCalendar.isOpen) {
      this.goCalendar.closeCalendar();
    } else {
      const distance: object = this.datepickerInput.nativeElement.getBoundingClientRect();

      this.displayAbove = window.innerHeight - distance['top'] < 350 && !this.appendToContent;
      this.goCalendar.openCalendar(this.control.value);
    }
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
    this.selectedDate = this.selectedDate?.replace(/[^0-9/.-]/g, '');
  }

  private initializeDate(date: Date | string): Date {
    if (date instanceof Date) {
      return date;
    }
    return LocaleFormat.parse(date, 'en-US');
  }

  private initializePlaceholder(): void {
    this.placeholder = this.placeholder || LocaleFormat.format(this.locale);
  }
}
