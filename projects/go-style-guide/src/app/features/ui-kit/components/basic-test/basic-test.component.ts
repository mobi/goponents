import { Component, ViewChild } from '@angular/core';
import * as faker from 'faker';
import { GoButtonComponent, GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-test',
  templateUrl: './basic-test.component.html',
  styleUrls: ['./basic-test.component.scss']
})
export class BasicTestComponent {
  @ViewChild('submitButton', { static: true }) submitButton: GoButtonComponent;

  email: FormControl = new FormControl('');
  fakeTitle: string = faker.company.companyName();
  fakeCompanyBs: string = faker.company.bs();
  fakePhrase: string = faker.company.catchPhrase();
  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public fakeSubmit(): void {
    setTimeout(() => {
      this.submitButton.reset();
      this.goOffCanvasService.closeOffCanvas();
    }, 2000);
  }
}
