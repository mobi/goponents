import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoButtonGroupComponent } from './go-button-group.component';

@NgModule({
  imports: [
    GoButtonGroupComponent,
    CommonModule
  ],
  exports: [GoButtonGroupComponent]
})

export class GoButtonGroupModule { }
