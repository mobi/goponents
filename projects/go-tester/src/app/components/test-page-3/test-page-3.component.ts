import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html'
})
export class TestPage3Component implements OnInit {
  selectData: any = [{
    value: 1,
    name: 'Harry'
  }, {
    value: 2,
    name: 'Hermione'
  }, {
    value: 3,
    name: 'Ron'
  }, {
    value: 4,
    name: 'Voldermort'
  }, {
    value: 5,
    name: 'Snake'
  }
  ];

  groupedSelectData: any = [{
    title: 'Good', people: [{
      value: 1,
      name: 'Harry'
    }, {
      value: 2,
      name: 'Hermione'
    }, {
      value: 3,
      name: 'Ron'
    }, ]
  }, {
    title: 'Evil', people: [{
      value: 4,
      name: 'Voldermort'
    }, {
      value: 5,
      name: 'Snake'
    }]
  }];

  fileControl: FormControl = new FormControl();
  form: FormGroup = new FormGroup({
    food: new FormGroup({
      apples: new FormControl(''),
      bananas: new FormControl({value: '', disabled: true}),
      mangoes: new FormControl({value: true, disabled: true}),
      oranges: new FormControl(true)
    }),
    name: new FormControl({value: '', disabled: false}, Validators.required),
    notes: new FormControl(''),
    radio: new FormControl({value: '', disabled: false}),
    toggle: new FormControl(false),
    toggle2: new FormControl(false),
    date: new FormControl(new Date(2019, 4, 25)),
    date2: new FormControl('5/25/2019')
  });
  loading: boolean = false;
  loadingSelectOptions: boolean = true;

  otherThing: FormControl = new FormControl('test');
  testOtherThing: FormControl = new FormControl({value: 'Disabled Input', disabled: true});
  selectControl: FormControl = new FormControl();
  otherSelectControl: FormControl = new FormControl({value: 'Disabled Select', disabled: true});
  validationSelectControl: FormControl = new FormControl({value: 'Hermione', disabled: false});
  multiSelectControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingSelectOptions = false;
    }, 3000);
  }

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
      notes: [{message: 'test'}],
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
