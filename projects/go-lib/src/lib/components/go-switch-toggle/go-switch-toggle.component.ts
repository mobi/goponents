import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-switch-toggle',
    templateUrl: './go-switch-toggle.component.html',
    styleUrls: ['./go-switch-toggle.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoSwitchToggleComponent extends GoFormBaseComponent {

  @Input() labelPosition: 'before' | 'after' = 'after';

  toggle(): void {
    if (!this.control.disabled) {
      this.control.setValue(!this.control.value);
    }
  }
}
