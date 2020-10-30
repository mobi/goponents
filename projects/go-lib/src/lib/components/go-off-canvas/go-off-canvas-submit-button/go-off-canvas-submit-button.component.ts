import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-off-canvas-submit-button',
  templateUrl: './go-off-canvas-submit-button.component.html',
  styleUrls: ['./go-off-canvas-submit-button.component.scss']
})
export class GoOffCanvasSubmitButtonComponent {
  @Input() disabled: boolean = false;
  @Input() text: string = 'Submit';

  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();
}
