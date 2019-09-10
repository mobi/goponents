import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoHintModule } from '../go-hint/go-hint.module';

import { GoSwitchToggleComponent } from './go-switch-toggle.component';

@NgModule({
  declarations: [GoSwitchToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoHintModule,
    ReactiveFormsModule
  ],
  exports: [GoSwitchToggleComponent]
})

export class GoSwitchToggleModule { }
