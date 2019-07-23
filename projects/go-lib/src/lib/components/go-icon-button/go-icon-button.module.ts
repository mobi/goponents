import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';

import { GoIconButtonComponent } from './go-icon-button.component';

@NgModule({
  declarations: [
    GoIconButtonComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoIconButtonComponent
  ]
})
export class GoIconButtonModule { }