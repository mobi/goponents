import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-docs',
  templateUrl: './loader-docs.component.html'
})
export class LoaderDocsComponent {

  showLoader: boolean = true;

  pageTitle: string = 'Loader';

  componentBindings: string = `
  @Input() loaderSize: string = 'medium';
  @Input() loaderType: string = 'neutral';
  `;

  basicHtml: string = `
  <go-loader loaderSize="small" loaderType="negative"></go-loader>
  <go-loader></go-loader>
  <go-loader loaderSize="large" loaderType="positive"></go-loader>
  <go-loader loaderType="dark"></go-loader>
  <go-loader loaderSize="small" loaderType="light"></go-loader>
  `;

  fadeHtml: string = `
  <go-loader *ngIf="showLoader"></go-loader>
  `;

  toggleLoader(): void {
    this.showLoader = !this.showLoader;
  }
}
