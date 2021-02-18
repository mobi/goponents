import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'negative';

@Component({
  selector: 'app-button-group-docs',
  templateUrl: './button-group-docs.component.html'
})
export class ButtonGroupDocsComponent implements OnInit {

  buttonDisabled: boolean = false;
  buttonVariant: ButtonVariant = 'primary';

  variants: ButtonVariant[] = [
    'primary',
    'secondary',
    'tertiary',
    'neutral',
    'negative'
  ];

  disableToggle: FormControl = new FormControl(false);
  variantSelect: FormControl = new FormControl(this.buttonVariant);

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-button-group';

  buttonGroupEx: string = `
  <!--

  buttonDisabled is a boolean.

  buttonVariant corresponds to the buttonVariant on the go-button component,
  for avaiable variants check the docs for go-button.

  -->

  <go-button-group
    [buttonDisabled]="buttonDisabled"
    [buttonVariant]="buttonVariant">
    <go-button>Item 1</go-button>
    <go-button>Item 2</go-button>
    <go-button>Item 3</go-button>
  </go-button-group>

  <go-button-group
    [buttonDisabled]="buttonDisabled"
    [buttonVariant]="buttonVariant">
    <go-button buttonIcon="home"></go-button>
    <go-button buttonIcon="landscape"></go-button>
    <go-button buttonIcon="settings"></go-button>
  </go-button-group>
  `;

  ngOnInit(): void {
    this.variantSelect.valueChanges.subscribe((value: ButtonVariant) => {
      this.buttonVariant = value;
    });

    this.disableToggle.valueChanges.subscribe((value: boolean) => {
      this.buttonDisabled = value;
    });
  }
}
