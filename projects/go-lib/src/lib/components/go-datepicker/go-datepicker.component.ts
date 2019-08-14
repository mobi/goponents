import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-datepicker',
  templateUrl: 'go-datepicker.component.html',
  styleUrls: [ './go-datepicker.component.scss'],
})
export class GoDatepickerComponent {
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() label: string;
  @Input() locale: string = 'en-US';
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  @ViewChild('datepickerInput') datepickerInput: ElementRef;

  constructor() {}
}
