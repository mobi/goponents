import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  GoButtonModule,
  GoIconModule,
  GoMessageModule,
  GoTableModule,
  GoToastModule,
  GoToasterModule
} from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoButtonModule,
    GoIconModule,
    GoMessageModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
