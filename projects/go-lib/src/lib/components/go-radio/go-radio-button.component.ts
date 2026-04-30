import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';
import { GoFormService } from '../../services/form.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-radio-button',
    styleUrls: ['./go-radio-button.component.scss'],
    templateUrl: './go-radio-button.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoRadioButtonComponent extends GoFormBaseComponent {

  name: string;

  @Input() formValue: string;

  constructor(private changeDetector: ChangeDetectorRef, goFormService: GoFormService) {
    super(goFormService);
  }

  detectChanges(): void {
    this.changeDetector.detectChanges();
  }
}
