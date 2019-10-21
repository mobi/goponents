export class DateAdapter {
  private _locale: string;
  private _timezone: string;
  public monthNames: Array<string>;
  public dateNames: Array<string>;
  public daysOfWeek: Array<string>;

  constructor() {
    this.setLocale('en-US');
  }

  public setLocale(locale: string): void {
    this._locale = locale;
    this._timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.setMonthNames();
    this.setDateNames();
    this.setDayOfWeekNames();
  }

  public getYearName(year: number): string {
    const format: Intl.DateTimeFormat = new Intl.DateTimeFormat(this._locale, {year: 'numeric', timeZone: this._timezone});

    return this.format(format, new Date(year, 0, 1));
  }

  public daysInMonth(month: number, year: number): number {
    const daysInMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 4 === 0 && month === 1) {
      return 29;
    }
    return daysInMonth[month];
  }

  public nextMonth(month: number): number {
    let nextMonth: number = month + 1;

    if (nextMonth === 12) {
      nextMonth = 0;
    }

    return nextMonth;
  }

  public previousMonth(month: number): number {
    let previousMonth: number = month - 1;

    if (previousMonth === -1) {
      previousMonth = 11;
    }

    return previousMonth;
  }

  private setMonthNames(): void {
    this.monthNames = this.getMonthNames('short');
  }

  private setDateNames(): void {
    this.dateNames = this.getDateNames();
  }

  private setDayOfWeekNames(): void {
    this.daysOfWeek = this.getDayOfWeekNames('narrow');
  }

  private getMonthNames(style: 'long' | 'short' | 'narrow'): Array<string> {
    const format: Intl.DateTimeFormat = new Intl.DateTimeFormat(this._locale, {month: style, timeZone: this._timezone});
    const months: Array<string> = [];
    for (let i: number = 0; i < 12; i++) {
      months.push(this.format(format, new Date(2017, i, 1)));
    }
    return months;
  }

  private getDateNames(): Array<string> {
    const format: Intl.DateTimeFormat = new Intl.DateTimeFormat(this._locale, {day: 'numeric', timeZone: this._timezone});
    const dates: Array<string> = [];

    for (let i: number = 0; i < 31; i++) {
      dates.push(this.format(format, new Date(2017, 0, i + 1)));
    }

    return dates;
  }

  private getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): Array<string> {
    const format: Intl.DateTimeFormat = new Intl.DateTimeFormat(this._locale, {weekday: style, timeZone: this._timezone});
    const dayNames: Array<string> = [];

    for (let i: number = 0; i < 7; i++) {
      dayNames.push(this.format(format, new Date(2017, 0, i + 1)));
    }

    return dayNames;
  }

  private format(format: Intl.DateTimeFormat, date: Date): string {
    return format.format(date);
  }
}
