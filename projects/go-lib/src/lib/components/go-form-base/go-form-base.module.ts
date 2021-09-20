import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoFormBaseComponent } from './go-form-base.component';

@NgModule({
  declarations: [GoFormBaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoFormBaseComponent]
})

export class GoFormBaseComponentModule { }
