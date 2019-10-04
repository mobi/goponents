import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoOffCanvasComponent
  ]
})
export class GoOffCanvasModule {}
