import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoRadioButtonComponent } from './go-radio-button.component';
import { GoRadioGroupComponent } from './go-radio-group.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

@NgModule({
  declarations: [
    GoRadioButtonComponent,
    GoRadioGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoHintModule,
    GoRequiredTextModule,
    ReactiveFormsModule
  ],
  exports: [
    GoRadioButtonComponent,
    GoRadioGroupComponent
  ]
})

export class GoRadioModule { }
