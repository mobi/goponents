import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html'
})
export class TestPage3Component {
  form: FormGroup = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    notes: new FormControl('')
  });

  otherThing: FormControl = new FormControl('test');
  testOtherThing: FormControl = new FormControl({ value: 'Disabled Input', disabled: true });

  constructor() { }

  onSubmit(): void {
    const errorResponse: object = {
      name: [
        {
          message: 'This is a default error.'
        },
        {
          type: 'A custom message',
          message: 'This is an invalid name.'
        }
      ]
    };
    this.setErrors(errorResponse);
  }

  private setErrors(errorResponse: object): void {
    for (const [input, errors] of Object.entries(errorResponse)) {
      if (input in this.form.controls) {
        this.form.controls[input].setErrors(errors);
      }
    }
  }
}
