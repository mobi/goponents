import { Component } from '@angular/core';

@Component({
  selector: 'go-off-canvas-header-actions',
  template: `
    <ng-template goPortalAttachTo="offCanvasHeader">
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: []
})
export class GoOffCanvasHeaderComponent {}
