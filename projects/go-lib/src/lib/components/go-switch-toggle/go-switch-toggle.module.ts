import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoSwitchToggleComponent } from './go-switch-toggle.component';

@NgModule({
  declarations: [GoSwitchToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GoSwitchToggleComponent]
})

export class GoSwitchToggleModule { }
