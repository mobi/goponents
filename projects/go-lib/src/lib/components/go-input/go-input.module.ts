import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoInputComponent } from './go-input.component';

@NgModule({
  declarations: [GoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoInputComponent]
})

export class GoInputModule { }
