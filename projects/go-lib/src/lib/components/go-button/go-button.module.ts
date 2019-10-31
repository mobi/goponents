import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoButtonComponent } from './go-button.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

@NgModule({
  declarations: [GoButtonComponent],
  imports: [
    CommonModule,
    GoIconModule,
    GoLoaderModule
  ],
  exports: [GoButtonComponent]
})

export class GoButtonModule { }
