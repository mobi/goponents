import { Subject } from 'rxjs/internal/Subject';

export class GoCalendar {
  calendarOpen: Subject<boolean> = new Subject<boolean>();
  selectedDate: Date;
  locale: Subject<string> = new Subject<string>();

  constructor() {
    this.setCalendarStatus(false);
    this.setLocale('en-US');
  }

  public setLocale(locale: string): void {
    this.locale.next(locale);
  }

  public openCalendar(date: Date): void {
    this.selectedDate = date;
    this.setCalendarStatus(true);
  }

  public closeCalendar(): void {
    this.setCalendarStatus(false);
  }

  public dateOutOfRange(date: Date, min?: Date, max?: Date): boolean {
    if (min && date < min) {
      return true;
    }
    if (max && date > max) {
      return true;
    }
    return false;
  }

  private setCalendarStatus(isOpen: boolean = true): void {
    this.calendarOpen.next(isOpen);
  }
}
