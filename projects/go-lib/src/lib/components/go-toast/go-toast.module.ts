import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';

import { GoToastComponent } from './go-toast.component';

@NgModule({
  declarations: [
    GoToastComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoToastComponent
  ]
})

export class GoToastModule { }
