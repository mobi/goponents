import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { GoSelectComponent } from './go-select.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GoSelectComponent],
  imports: [
    CommonModule,
    GoHintModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoSelectComponent]
})

export class GoSelectModule { }
