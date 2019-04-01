import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoButtonModule } from '../../../go-lib/src/lib/components/go-button/go-button.module';
import { GoIconModule } from '../../../go-lib/src/lib/components/go-icon/go-icon.module';
import { GoTableModule } from '../../../go-lib/src/lib/components/go-table/go-table.module';

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
