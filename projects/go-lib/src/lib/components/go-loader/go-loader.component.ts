import { Component, Input } from '@angular/core';

@Component({
  selector: 'go-loader',
  templateUrl: './go-loader.component.html',
  styleUrls: ['./go-loader.component.scss']
})
export class GoLoaderComponent {
  @Input() loaderDone: boolean = false;
  @Input() loaderSize: string = 'medium';
  @Input() loaderType: string = 'neutral';

  fillIDs: object = {
    neutral: this.randomishID('neutral'),
    negative: this.randomishID('negative'),
    positive: this.randomishID('positive')
  };

  //#region Public Methods

  completeAnimation(): void {
    this.loaderDone = true;
  }

  fillUrl(): string {
    return `url(#${this.fillIDs[this.loaderType]})`;
  }

  containerClasses(): object {
    return {
      'go-loader-container--small': this.loaderSize === 'small',
      'go-loader-container--medium': this.loaderSize === 'medium',
      'go-loader-container--large': this.loaderSize === 'large',
      'go-loader-container--completed': this.loaderDone
    }
  }

  //#endregion
  //#region Public Methods

  /**
   * Use this method to generate a semi-unique ID in order to avoid
   * duplicate IDs in the markup.
   * `this.randomishID('neutral');`
   * @param type: string
   */
  private randomishID(type: string): string {
    return `${type}-${Date.now()}-${Math.floor(Math.random() * Math.floor(1000))}`;
  }

  //#endregion
}
