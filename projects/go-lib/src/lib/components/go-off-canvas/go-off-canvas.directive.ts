import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[go-off-canvas-host]'
})
export class GoOffCanvasDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
