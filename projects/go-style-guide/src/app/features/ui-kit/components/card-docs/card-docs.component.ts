import { Component } from '@angular/core';

@Component({
  selector: 'app-card-docs',
  templateUrl: './card-docs.component.html'
})
export class CardDocsComponent {

  pageTitle: string = 'Card';

  componentBindings: string = `
  @Input() showHeader: boolean = true;
  `;

  defaultExample: string = `
  <go-card>
    <ng-container go-card-header>
      <h5>Default</h5>
    </ng-container>
    <ng-container go-card-content>
      <!-- Card Content -->
    </ng-container>
  </go-card>
  `;

  showHeaderExample: string = `
  <go-card [showHeader]="false">
    <ng-container go-card-header>
      <h5>Default</h5> <!-- Notice that this is not rendered -->
    </ng-container>
    <ng-container go-card-content>
      <!-- Card Content -->
    </ng-container>
  </go-card>
  `;

  constructor() { }

}
