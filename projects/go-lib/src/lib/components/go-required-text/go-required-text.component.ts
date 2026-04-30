import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl } from '@angular/forms';
import { GoFormService } from '../../services/form.service';

import { FormsModule } from '@angular/forms';
@Component({
    selector: 'go-required-text',
    templateUrl: './go-required-text.component.html',
    styleUrls: ['./go-required-text.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class GoRequiredTextComponent {

  @Input() control: FormControl | AbstractControl;

  get validator(): boolean {
    return this.goFormService.requiredValidatorExists(this.control);
  }

  constructor(private goFormService: GoFormService) {}

}
