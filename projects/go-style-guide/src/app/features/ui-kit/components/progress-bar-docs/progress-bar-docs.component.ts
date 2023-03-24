import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-docs',
  templateUrl: './progress-bar-docs.component.html',
})
export class ProgressBarDocsComponent implements OnInit {
  pageTitle: string = 'Progress bar';
  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-progress-bar';
  basic_html: string = `
  <go-pill [removable]="false">Without remove icon</go-pill>
  `;
  dismiss_html: string = `
  <go-pill (removed)="removed()">With remove icon</go-pill>
  `;
  componentBindings: string = `
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() value?: number = 80;
  @Input() rightLabel?: string = '';
  @Input() leftLabel?: string = '';
  `;
  determinateBindings: string = `
  <go-progress-bar mode="determinate" [value]="80"></go-progress-bar>
  `;
  inDeterminateBindings: string = `
  <go-progress-bar mode="indeterminate"></go-progress-bar>
  `;
  withLabelBindings: string = `
  <go-progress-bar mode="determinate" [value]="40" [rightLabel]="'End label'" [leftLabel]="'Beginning label'"></go-progress-bar>
  `;

  constructor() {}

  ngOnInit(): void {}
}
