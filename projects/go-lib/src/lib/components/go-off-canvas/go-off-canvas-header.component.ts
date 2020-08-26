import { Component } from '@angular/core';

@Component({
  selector: 'go-off-canvas-header',
  template: `
    <ng-template goPortalAttachTo="offCanvasHeader">
      <ng-content></ng-content>
    </ng-template>
  `
})
export class GoOffCanvasHeaderComponent {}
