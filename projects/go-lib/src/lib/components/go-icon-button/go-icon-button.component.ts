import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-icon-button',
  templateUrl: './go-icon-button.component.html',
  styleUrls: ['./go-icon-button.component.scss']
})
export class GoIconButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonTitle: string;

  @Output() handleClick = new EventEmitter();

  public clicked(): void {
    this.handleClick.emit();
  }
}