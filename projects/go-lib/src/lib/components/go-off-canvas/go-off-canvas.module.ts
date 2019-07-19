import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    GoOffCanvasComponent
  ]
})
export class GoOffCanvasModule {}
