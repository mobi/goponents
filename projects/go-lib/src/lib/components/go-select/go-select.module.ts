import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { GoSelectComponent } from './go-select.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { CommonModule } from '@angular/common';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

@NgModule({
  declarations: [GoSelectComponent],
  imports: [
    CommonModule,
    GoHintModule,
    GoRequiredTextModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoSelectComponent]
})

export class GoSelectModule { }
