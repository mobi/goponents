import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-loader',
  templateUrl: './go-loader.component.html',
  styleUrls: ['./go-loader.component.scss']
})
export class GoLoaderComponent implements OnInit {

  @Input() loaderDone: boolean = false;
  @Input() loaderSize: string = 'medium';
  @Input() loaderType: string = 'neutral';

  pathClasses: object = {};
  containerClasses: object = {};

  ngOnInit() {
    this.pathClasses = {
      'go-loader--neutral': this.loaderType === 'neutral',
      'go-loader--positive': this.loaderType === 'positive',
      'go-loader--negative': this.loaderType === 'negative'
    };

    this.containerClasses = {
      'go-loader-container--small': this.loaderSize === 'small',
      'go-loader-container--medium': this.loaderSize === 'medium',
      'go-loader-container--large': this.loaderSize === 'large',
      'go-loader-container--completed': this.loaderDone
    };
  }

  completeAnimation(): void {
    this.loaderDone = true;
  }
}
