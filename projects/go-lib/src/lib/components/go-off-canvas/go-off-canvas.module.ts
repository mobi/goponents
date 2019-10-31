import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective
  ],
  imports: [
    CommonModule,
    GoIconButtonModule
  ],
  exports: [
    GoOffCanvasComponent
  ]
})
export class GoOffCanvasModule {}
