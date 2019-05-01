import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoButtonModule, GoIconModule, GoTableModule } from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoButtonModule,
    GoIconModule,
    GoTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
