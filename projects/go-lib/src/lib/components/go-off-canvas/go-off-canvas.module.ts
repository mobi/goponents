import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoOffCanvasComponent } from './go-off-canvas.component';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoOffCanvasHeaderComponent } from './go-off-canvas-header.component';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';

@NgModule({
  declarations: [
    GoOffCanvasComponent,
    GoOffCanvasDirective,
    GoOffCanvasHeaderComponent
  ],
  imports: [
    CommonModule,
    GoIconButtonModule,
    GoPortalModule
  ],
  exports: [
    GoOffCanvasComponent,
    GoOffCanvasHeaderComponent
  ]
})
export class GoOffCanvasModule {}
