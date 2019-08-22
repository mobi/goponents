import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'go-text-area',
  templateUrl: './go-text-area.component.html'
})
export class GoTextAreaComponent {

  @Input() controlName: string;
  @Input() errors: string[];
  @Input() errorStatus: string = 'Error:';
  @Input() hints: string[];
  @Input() inputDisabled: boolean;
  @Input() label: string;
  @Input() parentFormGroup: FormGroup;
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  constructor() { }

  controlIsValid(): boolean {
    return !this.parentFormGroup.get(this.controlName).invalid;
  }
}
