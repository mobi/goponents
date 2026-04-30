import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoPillComponent } from './go-pill.component';
import {GoIconModule} from '../go-icon/go-icon.module';

@NgModule({
  imports: [
    CommonModule,
    GoIconModule,
    GoPillComponent
  ],
  exports: [
    GoPillComponent
  ]
})
export class GoPillModule { }
