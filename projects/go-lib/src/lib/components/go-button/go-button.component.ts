import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['./go-button.component.scss']
})
export class GoButtonComponent {
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() useLoader: boolean = false;
  @Input() useDarkTheme: boolean = false;

  @Output() handleClick = new EventEmitter<boolean>();

  isProcessing: boolean = false;

  public clicked(): void {
    this.isProcessing = this.useLoader;
    this.handleClick.emit(this.isProcessing);
  }

  public reset(): void {
    this.isProcessing = false;
  }

  public classObject(): object {
    // 'alert' as a variant is depreciated and
    // will be removed in a later version
    const isNegative: boolean = [
      'alert',
      'negative'
    ].includes(this.buttonVariant);

    return {
      'go-button--dark': this.useDarkTheme,
      'go-button--loading': this.isProcessing,
      'go-button--negative': isNegative,
      'go-button--neutral': (this.buttonVariant === 'neutral'),
      'go-button--positive': (this.buttonVariant === 'positive')
    };
  }
}
