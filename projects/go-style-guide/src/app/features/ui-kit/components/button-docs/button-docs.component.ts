import { Component, ViewChild } from '@angular/core';

import { GoButtonComponent } from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html'
})
export class ButtonDocsComponent {

  @ViewChild('primaryButton') primaryButton: GoButtonComponent;
  @ViewChild('secondaryButton') secondaryButton: GoButtonComponent;
  @ViewChild('secondaryDarkButton') secondaryDarkButton: GoButtonComponent;
  @ViewChild('tertiaryButton') tertiaryButton: GoButtonComponent;
  @ViewChild('tertiaryDarkButton') tertiaryDarkButton: GoButtonComponent;
  @ViewChild('negativeButton') negativeButton: GoButtonComponent;
  @ViewChild('negativeDarkButton') negativeDarkButton: GoButtonComponent;
  @ViewChild('neutralButton') neutralButton: GoButtonComponent;

  primaryButtonLoading: boolean = false;
  secondaryButtonLoading: boolean = false;
  secondaryDarkButtonLoading: boolean = false;
  tertiaryButtonLoading: boolean = false;
  tertiaryDarkButtonLoading: boolean = false;
  negativeButtonLoading: boolean = false;
  neutralButtonLoading: boolean = false;
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

  variantNotice: string = `
  The default buttonVariant is 'primary', however in many cases the variant that should be used will be different.
  It is dependent upon the usage context for when to use each variant. Refer to the mock ups for proper usage or
  reach out to UX for clarification.
  `;

  primaryExample: string = `
  <go-button (handleClick)="testClick()">Primary</go-button>

  <go-button (handleClick)="testClick()" buttonDisabled="true">Disabled</go-button>

  <go-button (handleClick)="testClick()" buttonIcon="work">With Icon</go-button>
  `;

  secondaryExample: string = `
  <go-button (handleClick)="testClick()">Secondary</go-button>

  <go-button (handleClick)="testClick()" buttonDisabled="true">Disabled</go-button>

  <go-button (handleClick)="testClick()" buttonIcon="work">With Icon</go-button>
  `;

  tertiaryExample: string = `
  <go-button buttonVariant="tertiary" (handleClick)="testClick()">Tertiary</go-button>

  <go-button buttonVariant="tertiary" (handleClick)="testClick()" buttonDisabled="true">Disabled</go-button>

  <go-button buttonVariant="tertiary" (handleClick)="testClick()" buttonIcon="work">With Icon</go-button>
  `;

  negativeExample: string = this.buttonTemplate('negative', 'delete');
  neutralExample: string = this.buttonTemplate('neutral', 'live_help');

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
    Primary
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
