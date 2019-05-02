import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import {
  GoButtonModule,
  GoIconModule,
  GoMessageModule,
  GoTableModule,
  GoToastModule
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
    ToastrModule.forRoot({ timeOut: 3000, positionClass: 'toast-bottom-right', preventDuplicates: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
