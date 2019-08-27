import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

import { GoIconButtonModule} from '../go-icon-button/go-icon-button.module';
import { GoDatepickerComponent } from './go-datepicker.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoHintModule } from '../go-hint/go-hint.module';

@NgModule({
  declarations: [GoDatepickerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    GoIconButtonModule,
    GoHintModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [GoDatepickerComponent]
})

export class GoDatepickerModule { }
