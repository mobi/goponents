import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  GoAccordionModule,
  GoActionSheetModule,
  GoBadgeModule,
  GoButtonComponent,
  GoButtonModule,
  GoCardModule,
  GoCheckboxModule,
  GoCopyModule,
  GoDatepickerModule,
  GoFileUploadModule,
  GoFooterModule,
  GoHeaderBarModule,
  GoHeaderModule,
  GoIconButtonModule,
  GoIconModule,
  GoInputModule,
  GoLayoutModule,
  GoLoaderModule,
  GoOffCanvasModule,
  GoRadioModule,
  GoSearchModule,
  GoSelectComponent,
  GoSelectModule,
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
import { TestPage4Component } from './components/test-page-4/test-page-4.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppGuard } from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchTestComponent,
    OffCanvasTestComponent,
    TestPage1Component,
    TestPage2Component,
    TestPage3Component,
    TestPage4Component,
    LayoutComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FormsModule,
    GoAccordionModule,
    GoActionSheetModule,
    GoBadgeModule,
    GoButtonModule,
    GoCardModule,
    GoCheckboxModule,
    GoCopyModule,
    GoDatepickerModule,
    GoFileUploadModule,
    GoFooterModule,
    GoHeaderBarModule,
    GoHeaderModule,
    GoIconButtonModule,
    GoIconModule,
    GoInputModule,
    GoLayoutModule,
    GoLoaderModule,
    GoOffCanvasModule,
    GoRadioModule,
    GoSearchModule,
    GoSelectModule,
    GoSideNavModule,
    GoSwitchToggleModule,
    GoTableModule,
    GoTextAreaModule,
    GoToasterModule,
    GoToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  entryComponents: [
    GoButtonComponent,
    GoSelectComponent,
    OffCanvasTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
