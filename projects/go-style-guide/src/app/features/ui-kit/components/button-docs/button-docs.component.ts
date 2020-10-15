import { Component, ViewChild } from '@angular/core';

import { GoButtonComponent, SplitButtonOption } from '../../../../../../../go-lib/src/public_api';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html'
})
export class ButtonDocsComponent {

  @ViewChild('primaryButton', { static: true }) primaryButton: GoButtonComponent;
  @ViewChild('secondaryButton', { static: true }) secondaryButton: GoButtonComponent;
  @ViewChild('secondaryDarkButton', { static: true }) secondaryDarkButton: GoButtonComponent;
  @ViewChild('tertiaryButton', { static: true }) tertiaryButton: GoButtonComponent;
  @ViewChild('tertiaryDarkButton', { static: true }) tertiaryDarkButton: GoButtonComponent;
  @ViewChild('negativeButton', { static: true }) negativeButton: GoButtonComponent;
  @ViewChild('negativeDarkButton', { static: true }) negativeDarkButton: GoButtonComponent;
  @ViewChild('neutralButton', { static: true }) neutralButton: GoButtonComponent;

  primaryButtonLoading: boolean = false;
  secondaryButtonLoading: boolean = false;
  secondaryDarkButtonLoading: boolean = false;
  tertiaryButtonLoading: boolean = false;
  tertiaryDarkButtonLoading: boolean = false;
  negativeButtonLoading: boolean = false;
  neutralButtonLoading: boolean = false;
  neutralButtonIconLoading: boolean = false;
  negativeDarkButtonLoading: boolean = false;

  pageTitle: string = 'Button';

  splitButtonOptions: SplitButtonOption[] = [
    {
      label: 'Option 1',
      action: this.testSplitButtonOption
    },
    {
      label: 'Option 2',
      action: this.testSplitButtonOption
    }
  ];

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

  primaryExample: string = this.buttonTemplate('primary', 'work');
  secondaryExample: string = this.buttonTemplate('secondary', 'work');
  tertiaryExample: string = this.buttonTemplate('tertiary', 'work');
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

  splitExample: string = `
  <div class="go-column go-column--25">
    <go-button
      [splitButtonOptions]="[{action: '', label: 'Option 1'},{action: '', label: 'Option 2'}]"
      buttonVariant="secondary"
      (handleClick)="testClick()">
      Secondary
    </go-button>
  </div>
  <div class="go-column go-column--25">
    <go-button
      [splitButtonOptions]="[{action: '', label: 'Option 1'},{action: '', label: 'Option 2'}]"
      buttonVariant="secondary"
      (handleClick)="testClick()"
      buttonDisabled="true">
      Disabled
    </go-button>
  </div>
  <div class="go-column go-column--25">
    <go-button
      [splitButtonOptions]="[{action: '', label: 'Option 1'},{action: '', label: 'Option 2'}]"
      buttonVariant="secondary"
      (handleClick)="testClick()"
      buttonIcon="work">
      With Icon
    </go-button>
  </div>
  <div class="go-column go-column--25">
    <go-button
      [splitButtonOptions]="[{action: '', label: 'Option 1'},{action: '', label: 'Option 2'}]"
      buttonVariant="secondary"
      (handleClick)="testClick()"
      buttonIcon="work">
    </go-button> Icon Only
  </div>
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-button';

  constructor(private titleCasePipe: TitleCasePipe) { }

  testClick(): void {
    alert('Button clicked!');
  }

  testSplitButtonOption(label: string): void {
    alert(`${label} clicked!`);
  }

  testSubmit(button: string): void {
    this[button + 'Loading'] = true;
    setTimeout(() => {
      this[button + 'Loading'] = false;
    }, 3800);
  }

  private buttonTemplate(variant: string, icon: string): string {
    return `
  <go-button (handleClick)="testClick()" buttonVariant="${variant}">
    ${this.titleCasePipe.transform(variant)}
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonDisabled="true">
    Disabled
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonIcon="${icon}">
    With Icon
  </go-button>

  <go-button (handleClick)="testClick()" buttonVariant="${variant}" buttonIcon="${icon}">
  </go-button>
    `;
  }
}
