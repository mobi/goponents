
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// ====================================================================================
// Core Module
// ---------------------------------------------------------------------------------
// The CoreModule is a location where we can include all of the modules that our
// other modules need. This provides a single location to provide those things to the
// application.
// **NOTE**
// Be careful about adding things here. If you add something here, you add overhead
// to the entire application.
// ====================================================================================

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
