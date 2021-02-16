import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoOffCanvasService } from 'projects/go-lib/src/public_api';
import { BasicTestComponent } from '../../../ui-kit/components/basic-test/basic-test.component';

@Component({
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  pageTitle: string = 'Grid System';

  form: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl,
    email: new FormControl()
  });

  basicExample20: string = `
  <section class="go-container">
    <div class="go-column go-column--20">1 of 5</div>
    <div class="go-column go-column--20">2 of 5</div>
    <div class="go-column go-column--20">3 of 5</div>
    <div class="go-column go-column--20">4 of 5</div>
    <div class="go-column go-column--20">5 of 5</div>
  </section>
  `;

  basicExample25: string = `
  <section class="go-container">
    <div class="go-column go-column--25">1 of 4</div>
    <div class="go-column go-column--25">2 of 4</div>
    <div class="go-column go-column--25">3 of 4</div>
    <div class="go-column go-column--25">4 of 4</div>
  </section>
  `;

  basicExample33: string = `
  <section class="go-container">
    <div class="go-column go-column--33">1 of 3</div>
    <div class="go-column go-column--33">2 of 3</div>
    <div class="go-column go-column--33">3 of 3</div>
  </section>
  `;

  basicExample50: string = `
  <section class="go-container">
    <div class="go-column go-column--50">1 of 2</div>
    <div class="go-column go-column--50">2 of 2</div>
  </section>
  `;

  offsetExample66: string = `
  <section class="go-container">
    <div class="go-column go-column--33">33.33333%</div>
    <div class="go-column go-column--66">66.66667%</div>
  </section>
  `;

  offsetExample75: string = `
  <section class="go-container">
    <div class="go-column go-column--75">75%</div>
    <div class="go-column go-column--25">25%</div>
  </section>
  `;

  advancedExampleMixed: string = `
  <section class="go-container">
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--50">50%</div>
    <div class="go-column go-column--66">66%</div>
    <div class="go-column go-column--33">33%</div>
    <div class="go-column go-column--100">100%</div>
  </section>
  `;

  nestedExample: string = `
  <section class="go-container example-grid">
    <div class="go-column go-column--25">25%</div>
    <div class="go-column go-column--75 go-column--no-padding">
      <p class="go-body-copy">75%</p>
      <div class="go-container">
        <div class="go-column go-column--50">50%</div>
        <div class="go-column go-column--50">50%</div>
      </div>
    </div>
  </section>
  `;

  collapseColumn: string = `
  <section class="go-container">
    <div class="go-column">Column 1</div>
    <div class="go-column go-column--collapse">Column 2</div>
  </section>
  `;

  alignCenterContainer: string = `
  <section class="go-container go-container--align-center">
    <div class="go-column go-column--50">Column 1</div>
    <div class="go-column go-column--50">Column 2</div>
  </section>
  `;

  formExample: string = `
  <form
    [formGroup]="form"
    class="go-container go-container--form">
    <div class="go-column column--100 go-column--no-padding">
      <div class="go-container go-container--form">
        <go-input
          class="go-column go-column--50"
          label="First Name"
          [control]="form.get('firstName')">
        </go-input>
        <go-input
          class="go-column go-column--50"
          label="Last Name"
          [control]="form.get('lastName')">
        </go-input>
      </div>
    </div>
    <go-input
      class="go-column go-column--100"
      label="Email"
      [control]="form.get('email')">
    </go-input>
    <div class="go-column go-column--100 go-column--no-padding">
      <go-button>Submit</go-button>
    </div>
  </form>
  `;

  containerReset: string = `
  <form class="go-form go-form--dark">
    <div class="go-container go-container--form go-container--reset">
      <div class="go-column go-column--50">
        <label for="first-name-input" class="go-form__label">First Name</label>
        <input class="go-form__input" id="first-name-input" placeholder="Jonny" type="text">
      </div>
      <!-- ... -->
    </div>
  </form>
  `;

  constructor(
    private goOffCanvasService: GoOffCanvasService,
  ) { }

  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {}
    });
  }
}
