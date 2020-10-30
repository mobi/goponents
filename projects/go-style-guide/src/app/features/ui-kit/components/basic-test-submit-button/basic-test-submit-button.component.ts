import { Component, ViewChild } from '@angular/core';
import * as faker from 'faker';
import { GoButtonComponent, GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-test-submit-button',
  templateUrl: './basic-test-submit-button.component.html'
})
export class BasicTestSubmitButtonComponent {
  email: FormControl = new FormControl('');
  fakeTitle: string = faker.company.companyName();
  fakeCompanyBs: string = faker.company.bs();
  fakePhrase: string = faker.company.catchPhrase();
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  submitButtonText: string = 'Apply Changes';
  submitDisabled: boolean = false;

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public submitButtonTest(): void {
    alert('Submitted!');
    this.goOffCanvasService.closeOffCanvas();
  }
}
