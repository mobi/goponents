import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-action-sheet-overview',
  templateUrl: './action-sheet-overview.component.html'
})
export class ActionSheetOverviewComponent {

  bindings: string = `
  @Input() placement: 'bottom' | 'right' = 'bottom';
  @Input() shiftLeft: boolean = false;
  `;

  structureHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <!-- a <go-icon-button> or <go-button> works well here -->
    </ng-container>
    <ng-container go-action-sheet-content>
      <!-- here is where panels or accordions go -->
    </ng-container>
  </go-action-sheet>
  `;

  simpleHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Action Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Panel 1">
      </go-panel>
      <go-panel panelContent="Panel 2">
      </go-panel>
      <go-panel panelContent="Panel 3">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  placementGenericHtml: string = `
  <go-action-sheet placement="bottom">
    ...
  </go-action-sheet>

  <go-action-sheet
    placement="bottom"
    [shiftLeft]="true">
    ...
  </go-action-sheet>

  <go-action-sheet placement="right">
    ...
  </go-action-sheet>
  `;

  accordionHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Action Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Home" icon="home">
      </go-panel>
      <go-accordion showIcons="true" [slim]="true" class="go-action-sheet__go-accordion">
        <go-accordion-panel title="Home Stuff" icon="home" [borderless]="true">
          Stuff about home
        </go-accordion-panel>
      </go-accordion>
    </ng-container>
  </go-action-sheet>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Action Sheet Overview';
  }
}
