import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoCopyComponent } from './go-copy.component';
import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  imports: [
    GoCopyComponent,
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoCopyComponent,
  ]
})

export class GoCopyModule { }
