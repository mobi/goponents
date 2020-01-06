import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-docs',
  templateUrl: './pill-docs.component.html',
})
export class PillDocsComponent {
  pageTitle: string = 'Filter Pills';

  componentBindings: string = `
  @Input() removable: boolean = true;
  @Output() removed: EventEmitter<void> = new EventEmitter();
  `;

}
