import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { GoFormService } from '../../services/form.service';

@Component({
  selector: 'go-form-errors',
  templateUrl: './go-form-errors.component.html'
})
export class GoFormErrorsComponent {

  @Input() control: FormControl | AbstractControl;
  @Input() theme: 'light' | 'dark' = 'light';

  get errors(): ValidationErrors {
    return this.control.errors;
  }

  constructor(private goFormService: GoFormService) {}

  /**
   * Generates a string for a form error hint
   * @param k key on the Validator
   * @param v value on the Validator
   * @returns formatted string for the ValidationError
   */
  errorString(k: string, v: any): string {
    const ngValidator: (...args: any) => string = this.goFormService.ngValidators[k];
    return ngValidator ? (typeof v === 'object') ? ngValidator(v) : v : v;
  }

}
