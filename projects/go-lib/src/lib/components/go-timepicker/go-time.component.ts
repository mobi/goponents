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
import { GoTimeFormat } from './go-time-format.model';

@Component({
  selector: 'go-time',
  styleUrls: ['./go-time.component.scss'],
  templateUrl: './go-time.component.html',
  animations: [fadeAnimation],
})
export class GoTimeComponent implements OnInit, AfterViewInit {

  @Input() appendToContent: boolean;
  @Input() selectedTime: string;
  @Input() displayAbove: boolean;
  @Input() displayFromRight: boolean;
  @Output() timePicked: EventEmitter<object> = new EventEmitter();
  @Output() closeTime: EventEmitter<void> = new EventEmitter();

  inputHourError: boolean = false;
  inputMinuteError: boolean = false;
  format: boolean = true;
  clickInside: boolean = false;
  goTimeFormat: GoTimeFormat;
  hour: string;
  minute: string;

  @ViewChild('hourInput', { static: false }) hourInput: ElementRef;

  @HostListener('click')
  ClickInside(): void {
    this.clickInside = true;
  }

  @HostListener('document: click')
  onDocumentClick(): void {
    if (!this.clickInside) {
      this.closeTimePicker();
      this.resetTimeInput();
    }
    this.clickInside = false;
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
    this.closeTime.emit();
  }

  ngOnInit(): void {
    if (this.selectedTime) {
      this.changeTimeFormat(this.selectedTime);
    } else {
      this.goTimeFormat = this.formatAMPM(new Date());
      this.hour = this.goTimeFormat.hours;
      this.minute = this.goTimeFormat.minutes;
      this.format = this.goTimeFormat.ampm === 'am' ? true : false;
    }
  }

  ngAfterViewInit(): void {
      this.hourInput.nativeElement.focus();
  }

  private formatAMPM(date: Date): GoTimeFormat  {
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm: string = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = this.addZeroIfNeeded(hours.toString());
    minutes =  this.addZeroIfNeeded(minutes.toString());
    this.goTimeFormat = {
      hours,
      minutes,
      ampm
    };
    return this.goTimeFormat;
  }

  private changeTimeFormat(timeString: string): void {
    const H: number = +timeString.substr(0, 2);
    const h: any = H % 12 || 12;
    const ampm: string = H < 12 || H === 24 ? 'AM' : 'PM';
    const minute: string = timeString.substr(3, 2);
    this.hour = this.addZeroIfNeeded(h);
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
      this.hour = '12';
      return;
    }
    this.hour = (Number(this.hour) - 1).toString();
    this.hour =  this.addZeroIfNeeded(this.hour);
  }

  decreaseMinute(): void {
    if (this.minute === '00') {
      this.minute = '59';
      return;
    }
    this.minute = (Number(this.minute) - 1).toString();
    this.minute =  this.addZeroIfNeeded(this.minute);
  }

  private addZeroIfNeeded(value: string): string {
    if (Number(value) < 10) {
      value = '0' + +value;
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
    if (!this.hour) {
      this.hour = '12';
    }
    if (!this.minute) {
      this.minute = '00';
    }
    this.hour = this.addZeroIfNeeded(this.hour);
    this.minute = this.addZeroIfNeeded(this.minute);
    this.goTimeFormat = {
      hours: this.hour,
      minutes: this.minute,
      ampm: this.format ? 'AM' : 'PM',
    };
    this.timePicked.emit(this.goTimeFormat);
    this.closeTimePicker();
  }

  private inputTimeError(): void {
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
