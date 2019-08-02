import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html'
})
export class TestPage3Component implements OnInit {
  formErrors: {[k: string]: string[]} = {};
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (this.formErrors.name) {
      this.formErrors.name = null;
      this.form.get('name').setErrors(null);
    } else {
      this.formErrors.name = ['This is an invalid name'];
      this.form.get('name').setErrors({ name: 'invalid' });
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: new FormControl()
    });
  }
}
