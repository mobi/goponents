import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';
import { GoTimeFormat } from './go-time-format.model';

@Component({
  selector: 'go-timepicker',
  styleUrls: ['./go-timepicker.component.scss'],
  templateUrl: './go-timepicker.component.html',
})

export class GoTimepickerComponent implements OnInit {
  displayAbove: boolean = false;
  displayFromRight: boolean = true;
  timeOpen: boolean = false;
  id: string;
  openTimeValue: string;

  @Input() key: string;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';
  @Input() appendToContent: boolean = false;

  selectedTime: string = '';

  @ViewChild('datepickerInput', { static: true }) datepickerInput: ElementRef;

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'timepicker');
    this.selectedTime = this.changeTimeFormat(this.control.value);
  }

  public changeTimeFormat(timeString: string | Date): string {
    if (!timeString || timeString === 'Invalid Date') {
      return;
    }
    if (typeof(timeString) === 'object') {
      timeString = `${this.addZeroIfNeeded(timeString.getHours())}:${this.addZeroIfNeeded(timeString.getMinutes())}:00`;
    }
    const H: number = +timeString.substr(0, 2);
    const h: number | string = H % 12 || 12;
    const hour: number | string = this.addZeroIfNeeded(h);
    const ampm: string = H < 12 || H === 24 ? 'AM' : 'PM';
    timeString = hour + timeString.substr(2, 3) + ' ' + ampm;
    return timeString;
  }

  public toggleTimepicker(event: Event): void {
    event.stopPropagation();
    // Have to disable this here because of the event that we need to stop propagation on.
    if (this.control.disabled) {
      return;
    }

    this.timeOpen = !this.timeOpen;
    const position: string = 'top';
    const distance: object = this.datepickerInput.nativeElement.getBoundingClientRect();
    this.displayAbove =
      window.innerHeight - distance[position] < 350 && !this.appendToContent;
    const convert24Hr: string = /^\s*$/.test(this.selectedTime)
      ? undefined
      : this.convertTo24Hour(this.selectedTime);
    this.openTimeValue = convert24Hr ? convert24Hr : undefined;
  }

  public timePicked(event: GoTimeFormat): void {
    if (event) {
      const selctedTime: string =
        event.hours + ':' + event.minutes + ' ' + event.ampm;
      this.control.setValue(this.convertTo24Hour(selctedTime));
      this.selectedTime = selctedTime;
    } else {
      this.selectedTime = '';
      this.control.setValue(null);
    }
  }

 public closeTime(): void {
    this.timeOpen = false;
  }

  private convertTo24Hour(time12h: string): string {
    if (time12h) {
      const [time, modifier]: string[] = time12h.split(' ');

      // tslint:disable-next-line: prefer-const
      let [hours, minutes]: any[] = time.split(':');
      if (hours === '12') {
        hours = '00';
      }
      if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    }
  }

  addZeroIfNeeded(value: string | number): string | number {
    if (Number(value) < 10) {
      value = '0' + +value;
    }
    return value;
  }
}
