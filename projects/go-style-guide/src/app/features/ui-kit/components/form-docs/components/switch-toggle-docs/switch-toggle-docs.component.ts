import { Component, OnInit } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-switch-toggle-docs',
  templateUrl: './switch-toggle-docs.component.html'
})
export class SwitchToggleDocsComponent implements OnInit {

  control1: FormControl = new FormControl('');
  control2: FormControl = new FormControl('');
  control3: FormControl = new FormControl('');
  control4: FormControl = new FormControl('');
  control5: FormControl = new FormControl('');
  control6: FormControl = new FormControl('');
  control7: FormControl = new FormControl('');
  control8: FormControl = new FormControl('');

  hints: Array<string> = ['Toggling this does something.'];

  controlEx: string = `
  <go-switch-toggle [control]="control1" label="Control"></go-switch-toggle>
  `;

  labelEx: string = `
  <go-switch-toggle [control]="control2" label="Label"></go-switch-toggle>
  `;

  keyEx: string = `
  <go-switch-toggle
    [control]="control3"
    label="Key Label"
    key="custom-key">
  </go-switch-toggle>
  `;

  customKeyEx: string = `
  <label for="custom-key">Key Label</label>
  <ng-select ng-reflect-label-for-id="custom-key"></ng-select>
  `;

  hintsExHtml: string = `
  <go-switch-toggle
    [control]="control4"
    label="Hints"
    [hints]="hints">
  </go-select>
  `;

  hintsExTs: string = `
  hints: Array<string> = [
    'Toggling this does something.'
  ];
  `;

  errorsExHtml: string = `
  <go-switch-toggle
    [control]="control5"
    label="Errors Toggle">
  </go-switch-toggle>
  `;

  errorsExTs: string = `
  this.control5.setErrors([
    {
      message: 'An error occurred.'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;

  labelPositionEx: string = `
  <go-switch-toggle
    [control]="control6"
    label="On Your Left"
    labelPosition="before">
  </go-switch-toggle>
  `;

  themeEx: string = `
  <go-switch-toggle
    [control]="control7"
    label="Dark Label"
    theme="dark">
  </go-switch-toggle>
  `;

  isDisabledEx: string = `
  <go-switch-toggle
    [control]="control8"
    label="Control"
    [isDisabled]="true">
  </go-switch-toggle>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Switch Toggle';
  }

  ngOnInit(): void {
    setTimeout((): void => {
      this.control5.setErrors([
        {
          message: 'An error occurred.'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);
    });
  }
}
