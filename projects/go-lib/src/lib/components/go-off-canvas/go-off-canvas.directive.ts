import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[go-off-canvas-host]'
})
export class GoOffCanvasDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
