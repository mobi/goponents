import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './forms-overview.component.html'
})
export class FormsOverviewComponent {

  requiredControl: string = `
  name: FormControl = new FormControl(null, Validators.required);
  `;

  basicForm: string = `
<form class="go-form">
  <div class="go-container go-container--form">
    <div class="go-column go-column--50">
      <label for="first-name-input" class="go-form__label">First Name</label>
      <input class="go-form__input" id="first-name-input" placeholder="Jonny" type="text">
    </div>
    <div class="go-column go-column--50">
      <label for="last-name-input" class="go-form__label">Last Name</label>
      <input class="go-form__input" id="last-name-input" placeholder="Appleseed" type="text">
    </div>
    <div class="go-column go-column--100">
      <label for="email-input" class="go-form__label">Email</label>
      <input class="go-form__input" id="email-input" placeholder="your@email.com" type="email">
    </div>
    <div class="go-column go-column--100">
      <label for="password-input" class="go-form__label">Password</label>
      <input class="go-form__input" id="password-input" placeholder="**************" type="password">
    </div>
    <div class="go-column go-column--100 go-column--no-padding">
      <go-button buttonVariant="positive" buttonIcon="done">Submit</go-button>
    </div>
  </div>
</form>
  `;

  darkForm: string = `
<form class="go-form go-form--dark">
  <div class="go-container go-container--form">
    <div class="go-column go-column--50">
      <label for="first-name-input" class="go-form__label">First Name</label>
      <input class="go-form__input" id="first-name-input" placeholder="Jonny" type="text">
    </div>
    <div class="go-column go-column--50">
      <label for="last-name-input" class="go-form__label">Last Name</label>
      <input class="go-form__input" id="last-name-input" placeholder="Appleseed" type="text">
    </div>
    <div class="go-column go-column--100">
      <label for="email-input" class="go-form__label">Email</label>
      <input class="go-form__input" id="email-input" placeholder="your@email.com" type="email">
    </div>
    <div class="go-column go-column--100">
      <label for="password-input" class="go-form__label">Password</label>
      <input class="go-form__input" id="password-input" placeholder="**************" type="password">
    </div>
    <div class="go-column go-column--100 go-column--no-padding">
      <go-button buttonVariant="positive" buttonIcon="done">Submit</go-button>
    </div>
  </div>
</form>
  `;

  formHints: string = `
<form class="go-form">
  <div class="go-container go-container--form">
    <div class="go-column go-column--100">
      <label for="phone-input-hint" class="go-form__label">Phone Number</label>
      <input class="go-form__input" id="phone-input-hint" placeholder="+0(000)000-0000">
      <p class="go-hint">
        This is the phone number for your work phone.
        Please use the following format: +0(000)000-0000.
      </p>
    </div>
    <div class="go-column go-column--100">
      <label for="phone-input-error" class="go-form__label">Phone Number</label>
      <input class="go-form__input go-form__input--error" id="phone-input-error" placeholder="+0(000)000-0000">
      <p class="go-hint go-hint--error">
        <span class="go-hint__status">Error:</span>
        Phone number is a required input.
      </p>
      <p class="go-hint">
        Please use the following format: +0(000)000-0000.
      </p>
    </div>
  </div>
</form>
  `;

  inputModifiers: string = `
<form class="go-form">
  <div class="go-container go-container--form">
    <div class="go-column go-column--100">
      <label for="normal-input" class="go-form__label">Normal Input</label>
      <input class="go-form__input" id="normal-input" type="text">
    </div>
    <div class="go-column go-column--100">
      <label for="disabled-input" class="go-form__label">Disabled Input</label>
      <input class="go-form__input" id="disabled-input" type="text" disabled>
    </div>
    <div class="go-column go-column--100">
      <label for="error-input" class="go-form__label">Error Input</label>
      <input class="go-form__input go-form__input--error" id="error-input" type="text">
      <p class="go-hint go-hint--error">
        <span class="go-hint__status">Error:</span>
        This input is required.
      </p>
    </div>
    <div class="go-column go-column--100">
      <label for="dark-input" class="go-form__label go-form__label--dark">Dark Input</label>
      <input class="go-form__input go-form__input--dark" id="dark-input" type="text">
    </div>
  </div>
</form>
  `;

  selectModifiers: string = `
<form class="go-form">
  <div class="go-container go-container--form">
    <div class="go-column go-column--100">
      <label for="normal-select" class="go-form__label">Normal Select</label>
      <select class="go-form__select" id="normal-select">
        <option value="" disabled selected>Select an option</option>
        <option value="1">Option #1</option>
        <option value="2">Option #2</option>
      </select>
    </div>
    <div class="go-column go-column--100">
      <label for="disabled-select" class="go-form__label">Disabled Select</label>
      <select class="go-form__select" id="disabled-select" disabled>
        <option value="" disabled selected>Select an option</option>
      </select>
    </div>
    <div class="go-column go-column--100">
      <label for="error-select" class="go-form__label">Error Select</label>
      <select class="go-form__select go-form__select--error" id="error-select">
        <option value="" disabled selected>Select an option</option>
      </select>
      <p class="go-hint go-hint--error">
        <span class="go-hint__status">Error:</span>
        This field is required.
      </p>
    </div>
    <div class="go-column go-column--100">
      <label for="dark-select" class="go-form__label go-form__label--dark">Dark Select</label>
      <select class="go-form__select go-form__select--dark" id="dark-select">
        <option value="" disabled selected>Select an option</option>
      </select>
    </div>
  </div>
</form>
  `;

