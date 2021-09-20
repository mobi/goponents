import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoTextAreaComponent } from './go-text-area.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

@NgModule({
  declarations: [GoTextAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoFormErrorsModule,
    GoHintModule,
    GoRequiredTextModule,
    ReactiveFormsModule
  ],
  exports: [GoTextAreaComponent]
})

export class GoTextAreaModule { }
