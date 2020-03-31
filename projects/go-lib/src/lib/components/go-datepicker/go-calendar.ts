import { Subject } from 'rxjs';

export class GoCalendar {
  private _calendarOpen: boolean = false;
  calendarOpen: Subject<boolean> = new Subject<boolean>();
  selectedDate: Date;

  constructor() {
    this.setCalendarStatus(false);
  }

  public openCalendar(date: Date): void {
    this.selectedDate = date;
    this.setCalendarStatus(true);
  }

  public closeCalendar(): void {
    this.setCalendarStatus(false);
  }

  public dateOutOfRange(date: Date, min?: Date, max?: Date): boolean {
    if (min && date && date < min) {
      return true;
    }
    if (max && date && date > max) {
      return true;
    }
    return false;
  }

  get isOpen(): boolean {
    return this._calendarOpen;
  }

  private setCalendarStatus(isOpen: boolean = true): void {
    this._calendarOpen = isOpen;
    this.calendarOpen.next(isOpen);
  }
}
