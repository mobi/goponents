import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html'
})
export class GoInputComponent {

  @Input() label: string;
  @Input() inputType: string = 'text';
  @Input() errors: string[];
  @Input() errorStatus: string = 'Error:';
  @Input() hints: string[];
  @Input() controlName: string;
  @Input() parentFormGroup: FormGroup;
  @Input() placeholder: string = '';

  constructor() { }

  controlIsValid(): boolean {
    return !this.parentFormGroup.get(this.controlName).invalid;
  }
}
