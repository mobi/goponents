import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[go-modal-host]',
    standalone: false
})
export class GoModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
