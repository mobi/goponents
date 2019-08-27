import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-radio-button',
  templateUrl: './go-radio-button.component.html'
})
export class GoRadioButtonComponent {
  control: FormControl;
  theme: string;

  @Input() formValue: string;
  @Input() label: string;
}
