import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { GoFormService } from '../../services/form.service';

@Component({
  selector: 'go-required-text',
  templateUrl: './go-required-text.component.html',
  styleUrls: ['./go-required-text.component.scss']
})
export class GoRequiredTextComponent {

  @Input() control: FormControl | AbstractControl;

  get validator(): boolean {
    return this.goFormService.requiredValidatorExists(this.control);
  }

  constructor(private goFormService: GoFormService) {}

}
