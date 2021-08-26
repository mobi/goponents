import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

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

}
