import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['go-button.component.scss']
})
export class GoButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() useLoader: boolean;

  @Output() handleClick = new EventEmitter<boolean>();

  isProcessing: boolean = false;

  constructor() {}

  public clicked() : void {
    if (this.isProcessing || this.buttonDisabled) { return; }

    this.isProcessing = this.useLoader;
    this.handleClick.emit(this.isProcessing);
  }
  
  public reset() : void {
    this.isProcessing = false;
  }

  public classList() : any {
    return {
      'go-button__loading': this.isProcessing,
      'go-button__disabled': this.buttonDisabled,
      'go-button__alert': (this.buttonVariant === 'alert')
    };
  }
}
