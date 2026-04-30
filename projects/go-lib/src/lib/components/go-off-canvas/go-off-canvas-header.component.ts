import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';
@Component({
    selector: 'go-off-canvas-header',
    template: `
    <ng-template goPortalAttachTo="offCanvasHeader">
      <ng-content></ng-content>
    </ng-template>
  `,
  imports: [CommonModule, GoIconButtonModule, GoPortalModule],
})
export class GoOffCanvasHeaderComponent {}
