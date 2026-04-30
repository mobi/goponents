import { Directive, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';
@Directive({
    selector: '[go-off-canvas-host]',
})
export class GoOffCanvasDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
