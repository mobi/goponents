import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoFormErrorsComponent } from './go-form-errors.component';

@NgModule({
  declarations: [GoFormErrorsComponent],
  imports: [
    CommonModule,
    GoHintModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoFormErrorsComponent]
})

export class GoFormErrorsModule { }
