import { Directive, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
@Directive({
    selector: '[go-modal-host]',
})
export class GoModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
