import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-radio-button-docs',
  templateUrl: './radio-button-docs.component.html'
})
export class RadioButtonDocsComponent implements OnInit {

  radio1: FormControl = new FormControl('');
  radio2: FormControl = new FormControl('');
  radio3: FormControl = new FormControl('');
  radio4: FormControl = new FormControl('');

  hints: Array<string> = ['this is a hint for the radio group'];

  radioSetup: string = `
  import { GoRadioModule } from '@tangoe/goponents';

  @NgModule({
    imports: [
      GoRadioModule
    ]
  });
  `;

  radio1Ex: string = `
  <go-radio-group legend="Options" [control]="radio1">
    <div>
      <go-radio-button label="Option 1" formValue="option1">
      </go-radio-button>
    </div>
    <div>
      <go-radio-button label="Option 2" formValue="option2">
      </go-radio-button>
    </div>
  </go-radio-group>
  `;

  radio2Ex: string = `
  <go-radio-group legend="Options" [control]="radio2">
    <div>
      <go-radio-button label="Option 1"
                        formValue="option1"
                        key="option_1">
      </go-radio-button>
    </div>
    <div>
      <go-radio-button label="Option 2"
                        formValue="option2"
                        key="option_2">
      </go-radio-button>
    </div>
  </go-radio-group>
  `;

  radio2KeyCode: string = `
  <label for="option_1"> Option 1</label>
  <input type="radio" id="option_1">
  `;

  radio3HintsCode: string = `
  hints: Array<string> = [
    'this is a hint for the radio group'
  ];
  `;

  radio3Ex: string = `
  <go-radio-group legend="Options"
                  [control]="radio3"
                  [hints]="hints">
    <div>
      <go-radio-button label="Option 1" formValue="option1">
      </go-radio-button>
    </div>
    <div>
      <go-radio-button label="Option 2" formValue="option2">
      </go-radio-button>
    </div>
  </go-radio-group>
  `;

  radio4Ex: string = `
  <go-radio-group legend="Options"
                  [control]="radio4"
                  theme="dark">
    <div>
      <go-radio-button label="Option 1" formValue="option1">
      </go-radio-button>
    </div>
    <div>
      <go-radio-button label="Option 2" formValue="option2">
      </go-radio-button>
    </div>
  </go-radio-group>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Radio Button';
  }

  ngOnInit() {
  }

}
