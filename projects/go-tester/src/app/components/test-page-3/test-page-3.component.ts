import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html'
})
export class TestPage3Component {
  selectData: any = [{
    id: 1,
    name: 'Harry'
  }, {
    id: 2,
    name: 'Hermione'
  }, {
    id: 3,
    name: 'Ron'
  }, {
    id: 4,
    name: 'Voldermort'
  }, {
    id: 5,
    name: 'Snake'
  }];

  form: FormGroup = new FormGroup({
    food: new FormGroup({
      apples: new FormControl(''),
      bananas: new FormControl('')
    }),
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    notes: new FormControl(''),
    radio: new FormControl({value: '', disabled: false}),
    toggle: new FormControl(false)
  });
  loading: boolean = false;

  otherThing: FormControl = new FormControl('test');
  testOtherThing: FormControl = new FormControl({ value: 'Disabled Input', disabled: true });
  selectControl: FormControl = new FormControl();
  otherSelectControl: FormControl = new FormControl({ value: 'Disabled Select', disabled: true });
  validationSelectControl: FormControl = new FormControl({ value: 'Hermione', disabled: false });
  multiSelectControl: FormControl = new FormControl();

  constructor() { }

  onSubmit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);

    const errorResponse: object = {
      name: [
        {
          message: 'This is a default error.'
        },
        {
          type: 'A custom message',
          message: 'This is an invalid name.'
        }
      ],
      notes: [{ message: 'test' }],
      radio: [{message: 'some test error'}],
      food: [{message: 'some test error'}],
      validationSelectControl: [{message: 'You need to select Ron.'}]
    };

    this.setErrors(errorResponse);
  }

  private setErrors(errorResponse: object): void {
    for (const [input, errors] of Object.entries(errorResponse)) {
      if (input in this.form.controls) {
        this.form.controls[input].setErrors(errors);
      }

      if (this.validationSelectControl.value.name !== 'Ron') {
        this.validationSelectControl.setErrors(errorResponse['validationSelectControl']);
      }
    }
  }
}
