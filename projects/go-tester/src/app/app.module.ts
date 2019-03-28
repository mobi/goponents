import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoTableModule } from '../../../go-lib/src/lib/components/go-table/go-table.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
