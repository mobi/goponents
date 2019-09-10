import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoInputComponent } from './go-input.component';
import { GoHintModule } from '../go-hint/go-hint.module';

@NgModule({
  declarations: [GoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoHintModule,
    ReactiveFormsModule
  ],
  exports: [GoInputComponent]
})

export class GoInputModule { }
