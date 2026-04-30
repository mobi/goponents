import { Component, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';
import { GoButtonComponent, GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-basic-test-large',
    templateUrl: './basic-test-large.component.html',
    styleUrls: ['./basic-test-large.component.scss'],
})
export class BasicTestLargeComponent {
  @ViewChild('submitButton', { static: true }) submitButton: GoButtonComponent;

  email: FormControl = new FormControl('');
  fakeTitle: string = faker.company.name();
  fakeCompanyBs: string = faker.company.buzzPhrase();
  fakePhrase: string = faker.company.catchPhrase();
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public fakeSubmit(): void {
    this.submitButton.isProcessing = true;
    setTimeout(() => {
      this.submitButton.reset();
      this.goOffCanvasService.closeOffCanvas();
    }, 2000);
  }
  public cancel(): void {
    this.goOffCanvasService.closeOffCanvas();
  }
}
