import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-text-area',
    templateUrl: './go-text-area.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoTextAreaComponent extends GoFormBaseComponent implements OnInit {

  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() rows: number;

  ngOnInit(): void {
    this.validateMinMax();
  }

  private validateMinMax(): void {
    if (this.maxlength && this.minlength && this.minlength > this.maxlength) {
      this.minlength = 0;
    }
  }
}
