import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

import { GoSearchComponent } from './go-search.component';

@NgModule({
  declarations: [GoSearchComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    GoIconModule,
    GoLoaderModule,
    ReactiveFormsModule
  ],
  exports: [GoSearchComponent]
})

export class GoSearchModule { }
