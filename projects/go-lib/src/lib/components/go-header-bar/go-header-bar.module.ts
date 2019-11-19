import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoIconModule} from '../go-icon/go-icon.module';
import {GoHeaderBarComponent} from './go-header-bar.component';

@NgModule({
  declarations: [
    GoHeaderBarComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoHeaderBarComponent
  ]
})
export class GoHeaderBarModule { }
