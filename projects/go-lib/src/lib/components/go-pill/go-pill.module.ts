import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoPillComponent } from './go-pill.component';
import {GoIconModule} from '../go-icon/go-icon.module';

@NgModule({
  declarations: [GoPillComponent],
  exports: [
    GoPillComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ]
})
export class GoPillModule { }
