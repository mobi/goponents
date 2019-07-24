import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  GoButtonComponent,
  GoButtonModule,
  GoHeaderModule,
  GoIconButtonModule,
  GoIconComponent,
  GoIconModule,
  GoLayoutModule,
  GoLoaderModule,
  GoOffCanvasModule,
  GoSearchModule,
  GoSideNavModule,
  GoTableModule,
  GoToasterModule,
  GoToastModule
} from '../../../go-lib/src/public_api';

import { AppRoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchTestComponent } from './components/search-test/search-test.component';
import { TestPage1Component } from './components/test-page-1/test-page-1.component';
import { TestPage2Component } from './components/test-page-2/test-page-2.component';
import { AppGuard } from './app.guard';


@NgModule({
  declarations: [
    AppComponent,
    SearchTestComponent,
    TestPage1Component,
    TestPage2Component
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoButtonModule,
    GoHeaderModule,
    GoIconModule,
    GoIconButtonModule,
    GoLayoutModule,
    GoLoaderModule,
    GoOffCanvasModule,
    GoSearchModule,
    GoSideNavModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  entryComponents: [
    GoButtonComponent,
    GoIconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
