import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-docs',
  templateUrl: './checkbox-docs.component.html'
})
export class CheckboxDocsComponent {
  option1Disabled: boolean = true;
  option2Disabled: boolean = true;

  checkbox1: FormControl = new FormControl('');
  checkbox2: FormControl = new FormControl('');
  checkbox3: FormControl = new FormControl('');
  checkbox4: FormControl = new FormControl('');

  checkboxGroup1: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl('')
  });

  checkboxGroup2: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl('')
  });

  checkboxGroup3: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl('')
  });

  checkboxGroup4: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl(true)
  });

  groupHints: Array<string> = ['this is a hint for the group'];
  checkbox3Hints: Array<string> = ['this is a hint for the this checkbox'];

  checkboxSetup: string = `
  import { GoCheckboxModule } from '@tangoe/goponents';

  @NgModule({
    imports: [
      GoCheckboxModule
    ]
  });
  `;

  checkbox1Ex: string = `
  <go-checkbox label="Checkbox 1" [control]="checkbox1">
  </go-checkbox>
  `;

  checkboxGroup1Ex: string = `
  <!-- component.html -->

  <go-checkbox-group legend="Options" [control]="checkboxGroup1">
    <go-checkbox label="Option 1" [control]="checkboxGroup1.controls.option1">
    </go-checkbox>
    <go-checkbox label="Option 2" [control]="checkboxGroup1.controls.option2">
    </go-checkbox>
  </go-checkbox-group>
  `;

  checkboxGroup1Ex_ts: string = `
  // component.ts

  checkboxGroup1: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl('')
  });
  `;

  checkbox2Ex: string = `
  <go-checkbox
    label="Checkbox 2"
    [control]="checkbox2"
    key="checkbox_2">
  </go-checkbox>
  `;

  checkbox2KeyCode: string = `
  <input type="checkbox" id="checkbox_2">
  <label for="checkbox_2"> Checkbox 2 </label>
  `;

  checkbox3HintsCode: string = `
  // for the group
  groupHints: Array<string> = ['this is a hint for the group'];

  // for a single checkbox
  checkbox3Hints: Array<string> = ['this is a hint for the this checkbox'];
  `;

  checkbox3Ex: string = `
  <!-- hints for a group -->
  <go-checkbox-group legend="Options" [control]="checkboxGroup2">
    <div>
      <go-checkbox label="Option 1" [control]="checkboxGroup2.controls.option1">
      </go-checkbox>
    </div>
    <div>
      <go-checkbox label="Option 2" [control]="checkboxGroup2.controls.option2">
      </go-checkbox>
    </div>
  </go-checkbox-group>

  <!-- hints for an individual checkbox -->
  <go-checkbox
    label="Checkbox 3"
    [control]="checkbox3"
    [hints]="checkbox3Hints">
  </go-checkbox>
  `;

  checkbox4Ex: string = `
  <!-- theme for a group -->
  <go-checkbox-group legend="Options" [control]="checkboxGroup3" theme="dark">
    <div>
      <go-checkbox label="Option 1" [control]="checkboxGroup3.controls.option1">
      </go-checkbox>
    </div>
    <div>
      <go-checkbox label="Option 2" [control]="checkboxGroup3.controls.option2">
      </go-checkbox>
    </div>
  </go-checkbox-group>

  <!-- theme for an individual checkbox -->
  <go-checkbox
    label="Checkbox 3"
    [control]="checkbox3"
    theme="dark">
  </go-checkbox>
  `;

  checkboxDisabledEx_ts: string = `
  // component.ts

  option1Disabled: boolean = true;
  option2Disabled: boolean = true;

  checkboxGroup4: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl(true)
  });
  `;

  checkboxDisabledEx: string = `
  <!-- component.html -->

  <go-checkbox-group legend="Options" [control]="checkboxGroup4">
    <go-checkbox
      label="Option 1"
      [control]="checkboxGroup4.controls.option1"
      disabled="option1Disabled">
    </go-checkbox>
    <go-checkbox
      label="Option 2"
      [control]="checkboxGroup4.controls.option2"
      disabled="option2Disabled">
    </go-checkbox>
  </go-checkbox-group>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Checkboxes';
  }

}
