import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';
import { GoOffCanvasHeaderComponent } from './go-off-canvas-header.component';
import { GoOffCanvasSubmitButtonComponent } from './go-off-canvas-submit-button/go-off-canvas-submit-button.component';
import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective,
    GoOffCanvasHeaderComponent,
    GoOffCanvasSubmitButtonComponent
  ],
  imports: [
    CommonModule,
    GoIconButtonModule,
    GoPortalModule
  ],
  exports: [
    GoOffCanvasComponent,
    GoOffCanvasHeaderComponent,
    GoOffCanvasSubmitButtonComponent
  ]
})
export class GoOffCanvasModule {}
