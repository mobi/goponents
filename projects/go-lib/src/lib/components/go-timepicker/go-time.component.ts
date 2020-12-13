import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';

import { GoTime } from './go-time';
@Component({
  selector: 'go-time',
  styleUrls: ['./go-time.component.scss'],
  templateUrl: './go-time.component.html',
  animations: [fadeAnimation],
})
export class GoTimeComponent implements OnInit, AfterViewInit {

  @Input() appendToContent: boolean;
  @Input() goTime: GoTime;
  @Input() displayAbove: boolean;
  @Input() displayFromRight: boolean;
  @Output() timePicked: any = new EventEmitter<any>();

  inputHourError: boolean = false;
  inputMinuteError: boolean = false;
  format: boolean = true;
  opened: boolean = false;
  clickInside: boolean = false;
  clickActionButton: boolean = false;
  timeFormat: any = { hours: '', minutes: '', ampm: '' };
  subscription: any;
  hour: string;
  minute: string;

  @ViewChild('hourInput', { static: false }) hourInput: ElementRef;

  constructor() {}

  @HostListener('click')
  ClickInside(): void {
    this.clickInside = this.clickActionButton ? false : true;
    this.opened = true;
  }

  @HostListener('document: click')
  onDocumentClick(): void {
    if (this.opened && !this.clickInside) {
      this.closeTimePicker();
      this.resetTimeInput();
    }
    this.clickInside = false;
    this.clickActionButton = false;
  }
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        event.preventDefault();
        this.closeTimePicker();
        this.resetTimeInput();
        break;
        case 'Enter':
          this.apply();
          break;
      default:
        return;
    }
  }

  public closeTimePicker(): void {
    this.goTime.closeTime();
  }

  ngOnInit(): void {
    if (this.goTime.selectedTime) {
      this.changeTimeFormat(this.goTime.selectedTime);
    } else {
      this.timeFormat = this.formatAMPM(new Date());
      this.hour = this.timeFormat.hours;
      this.minute = this.timeFormat.minutes;
      this.format = this.timeFormat.ampm === 'am' ? true : false;
    }
    this.opened = true;
  }

  ngAfterViewInit(): void {
      this.hourInput.nativeElement.focus();
  }

  formatAMPM(date: any): void {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    const ampm: any = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = this.addZeroIfNeeded(hours);
    minutes =  this.addZeroIfNeeded(minutes);
    const formatTime: any = { hours, minutes, ampm };
    return formatTime;
  }

  changeTimeFormat(timeString: string): void {
    const H: number = +timeString.substr(0, 2);
    const h: any = H % 12 || 12;
    const ampm: string = H < 12 || H === 24 ? 'AM' : 'PM';
    const minute: any = timeString.substr(3, 2);
    this.hour = h > 9 ? h : '0' + h;
    this.minute = this.addZeroIfNeeded(minute);
    this.format = ampm === 'AM' ? true : false;
  }

  changeFormat(): void {
    this.format = !this.format;
  }

  increaseHour(): void {
    if (Number(this.hour) >= 12) {
      this.hour = '01';
      return;
    }
    this.hour = (Number(this.hour) + 1).toString();
    this.hour =  this.addZeroIfNeeded(this.hour);
  }

  increaseMinute(): void {
    if (Number(this.minute) >= 59) {
      this.minute = '00';
      return;
    }
    this.minute = (Number(this.minute) + 1).toString();
    this.minute =  this.addZeroIfNeeded(this.minute);
  }

  decreaseHour(): void {
    if (this.hour === '01') {
      this.hour = '01';
      return;
    }
    this.hour = (Number(this.hour) - 1).toString();
    this.hour =  this.addZeroIfNeeded(this.hour);
  }

  decreaseMinute(): void {
    if (this.minute === '00') {
      this.minute = '00';
      return;
    }
    this.minute = (Number(this.minute) - 1).toString();
    this.minute =  this.addZeroIfNeeded(this.minute);
  }

  addZeroIfNeeded(value: string): string {
    if (Number(value) < 10) {
      value = '0' + Number(value);
    }
    return value;
  }

  validateInput(event: KeyboardEvent, regex: string): boolean {
    const input: HTMLInputElement = (event.target as HTMLInputElement);

    if (/\d/.test(event.key)) {
      const newString: string = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
      if (new RegExp(regex).test(newString + event.key)) {
        return;
      }
    }
    // In all other cases, suppress the event
    return false;
  }

  clear(): void {
    this.closeTimePicker();
    this.timePicked.emit();
  }

  apply(): void {
    if (Number(this.hour) > 12 || Number(this.minute) > 59) {
      this.inputTimeError();
      return;
    } else {
      this.resetTimeInput();
    }
    this.clickActionButton = true;
    if (!this.hour) {
      this.hour = '12';
    }
    if (!this.minute) {
      this.minute = '00';
    }
    this.hour = this.addZeroIfNeeded(this.hour);
    this.minute = this.addZeroIfNeeded(this.minute);
    this.timeFormat = {
      hours: this.hour,
      minutes: this.minute,
      ampm: this.format ? 'AM' : 'PM',
    };
    this.timePicked.emit(this.timeFormat);
    this.closeTimePicker();
  }

  inputTimeError(): void {
    if (Number(this.hour) > 12) {
      this.inputHourError = true;
    } else if (Number(this.minute) > 59) {
      this.inputMinuteError = true;
    }
  }

  resetTimeInput(): void {
    this.inputHourError = false;
    this.inputMinuteError = false;
  }

}
