import { Component } from '@angular/core';
import { GoToasterService } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-action-sheet-panel-docs',
  templateUrl: './action-sheet-panel-docs.component.html'
})
export class ActionSheetPanelDocsComponent {

  bindings: string = `
  @Input() danger: boolean;
  @Input() showHeader: boolean;
  @Input() icon: string;
  @Input() externalLink: string;
  @Input() panelContent: string;

  @Output() action: EventEmitter<void> = new EventEmitter<void>();
  `;

  iconHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Icons Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel icon="home" panelContent="Home">
      </go-panel>
      <go-panel icon="landscape" panelContent="Landscape">
      </go-panel>
      <go-panel icon="settings" panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  headerHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Header Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel [showHeader]="true" panelContent="<i>John Smith</i><p>john.smith@tangoe.com</p>">
      </go-panel>
      <go-panel panelContent="Landscape">
      </go-panel>
      <go-panel panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  dangerHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Danger Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Home">
      </go-panel>
      <go-panel panelContent="Landscape">
      </go-panel>
      <go-panel [danger]="true" panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  externalHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        External Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Home">
      </go-panel>
      <go-panel externalLink="http://google.com" panelContent="Google">
      </go-panel>
      <go-panel panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  actionsHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Actions Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Home">
      </go-panel>
      <go-panel (action)="toast()" panelContent="Toast Me">
      </go-panel>
      <go-panel panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  routerHtml: string = `
  <go-action-sheet>
    <ng-container go-action-sheet__button>
      <go-button>
        Router Sheet
      </go-button>
    </ng-container>
    <ng-container go-action-sheet-content>
      <go-panel panelContent="Home">
      </go-panel>
      <go-panel panelContent="Getting Started" routerLink="/getting-started">
      </go-panel>
      <go-panel panelContent="Settings">
      </go-panel>
    </ng-container>
  </go-action-sheet>
  `;

  contentProjectionHtml: string = `
    <go-action-sheet>
      <ng-container go-action-sheet__button>
        <go-button>
          Sheet With Content Projection
        </go-button>
      </ng-container>
      <ng-container go-action-sheet-content>
        <go-panel>
          <ol class="go-ordered-list">
            <li class="go-ordered-list__item">One</li>
            <li class="go-ordered-list__item">Two</li>
            <li class="go-ordered-list__item">Three</li>
          </ol>
        </go-panel>
        <go-panel>
          <ol class="go-ordered-list">
            <li class="go-ordered-list__item">Four</li>
            <li class="go-ordered-list__item">Five</li>
            <li class="go-ordered-list__item">Six</li>
          </ol>
        </go-panel>
      </ng-container>
    </go-action-sheet>
  `;

  constructor(
    private toasterService: GoToasterService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Action Sheet Panel';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-action-sheet/go-panel';

  }

  toast(): void {
    this.toasterService.toastInfo({ header: 'Accounement', message: 'You completed an action!' });
  }

}
