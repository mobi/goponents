import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoOffCanvasComponent
  ]
})
export class GoOffCanvasModule {}