  checkboxModifiers: string = `
<go-checkbox-group legend="Default Options" [control]="defaultGroup">
  <go-checkbox label="Option #1" [control]="defaultGroup.get('option1')"></go-checkbox>
  <go-checkbox label="Option #2" [control]="defaultGroup.get('option2')"></go-checkbox>
</go-checkbox-group>

<go-checkbox-group legend="Disabled Options" [control]="disabledGroup">
  <!-- disabledGroup.disable() called in constructor -->
  <go-checkbox label="Option #1" [control]="disabledGroup.get('option1')"></go-checkbox>
  <go-checkbox label="Option #2" [control]="disabledGroup.get('option2')"></go-checkbox>
</go-checkbox-group>

<go-checkbox-group legend="Error Options" [control]="errorGroup">
  <!-- Validators.requiredTrue + markAsTouched() triggers error state -->
  <go-checkbox label="Option #1" [control]="errorGroup.get('option1')"></go-checkbox>
</go-checkbox-group>

<go-checkbox-group legend="Dark Options" theme="dark" [control]="darkGroup">
  <go-checkbox label="Option #1" [control]="darkGroup.get('option1')"></go-checkbox>
  <go-checkbox label="Option #2" [control]="darkGroup.get('option2')"></go-checkbox>
</go-checkbox-group>
  `;

  radioModifiers: string = `
<go-radio-group legend="Default Options" [control]="radioControl">
  <go-radio-button label="Option #1" formValue="option1"></go-radio-button>
  <go-radio-button label="Option #2" formValue="option2"></go-radio-button>
</go-radio-group>

<go-radio-group legend="Disabled Options" [control]="disabledRadioControl">
  <!-- disabledRadioControl.disable() called in constructor -->
  <go-radio-button label="Option #1" formValue="option1"></go-radio-button>
  <go-radio-button label="Option #2" formValue="option2"></go-radio-button>
</go-radio-group>

<go-radio-group legend="Error Options" [control]="errorRadioControl">
  <!-- Validators.required + markAsTouched() triggers error state -->
  <go-radio-button label="Option #1" formValue="option1"></go-radio-button>
  <go-radio-button label="Option #2" formValue="option2"></go-radio-button>
</go-radio-group>

<go-radio-group legend="Dark Options" theme="dark" [control]="darkRadioControl">
  <go-radio-button label="Option #1" formValue="option1"></go-radio-button>
  <go-radio-button label="Option #2" formValue="option2"></go-radio-button>
</go-radio-group>
  `;

  cssCheckboxDefault: FormGroup = new FormGroup({
    option1: new FormControl(true),
    option2: new FormControl(false)
  });

  cssCheckboxDisabled: FormGroup = new FormGroup({
    option1: new FormControl(true),
    option2: new FormControl(false)
  });

  cssCheckboxError: FormGroup = new FormGroup({
    option1: new FormControl(false, Validators.requiredTrue)
  });

  cssCheckboxDark: FormGroup = new FormGroup({
    option1: new FormControl(true),
    option2: new FormControl(false)
  });

  cssRadioDefault: FormControl = new FormControl('option1');
  cssRadioDisabled: FormControl = new FormControl('option1');
  cssRadioError: FormControl = new FormControl(null, Validators.required);
  cssRadioDark: FormControl = new FormControl('option1');

  themeSelect: FormControl = new FormControl('light');

  hpCharacters: string[] = [
    'Harry',
    'Ron',
    'Hermione',
    'Dumbledore',
    'Snape',
    'Voldemort'
  ];

  maxBirthDate: Date = new Date();

  validationsExControl: FormControl = new FormControl();
  validationsEx: string = `
  school: FormControl = new FormControl();

  this.school.valueChanges.subscribe((v: string) => {
    if (v !== 'Hogwarts' && v.length > 0) {
      this.school.setErrors({ invalid: 'School must be Hogwarts.' });
    } else {
      this.school.setErrors(null);
    }
  });
  `;

  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    bio: new FormControl(),
    birthday: new FormControl(),
    birthtime: new FormControl(),
    picture: new FormControl(),
    favoriteCharacter: new FormControl(),
    enableNotifications: new FormControl(true),
    notificationMethod: new FormControl(null, Validators.required),
    notificationsReceived: new FormGroup({
      comments: new FormControl(true),
      mentions: new FormControl(true)
    })
  });

  constructor(
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Forms Overview';
    this.subNavService.linkToSource =
      'https://github.com/mobi/goponents/tree/dev/projects/go-style-guide/src/app/features/ui-kit/components/form-docs/components/forms-overview';
    this.maxBirthDate.setDate(this.maxBirthDate.getDate() - 1);
    this.cssCheckboxDisabled.disable();
    this.cssCheckboxError.get('option1').markAsTouched();
    this.cssRadioDisabled.disable();
    this.cssRadioError.markAsTouched();
    this.validationsExControl.valueChanges.subscribe((v: string) => {
      if (v !== 'Hogwarts' && v.length > 0) {
        this.validationsExControl.setErrors({ school: 'School must be Hogwarts.' });
      } else {
        this.validationsExControl.setErrors(null);
      }
    });
  }
}
