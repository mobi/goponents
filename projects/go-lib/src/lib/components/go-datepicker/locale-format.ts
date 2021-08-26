export class LocaleFormat {
  static parse(date: string, locale: string): Date {
    if (!date) {
      return null;
    }

    const values: string[] = date.split(/[/\-.]/);

    if (!values[0] || !values[1] || !values[2]) {
      return null;
    } else if (values && values[0].length > 2) {
      return this.parseFromInternational(values);
    }
    return this.parseFromFormat(values, locale);
  }

  static format(locale: string): string {
    // We're creating a new date to get the iso date format from the locale here
    const date: Date = new Date('12/31/2019');

    return Intl.DateTimeFormat(locale)
               .format(date)
               .replace(/2019/, 'yyyy')
               .replace(/31/, 'dd')
               .replace(/12/, 'mm');
  }

  static dateFromFormat(format: string[], values: string[], term: string): number {
    return parseInt(values[format.indexOf(term)], 10);
  }

  static century(): number {
    return parseInt((new Date().getFullYear().toString().slice(0, 2) + '00'), 10);
  }

  static validDate(month: number, day: number, year: number): boolean {
    const validDays: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year >= 10000 || month > 11 || month < 0) {
      return false;
    }
    if (day <= validDays[month]) {
      return true;
    }
    if (year % 4 === 0 && month === 2 && day === 29) {
      return true;
    }
    return false;
  }

  static formatDate(date: Date, locale: string): string {
    if (date) {
      return new Intl.DateTimeFormat(locale).format(date);
    }
  }

  private static parseFromFormat(values: string[], locale: string): Date {
    const format: Array<string> = this.format(locale).split(/[/\-.]/);
    const month: number = this.dateFromFormat(format, values, 'mm');
    const day: number = this.dateFromFormat(format, values, 'dd');
    let year: number = this.dateFromFormat(format, values, 'yyyy');

    if (year <= 100) {
      // We're assuming that if they input a 2 digit year they want the current century
      const century: number = this.century();
      year = century + year;
    }

    if (!this.validDate(month - 1, day, year)) {
      return null;
    }

    // Create a new date with the correct year month and date values based on the locale of the datepicker
    return new Date(year, month - 1, day);
  }

  private static parseFromInternational(values: string[]): Date {
    return new Date(parseInt(values[0], 10), parseInt(values[1], 10) - 1, parseInt(values[2], 10), 0, 0, 0);
  }
}
