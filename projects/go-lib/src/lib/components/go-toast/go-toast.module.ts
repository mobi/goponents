import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';

import { GoToastComponent } from './go-toast.component';

@NgModule({
  declarations: [
    GoToastComponent
  ],
  imports: [
    CommonModule,
    GoIconButtonModule,
    GoIconModule
  ],
  exports: [
    GoToastComponent
  ]
})

export class GoToastModule { }
