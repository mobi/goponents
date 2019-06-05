import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';

import { GoLoaderComponent } from './go-loader.component';

@NgModule({
  declarations: [
    GoLoaderComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoLoaderComponent
  ]
})

export class GoLoaderModule { }
