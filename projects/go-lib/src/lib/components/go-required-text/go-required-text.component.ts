import { Component, Input } from '@angular/core';
import { requiredValidatorExists } from '../../utilities/form.utils';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-required-text',
  templateUrl: './go-required-text.component.html',
  styleUrls: ['./go-required-text.component.scss']
})
export class GoRequiredTextComponent {

  @Input() control: FormControl;

  get validator(): boolean | void {
    return requiredValidatorExists(this.control);
  }

}
