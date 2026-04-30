import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconComponent } from './go-icon.component';

@NgModule({
  imports: [
    GoIconComponent,
    CommonModule
  ],
  exports: [GoIconComponent]
})

export class GoIconModule { }
