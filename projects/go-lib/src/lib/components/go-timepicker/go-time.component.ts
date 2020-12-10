import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';

import { GoTime } from './go-time';
@Component({
  selector: 'go-time',
  styleUrls: ['./go-time.component.scss'],
  templateUrl: './go-time.component.html',
  animations: [fadeAnimation],
})
export class GoTimeComponent implements OnInit {
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
  hour: any;
  minute: any;

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
      default:
        return;
    }
  }
  public closeTimePicker(): void {
    this.goTime.closeTime();
  }
  ngOnInit(): void {
    this.subscription = this.goTime.timeWindowOpen.subscribe(
      (value: boolean) => {
        if (value) {
          if (this.goTime.selectedTime) {
            this.changeTimeFormat(this.goTime.selectedTime);
          } else {
            this.timeFormat = this.formatAMPM(new Date());
            this.hour = this.timeFormat.hours;
            this.minute = this.timeFormat.minutes;
            this.format = this.timeFormat.ampm === 'am' ? true : false;
          }
          this.autoFocousInput();
        }
        this.opened = value;
      }
    );
  }

  autoFocousInput(): void {
    setTimeout(() => {
      document.getElementById('hour-input').focus();
    });
  }

  formatAMPM(date: any): void {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    const ampm: any = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    const formatTime: any = { hours, minutes, ampm };
    return formatTime;
  }
  changeTimeFormat(timeString: any): void {
    const H: any = +timeString.substr(0, 2);
    const h: any = H % 12 || 12;
    const ampm: any = H < 12 || H === 24 ? 'AM' : 'PM';
    const minute: any = timeString.substr(3, 2);
    this.hour = h > 9 ? h : '0' + h;
    this.minute = (minute > 9 || minute === '00' || minute.length === 2) ? minute : '0' + minute;
    this.format = ampm === 'AM' ? true : false;
  }
  changeFormat(): void {
    this.format = !this.format;
  }
  increaseHour(): void {
    if (this.hour >= 12) {
      this.hour = '00';
      return;
    }
    if (Number(this.hour) < 9) {
      this.hour = '0' + (Number(this.hour) + 1);
    } else {
      this.hour = Number(this.hour) + 1;
    }
  }
  increaseMinute(): void {
    if (this.minute >= 59) {
      this.minute = '00';
      return;
    }
    if (Number(this.minute) < 9) {
      this.minute = '0' + (Number(this.minute) + 1);
    } else {
      this.minute = Number(this.minute) + 1;
    }
  }
  decreaseHour(): void {
    if (this.hour === '00') {
      this.hour = '00';
      return;
    }
    if (Number(this.hour) <= 10) {
      this.hour = '0' + (Number(this.hour) - 1);
    } else {
      this.hour = Number(this.hour) - 1;
    }
  }
  decreaseMinute(): void {
    if (this.minute === '00') {
      this.minute = '00';
      return;
    }
    if (Number(this.minute) <= 10) {
      this.minute = '0' + (Number(this.minute) - 1);
    } else {
      this.minute = Number(this.minute) - 1;
    }
  }
  // twoDigitOnly(event): void {
  //   const value: any = event.target.value;
  //   if (value.length <= 2) {
  //     const hour: any = value.replace(/[^0-9]+/g, '');
  //     (document.getElementById('hour') as HTMLInputElement).value = '';
  //     (document.getElementById('hour') as HTMLInputElement).value = hour;
  //   } else if (value.length === 3) {
  //     this.hour = value.substring(0, value.length - 1);
  //   }
  // }
  twoDigitNumber(e) {
    e = e || window.event;
    const charCode = typeof e.which === 'number' ? e.which : e.keyCode;
    if (e.target.value.length >= 2) {
      e.target.value = '';
      // return false;
    }
    // Allow non-printable keys
    if (!charCode || charCode === 8 /* Backspace */) {
      return;
    }

    const typedChar = String.fromCharCode(charCode);

    // Allow numeric characters
    if (/\d/.test(typedChar)) {
      return;
    }

    // Allow the minus sign (-) if the user enters it first
    if (typedChar === '-' && this.hour === '') {
      return;
    }

    // In all other cases, suppress the event
    return false;
  }
  clear(): void {
    this.clickActionButton = true;
    this.resetTimeInput();
    this.closeTimePicker();
    this.timePicked.emit();
  }
  apply(): void {
    if (this.hour > 12 || this.minute > 59) {
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
    this.hour = (this.minute.toString()).length > 1 ? this.hour : '0' + this.hour;
    this.minute = (this.minute.toString()).length > 1 ? this.minute : '0' + this.minute;
    this.timeFormat = {
      hours: this.hour,
      minutes: this.minute,
      ampm: this.format ? 'AM' : 'PM',
    };
    this.timePicked.emit(this.timeFormat);
    this.closeTimePicker();
  }
  inputTimeError(): void {
    if (this.hour > 12) {
      this.inputHourError = true;
    } else if (this.minute > 59) {
      this.inputMinuteError = true;
    }
  }
  resetTimeInput(): void {
    this.inputHourError = false;
    this.inputMinuteError = false;
  }
}
