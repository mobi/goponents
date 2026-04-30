import { Component, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';
import { GoButtonComponent, GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-basic-test-submit-button',
    templateUrl: './basic-test-submit-button.component.html',
})
export class BasicTestSubmitButtonComponent {
  email: FormControl = new FormControl('');
  fakeTitle: string = faker.company.name();
  fakeCompanyBs: string = faker.company.buzzPhrase();
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
