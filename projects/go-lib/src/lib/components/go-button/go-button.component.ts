import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['go-button.component.scss']
})
export class GoButtonComponent {
  @Input() buttonIcon: string;
  @Input() buttonType: string;
  @Output() handleClick = new EventEmitter<boolean>();

  public isProcessing: boolean;

  constructor() {
    this.isProcessing = false;
  }

  // Public Methods

  public clicked(): void {
    if (this.isProcessing) { return; }

    this.isProcessing = true;
    this.handleClick.emit(this.isProcessing);
  }

  public classList(): any {
    return {
      'button__loading': this.isProcessing,
      'button__disabled': (this.buttonType === 'disabled'),
      'button__alert': (this.buttonType === 'alert')
    };
  }
}
