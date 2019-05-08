import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import {
  GoButtonModule,
  GoIconModule,
  GoOffCanvasModule,
  GoTableModule,
  GoButtonComponent,
  GoIconComponent
} from '../../../go-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoButtonModule,
    GoIconModule,
    GoTableModule,
    GoOffCanvasModule
  ],
  providers: [
    AppService
  ],
  entryComponents: [
    GoButtonComponent,
    GoIconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
