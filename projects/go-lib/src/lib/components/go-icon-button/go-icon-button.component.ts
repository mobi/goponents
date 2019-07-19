import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-icon-button',
  templateUrl: './go-icon-button.component.html'
})
export class GoIconButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;

  @Output() handleClick = new EventEmitter();

  public clicked(): void {
    this.handleClick.emit();
  }
}