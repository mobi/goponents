import { Component, Input, HostBinding } from '@angular/core';
import { fadeTemplateAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'go-loader',
  templateUrl: './go-loader.component.html',
  styleUrls: ['./go-loader.component.scss'],
  animations: [
    fadeTemplateAnimation
  ]
})
export class GoLoaderComponent {
  @Input() loaderSize: string = 'medium';
  @Input() loaderType: string = 'neutral';

  @HostBinding('@fadeTemplate')

  //#region Public Methods

  containerClasses(): object {
    return {
      'go-loader--small': this.loaderSize === 'small',
      'go-loader--medium': this.loaderSize === 'medium',
      'go-loader--large': this.loaderSize === 'large',
      'go-loader--negative': this.loaderType === 'negative',
      'go-loader--neutral': this.loaderType === 'neutral',
      'go-loader--positive': this.loaderType === 'positive'
    }
  }

  //#endregion
}
