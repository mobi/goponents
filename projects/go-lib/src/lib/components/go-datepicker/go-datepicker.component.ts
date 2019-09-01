import { Component, Input, OnInit } from '@angular/core';
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

  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() key: string;
  @Input() label: string;
  @Input() locale: string = 'en-US';
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  constructor(
  ) {
    this.goCalendar = new GoCalendar();
  }

  ngOnInit(): void {
    this.selectedDate = this.control.value;

    this.control.valueChanges.subscribe((value: Date) => {
      if (!value && this.selectedDate) {
        this.control.setErrors([{ format: 'format is invalid' }]);
      }
    });
  }

  openDatepicker(): void {
    this.goCalendar.setLocale(this.locale);
    this.goCalendar.openCalendar(this.control.value);
  }

  datePicked(date: Date): void {
    this.control.setValue(date);
    if (this.control.value) {
      this.selectedDate = LocaleFormat.formatDate(date, this.locale);
    }
  }

  validateDate(): void {
    this.datePicked(LocaleFormat.parse(this.selectedDate.split(/[/\-.]/), this.locale));
  }
}
