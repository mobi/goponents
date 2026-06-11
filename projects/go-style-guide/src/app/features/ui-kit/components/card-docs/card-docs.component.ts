import { Component } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-card-docs',
    templateUrl: './card-docs.component.html',
})
export class CardDocsComponent {

  pageTitle: string = 'Card';

  componentBindings: string = `
  @Input() showHeader: boolean = true;
  @Input() shadow: boolean = true;
  `;

  defaultExample: string = `
  <go-card>
    <ng-container go-card-header>
      <h2 class="go-heading-2">Default</h2>
    </ng-container>
    <ng-container go-card-content>
      <!-- Card Content -->
    </ng-container>
  </go-card>
  `;

  showHeaderExample: string = `
  <go-card [showHeader]="false">
    <ng-container go-card-header>
      <h2 class="go-heading-2">Default</h2> <!-- Notice that this is not rendered -->
    </ng-container>
    <ng-container go-card-content>
      <!-- Card Content -->
    </ng-container>
  </go-card>
  `;

  nestedCardExample: string = `
  <go-card>
    <ng-container go-card-header>
      <h2 class="go-heading-2">Outer Card</h2>
    </ng-container>
    <ng-container go-card-content>
      <go-card [shadow]="false">
        <ng-container go-card-header>
          <h3 class="go-heading-3">Nested Card (no shadow)</h3>
        </ng-container>
        <ng-container go-card-content>
          <!-- Nested Content -->
        </ng-container>
      </go-card>
    </ng-container>
  </go-card>
  `;

  hrExample: string = `
    <hr class="go-hr">
  `;

  hrAllowPaddingExample: string = `
    <hr class="go-hr go-hr--allow-padding">
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-card';

  constructor() { }

}
