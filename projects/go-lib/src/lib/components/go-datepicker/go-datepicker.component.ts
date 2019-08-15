import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { AppDateAdapter } from './date-adapter.model';
import { LocaleFormat } from './locale-format.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-datepicker',
  templateUrl: 'go-datepicker.component.html',
  styleUrls: [ './go-datepicker.component.scss'],
  providers: [{provide: DateAdapter, useClass: AppDateAdapter}]
})
export class GoDatepickerComponent implements OnInit {
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() label: string;
  @Input() locale: string = 'en-US';
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  @ViewChild('datepickerInput') datepickerInput: ElementRef;

  constructor(private dateAdapter: DateAdapter<Date>) {}

  ngOnInit(): void {
    if (this.locale) {
      this.dateAdapter.setLocale(this.locale);
    }

    if (!this.placeholder && !this.locale.includes('ar')) {
      // The araibic character set is completely different so we just won't show this here
      this.placeholder = LocaleFormat.format(this.locale);
    }

    this.control.valueChanges.subscribe((value: Date) => {
      if (!value && this.datepickerInput.nativeElement.value) {
        this.control.setErrors({ format: 'format is invalid' });
      }
    });
  }
}