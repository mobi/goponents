import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GoButtonModule, GoIconModule, GoTableModule } from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { GoOffCanvasModule } from 'projects/go-lib/src/lib/components/go-off-canvas/go-off-canvas.module';

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
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
