import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoTextAreaComponent } from './go-text-area.component';
import { GoHintModule } from '../go-hint/go-hint.module';

@NgModule({
  declarations: [GoTextAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoHintModule,
    ReactiveFormsModule
  ],
  exports: [GoTextAreaComponent]
})

export class GoTextAreaModule { }
