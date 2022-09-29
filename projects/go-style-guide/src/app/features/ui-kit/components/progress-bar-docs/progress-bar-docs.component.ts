import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-docs',
  templateUrl: './progress-bar-docs.component.html'
})
export class ProgressBarDocsComponent implements OnInit {
  pageTitle: string = 'Progress bar';
  linkToSource: string = 'https://github.com/mobi/goponents';

  basic_html: string = `
  <go-pill [removable]="false">Without remove icon</go-pill>
  `;
  dismiss_html: string = `
  <go-pill (removed)="removed()">With remove icon</go-pill>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
