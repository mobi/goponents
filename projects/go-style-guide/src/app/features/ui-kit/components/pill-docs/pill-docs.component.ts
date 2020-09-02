import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pill-docs',
  templateUrl: './pill-docs.component.html',
})
export class PillDocsComponent {
  pageTitle: string = 'Filter Pills';

  showPill: boolean = true;

  componentBindings: string = `
  @Input() removable: boolean = true;
  @Output() removed: EventEmitter<void> = new EventEmitter();
  `;

  basic_html: string = `
  <go-pill [removable]="false">Without remove icon</go-pill>
  `;
  dismiss_html: string = `
  <go-pill (removed)="removed()">With remove icon</go-pill>
  `;

  dismiss_ts: string = `
  showPill = true;

  removed() {
    this.showPill = false;
  }
  `;

  removed(): void {
    this.showPill = false;
  }

  linkToSource(): void {
    window.open('https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-pill','_blank')
  }
}
