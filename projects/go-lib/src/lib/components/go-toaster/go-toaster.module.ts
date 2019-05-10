import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { GoToasterService } from './go-toaster.service';
import { GoToasterComponent } from './go-toaster.component';
import { GoToastModule } from '../go-toast/go-toast.module';

@NgModule({
  declarations: [
    GoToasterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    GoToastModule
  ],
  providers: [
    GoToasterService
  ],
  exports: [
    GoToasterComponent
  ]
})

export class GoToasterModule { }
