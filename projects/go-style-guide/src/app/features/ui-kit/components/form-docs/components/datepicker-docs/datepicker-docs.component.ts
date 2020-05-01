import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './datepicker-docs.component.html'
})
export class DatepickerDocsComponent implements OnInit {
  dob: FormControl = new FormControl('2015-08-15');
  dob2: FormControl = new FormControl('');
  dob3: FormControl = new FormControl('');
  dob4: FormControl = new FormControl('');
  dob5: FormControl = new FormControl('');
  dob6: FormControl = new FormControl({ value: '', disabled: true });
  dob7: FormControl = new FormControl('');
  dob8: FormControl = new FormControl('');
  dob9: FormControl = new FormControl('');
  locale: FormControl = new FormControl('');
  max: FormControl = new FormControl('');
  min: FormControl = new FormControl('');

  hints: Array<string> = [
    'Please enter your date of birth',
    'This is a second hint for no reason'
  ];

  basicFormControl: string = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';

  @Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.css']
  })
  export class NameEditorComponent {
    name = new FormControl('');
  }
  `;

  basicInputExampleComponent: string = `
  dob: FormControl = new FormControl('2015-08-15');
  dob: FormControl = new FormControl('08-15-2015');
  dob: FormControl = new FormControl(new Date('08-15-2015'));
  `;

  basicInputExample: string = `
  <go-datepicker [control]="dob"></go-datepicker>
  `;

  basicInputLabelExample: string = `
  <go-datepicker
    [control]="dob"
    label="Date of Birth">
  </go-datepicker>
  `;

  basicInputKeyExample: string = `
  <go-datepicker
    [control]="dob"
    label="Date of Birth"
    key="date-of-birth-datepicker">
  </go-datepicker>
  `;

  basicInputKeyExampleOutput: string = `
  <label for="date-of-birth-datepicker">Your Name</label>
  <input type="text" id="date-of-birth-datepicker" [formControl]="dob">
  `;

  basicHintsTemplate: string = `
  hints: Array<string> = [
    'Please enter your date of birth',
    'This is a second hint for no reason'
  ];
  `;

  basicInputHintsExample: string = `
  <go-datepicker
    label="Date of Birth"
    [control]="dob"
    [hints]="hints">
  </go-datepicker>
  `;

  basicErrorsTemplate: string = `
  this.dob.setErrors([
    {
      message: 'This date is invalid'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;

  basicDisabledExample: string = `
  firstDate: new FormControl({
    value: '',
    disabled: true
  });
  `;

  basicDisabledExample2: string = `
  lastDate: new FormControl('');

  ngOnInit(): void {
    this.lastDate.disable();
    // Use this.lastDate.enable(); to re-enable the input.
  }
  `;

  basicPlaceholderExample: string = `
  <go-datepicker
    [control]="dob"
    label="Date of Birth"
    placeholder="10/28/1999">
  </go-datepicker>
  `;

  basicLocaleExample: string = `
  <go-datepicker
    [control]="locale"
    label="Date of Birth"
    locale="de">
  </go-datepicker>
  `;

  maxDateExample: string = `
  <go-datepicker
    [control]="max"
    label="Date of Birth"
    maxDate="10/15/2019">
  </go-datepicker>
  `;

  minDateExample: string = `
  <go-datepicker
    [control]="min"
    label="Date of Birth"
    minDate="5/10/2000">
  </go-datepicker>
  `;

  appendToContentExample: string = `
  <go-datepicker
    [control]="dob"
    label="Date of Birth"
    [appendToContent]="true">
  </go-datepicker>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Datepicker';
  }

  ngOnInit(): void {
    setTimeout((): void => {
      this.dob5.setErrors([
        {
          message: 'This date is invalid'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);

      this.dob7.disable();
    }, 500);
  }
}
