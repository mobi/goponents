import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoHintModule } from '../go-hint/go-hint.module';

import { GoSwitchToggleComponent } from './go-switch-toggle.component';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

@NgModule({
  declarations: [GoSwitchToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoHintModule,
    GoRequiredTextModule,
    ReactiveFormsModule
  ],
  exports: [GoSwitchToggleComponent]
})

export class GoSwitchToggleModule { }
