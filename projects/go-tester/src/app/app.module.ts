import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  GoButtonModule,
  GoIconModule,
  GoMessageModule,
  GoTableModule,
  GoToastModule,
  GoToasterModule
} from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoButtonModule,
    GoIconModule,
    GoMessageModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
