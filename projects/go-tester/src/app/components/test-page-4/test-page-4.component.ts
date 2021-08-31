import {AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GoDatepickerComponent} from '../../../../../go-lib/src/lib/components/go-datepicker/go-datepicker.component';

@Component({
  selector: 'app-test-page-4',
  templateUrl: './test-page-4.component.html'
})
export class TestPage4Component implements OnInit, AfterViewInit {
  form: FormGroup;

  @ViewChild('datePicker') dp: GoDatepickerComponent;

  constructor() {
    this.form = new FormGroup({
      date: new FormControl('')
    });
  }

  ngOnInit(): void {
    console.log(this.dp);
  }

  ngAfterViewInit(): void {
    this.dp.datePicked(new Date(2020, 0, 1));
  }

  submitForm(): void {}
}
