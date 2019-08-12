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
    this.setError('name', 'This is an invalid name');
    this.setError('notes', 'This is an invalid desciption');
  }

  private setError(formControlName: string, errorMessage: string): void {
    if (this.formErrors[formControlName]) {
      this.formErrors[formControlName] = null;
      this.form.get(formControlName).setErrors(null);
    } else {
      this.formErrors[formControlName] = [errorMessage];
      this.form.get(formControlName).setErrors({ errors: 'invalid' });
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: [''],
      notes: ['']
    });
  }
}
