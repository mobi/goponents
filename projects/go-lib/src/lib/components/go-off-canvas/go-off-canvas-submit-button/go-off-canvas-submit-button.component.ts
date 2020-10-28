import { Component, Input } from '@angular/core';

@Component({
  selector: 'go-off-canvas-submit-button',
  templateUrl: './go-off-canvas-submit-button.component.html',
  styleUrls: ['./go-off-canvas-submit-button.component.scss']
})
export class GoOffCanvasSubmitButtonComponent {
  @Input() action: Function;
  @Input() disabled: boolean = false;
  @Input() text: string = 'Submit';
}
