import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'go-off-canvas-header',
  template: `
    <ng-template goPortalAttachTo="offCanvasHeader">
      <ng-content></ng-content>
    </ng-template>
  `
})
export class GoOffCanvasHeaderComponent {}
