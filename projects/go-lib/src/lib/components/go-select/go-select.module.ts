import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoSelectComponent } from './go-select.component';

@NgModule({
  declarations: [GoSelectComponent],
  imports: [
    CommonModule,
    GoButtonModule,
    GoFormErrorsModule,
    GoHintModule,
    GoRequiredTextModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoSelectComponent]
})

export class GoSelectModule { }
