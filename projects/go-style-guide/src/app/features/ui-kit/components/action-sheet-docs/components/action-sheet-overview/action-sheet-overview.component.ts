import { Component } from '@angular/core';

@Component({
  selector: 'app-action-sheet-overview',
  templateUrl: './action-sheet-overview.component.html'
})
export class ActionSheetOverviewComponent {

  bindings: string = `@Input() shiftLeft: boolean = false;`;

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
}
