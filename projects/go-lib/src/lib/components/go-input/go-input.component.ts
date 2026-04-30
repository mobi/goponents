import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-input',
    templateUrl: './go-input.component.html',
    styleUrls: ['./go-input.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoInputComponent extends GoFormBaseComponent implements OnInit {

  @Input() maxlength: number = 524288;
  @Input() minlength: number = 0;
  @Input() inputType: string = 'text';

  ngOnInit(): void {
    if (this.minlength > this.maxlength) {
      this.minlength = 0;
    }

    if (this.maxlength > 524288) {
      this.maxlength = 524288;
    }
  }
}
