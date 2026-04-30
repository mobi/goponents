import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';
import { Component, ViewChild } from '@angular/core';
import { faker } from '@faker-js/faker';
import { GoButtonComponent, GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-basic-test',
    templateUrl: './basic-test.component.html',
    styleUrls: ['./basic-test.component.scss'],
})
export class BasicTestComponent {
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
    setTimeout(() => {
      this.submitButton.reset();
      this.goOffCanvasService.closeOffCanvas();
    }, 2000);
  }
}
