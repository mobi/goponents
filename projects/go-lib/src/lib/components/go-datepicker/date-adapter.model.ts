import { NativeDateAdapter } from '@angular/material/core';
import { LocaleFormat } from './locale-format.model';

export class AppDateAdapter extends NativeDateAdapter {
  parse(value: any): any {
    try {
      const splitValues: Array<string> = value.split(/[/\-.]/);

      if (splitValues[0].length > 2 || this.locale.includes('ar')) {
        // This means they're trying to do international Date Format yyyy-MM-DD
        // or the locale is arabic in which case we'll ignore
        // and we should just let angular handle it #notourproblem
        return super.parse(value);
      }

      return super.parse(LocaleFormat.parse(splitValues, this.locale));
    } catch (error) {
      return super.parse(value);
    }
  }
}
