import { Component, ViewChild } from '@angular/core';

import { GoButtonComponent } from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html'
})
export class ButtonDocsComponent {

  @ViewChild('defaultButton') defaultButton: GoButtonComponent;
  @ViewChild('negativeButton') negativeButton: GoButtonComponent;
  @ViewChild('negativeDarkButton') negativeDarkButton: GoButtonComponent;
  @ViewChild('neutralButton') neutralButton: GoButtonComponent;
  @ViewChild('positiveButton') positiveButton: GoButtonComponent;

  defaultButtonLoading: boolean = false;
  negativeButtonLoading: boolean = false;
  neutralButtonLoading: boolean = false;
  positiveButtonLoading: boolean = false;
  negativeDarkButtonLoading: boolean = false;

  pageTitle: string = 'Button';

  componentBindings: string = `
  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonType: string = 'button';
  @Input() buttonVariant: string;
  @Input() isProcessing: boolean;
  @Input() useDarkTheme: boolean;

  @Output() handleClick = new EventEmitter<boolean>();
  `;

  defaultExample: string = `
  <go-button (handleClick)="testClick()">Default</go-button>

  <go-button (handleClick)="testClick()" buttonDisabled="true">Disabled</go-button>

  <go-button (handleClick)="testClick()" buttonIcon="work">With Icon</go-button>
  `;

  negativeExample: string = this.buttonTemplate('negative', 'delete');
  neutralExample: string = this.buttonTemplate('neutral', 'live_help');
  positiveExample: string = this.buttonTemplate('positive', 'check');

  loadingExampleTS: string = `
  import { GoButtonComponent } from 'goponents';

  @ViewChild('submitButton') submitButton: GoButtonComponent;

  submitButtonLoading: boolean = false;

  testSubmit() {
    this.submitButtonLoading = true;

    // Do something with click, then reset the button
    this.submitButton.reset();
  }
  `;

  loadingExampleHTML: string = `
  <go-button (handleClick)="testSubmit()" [isProcessing]="submitButtonLoading" #submitButton>Load Me</go-button>
  `;

  darkButtonExample: string = `
  <go-button (handleClick)="testClick()" [useDarkTheme]="true">
    Default
  </go-button>
  `;

  buttonGroup: string = `
  <ul class="go-button-group">
    <li class="go-button-group__item">
      <go-button>Button 1</go-button>
    </li>
    <li class="go-button-group__item">
      <go-button>Button 2</go-button>
    </li>
  </ul>
  `;

  public testClick(): void {
    alert('Button clicked!');
  }

  public testSubmit(button: string): void {
    this[button + 'Loading'] = true;
    setTimeout(() => {
      this[button + 'Loading'] = false;
    }, 3800);
  }


  private buttonTemplate (variant: string, icon: string): string {
    return `
  <go-button (handleClick)="testClick()" buttonVariant="${variant}">
    Negative
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonDisabled="true">
    Disabled
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonIcon="${icon}">
    With Icon
  </go-button>
    `;
  }
}
