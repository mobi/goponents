import { Component, EventEmitter, Input, Output } from '@angular/core';


import { GoIconButtonModule } from '../../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../../go-portal/go-portal.module';
@Component({
    selector: 'go-off-canvas-submit-button',
    templateUrl: './go-off-canvas-submit-button.component.html',
    styleUrls: ['./go-off-canvas-submit-button.component.scss'],
  imports: [GoIconButtonModule, GoPortalModule],
})
export class GoOffCanvasSubmitButtonComponent {
  @Input() disabled: boolean = false;
  @Input() text: string = 'Submit';
  @Input() type: string = 'submit';

  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();
}
