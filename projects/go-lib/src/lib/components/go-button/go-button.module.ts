import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoButtonComponent } from './go-button.component';
import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  declarations: [GoButtonComponent],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [GoButtonComponent]
})

export class GoButtonModule { }
