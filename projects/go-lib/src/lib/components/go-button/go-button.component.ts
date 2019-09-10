import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['./go-button.component.scss']
})
export class GoButtonComponent implements OnChanges {
  classObject: object = {};

  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() isProcessing: boolean = false;
  @Input() useDarkTheme: boolean = false;
  @Input() useLoader: boolean = false;

  @Output() handleClick: EventEmitter<boolean> = new EventEmitter<boolean>();


  clicked(): void {
    this.handleClick.emit(this.isProcessing);
  }

  reset(): void { }

  ngOnChanges(): void {
    // 'alert' as a variant is depreciated and
    // will be removed in a later version
    const isNegative: boolean = [
      'alert',
      'negative'
    ].includes(this.buttonVariant);

    this.classObject = {
      'go-button--dark': this.useDarkTheme,
      'go-button--loading': this.isProcessing,
      'go-button--negative': isNegative,
      'go-button--neutral': (this.buttonVariant === 'neutral'),
      'go-button--positive': (this.buttonVariant === 'positive')
    };
  }
}
