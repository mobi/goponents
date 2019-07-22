import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule} from '../go-icon/go-icon.module';

import { GoHeaderComponent } from './go-header.component';

@NgModule({
  declarations: [
    GoHeaderComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoHeaderComponent
  ]
})

export class GoHeaderModule { }
