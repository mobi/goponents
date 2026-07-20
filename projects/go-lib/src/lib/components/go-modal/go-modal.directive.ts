import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[go-modal-host]',
})
export class GoModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
