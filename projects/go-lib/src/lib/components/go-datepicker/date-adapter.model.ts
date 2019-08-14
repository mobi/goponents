import { NativeDateAdapter } from '@angular/material/core';

export class AppDateAdapter extends NativeDateAdapter {
  parse(value: any): any {
    try {
      const format: string[] = this.localeFormat();
      const splitValues: Array<string> = value.split(/[/\-.]/);

      if (splitValues[0].length > 2) {
        // This means they're trying to do international Date Format yyyy-MM-DD
        // and we should just let angular handle it #notourproblem
        return super.parse(value);
      }

      return super.parse(this.localeDate(splitValues, format));
    } catch (error) {
      return super.parse(value);
    }
  }

  localeFormat(): string[] {
    // We're creating a new date to get the iso date format from the locale here
    const date: Date = new Date('1/8/2019');

    return Intl.DateTimeFormat(this.locale)
               .format(date)
               .replace(/2019/, 'y')
               .replace(/(0?8)/, 'd')
               .replace(/(0?1)/, 'm')
               .split(/[/\-.]/);
  }

  dateFromFormat(format: string[], values: string[], term: string): number {
    return parseInt(values[format.indexOf(term)], 10);
  }

  localeDate(values: string[], format: string[]): Date {
    const month: number = this.dateFromFormat(format, values, 'm');
    const day: number = this.dateFromFormat(format, values, 'd');
    let year: number = this.dateFromFormat(format, values, 'y');

    if (year <= 100) {
      // We're assuming that if they input a 2 digit year they want the current century
      const century: number = this.century();
      year = century + year;
    }

    // Create a new date with the correct year month and date values based on the locale of the datepicker
    return new Date(year, month - 1, day, 12);
  }

  century(): number {
    return parseInt((new Date().getFullYear().toString().slice(0, 2) + '00'), 10);
  }
}
