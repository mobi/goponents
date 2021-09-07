import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoCheckboxComponent } from './go-checkbox.component';
import { GoCheckboxGroupComponent } from './go-checkbox-group.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

@NgModule({
  declarations: [
    GoCheckboxComponent,
    GoCheckboxGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoFormErrorsModule,
    GoHintModule,
    GoRequiredTextModule,
    ReactiveFormsModule
  ],
  exports: [
    GoCheckboxComponent,
    GoCheckboxGroupComponent
  ]
})

export class GoCheckboxModule { }
