import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { DummyComponent } from './dummy.component'

import {
  GoButtonComponent,
  GoButtonModule,
  GoIconComponent,
  GoIconButtonComponent,
  GoIconButtonModule,
  GoIconModule,
  GoLoaderModule,
  GoOffCanvasModule,
  GoSideNavModule,
  GoTableModule,
  GoToastModule,
  GoToasterModule
} from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoButtonModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoOffCanvasModule,
    GoSideNavModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  entryComponents: [
    GoButtonComponent,
    GoIconComponent,
    GoIconButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
