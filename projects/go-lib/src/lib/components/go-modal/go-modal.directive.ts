import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[go-modal-host]',
})
export class GoModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
