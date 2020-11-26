import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';
import { GoTime } from './go-time';
@Component({
  selector: 'go-timepicker',
  styleUrls: ['./go-timepicker.component.scss'],
  templateUrl: './go-timepicker.component.html',
})
export class GoTimepickerComponent implements OnInit {
  displayAbove: boolean = false;
  displayFromRight: boolean = true;
  id: string;

  @Input() key: string;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';
  @Input() appendToContent: boolean = false;

  goTime: GoTime;

  selectedTime: string;

  @ViewChild('datepickerInput', { static: true }) datepickerInput: ElementRef;
  constructor() {
    this.goTime = new GoTime();
  }
  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'timepicker');
    this.selectedTime = this.changeTimeFormat(this.control.value);
  }
  public changeTimeFormat(timeString) {
    if (!timeString) {
      return;
    }
    const H = +timeString.substr(0, 2);
    const h = H % 12 || 12;
    const hour = h > 9 ? h : '0' + h;
    const ampm = H < 12 || H === 24 ? 'AM' : 'PM';
    timeString = hour + timeString.substr(2, 3) + ' ' + ampm;
    return timeString;
  }

  public validateTime(): void {}
  public toggleTimepicker(event: Event): void {
    event.stopPropagation();
    // Have to disable this here because of the event that we need to stop propagation on.
    if (this.control.disabled) {
      return;
    }

    if (this.goTime.isOpen) {
      this.goTime.closeTime();
    } else {
      const position: string = 'top';
      const distance: object = this.datepickerInput.nativeElement.getBoundingClientRect();
      this.displayAbove =
      window.innerHeight - distance[position] < 350 && !this.appendToContent;
      const convert24Hr: string =  (/^\s*$/).test(this.selectedTime) ?  undefined : this.convertTo24Hour(this.selectedTime);
      const openTimeValue: string = convert24Hr ? convert24Hr : undefined;
      this.goTime.openTime(openTimeValue);
    }
  }
  public timePicked(event) {
    if (event) {
      const selctedTime: string = event.hours + ':' + event.minutes + ' ' + event.ampm;
      this.control.setValue(selctedTime);
      this.selectedTime = selctedTime;
    } else {
      this.selectedTime = '';
    }
  }
  convertTo24Hour(time12h) {
    if (time12h){
      const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
    }
  }
}
