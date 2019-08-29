import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  GoAccordionModule,
  GoActionSheetModule,
  GoButtonComponent,
  GoButtonModule,
  GoCardModule,
  GoHeaderModule,
  GoIconButtonModule,
  GoIconComponent,
  GoIconModule,
  GoInputModule,
  GoLayoutModule,
  GoLoaderModule,
  GoOffCanvasModule,
  GoRadioModule,
  GoSearchModule,
  GoSideNavModule,
  GoSwitchToggleModule,
  GoTableModule,
  GoTextAreaModule,
  GoToasterModule,
  GoToastModule
} from '../../../go-lib/src/public_api';

import { AppRoutesModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchTestComponent } from './components/search-test/search-test.component';
import { OffCanvasTestComponent } from './components/off-canvas-test/off-canvas-test.component';
import { TestPage1Component } from './components/test-page-1/test-page-1.component';
import { TestPage2Component } from './components/test-page-2/test-page-2.component';
import { TestPage3Component } from './components/test-page-3/test-page-3.component';
import { AppGuard } from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchTestComponent,
    OffCanvasTestComponent,
    TestPage1Component,
    TestPage2Component,
    TestPage3Component
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoAccordionModule,
    GoActionSheetModule,
    GoButtonModule,
    GoCardModule,
    GoHeaderModule,
    GoIconModule,
    GoIconButtonModule,
    GoInputModule,
    GoLayoutModule,
    GoLoaderModule,
    GoOffCanvasModule,
    GoRadioModule,
    GoSearchModule,
    GoSideNavModule,
    GoSwitchToggleModule,
    GoTableModule,
    GoTextAreaModule,
    GoToastModule,
    GoToasterModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  entryComponents: [
    GoButtonComponent,
    OffCanvasTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
