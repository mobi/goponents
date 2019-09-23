import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

import { GoSearchComponent } from './go-search.component';

@NgModule({
  declarations: [GoSearchComponent],
  imports: [
    CommonModule,
    GoIconModule,
    GoLoaderModule,
    ReactiveFormsModule
  ],
  exports: [GoSearchComponent]
})

export class GoSearchModule { }
