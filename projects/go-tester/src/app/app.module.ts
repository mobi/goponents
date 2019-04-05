import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoButtonModule, GoIconModule, GoTableModule } from '@tangoe/goponents';

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
