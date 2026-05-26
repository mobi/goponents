import { Component } from '@angular/core';


import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';
@Component({
    selector: 'go-off-canvas-header',
    template: `
    <ng-template goPortalAttachTo="offCanvasHeader">
      <ng-content></ng-content>
    </ng-template>
  `,
  imports: [GoIconButtonModule, GoPortalModule],
})
export class GoOffCanvasHeaderComponent {}
