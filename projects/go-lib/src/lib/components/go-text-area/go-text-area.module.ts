import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoTextAreaComponent } from './go-text-area.component';

@NgModule({
  declarations: [GoTextAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoTextAreaComponent]
})

export class GoTextAreaModule { }
