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
      'https://github.com/mobi/goponents/tree/dev/projects/go-style-guide/src/app/features/standards/components/forms';
    this.maxBirthDate.setDate(this.maxBirthDate.getDate() - 1);
    this.validationsExControl.valueChanges.subscribe((v: string) => {
      if (v !== 'Hogwarts' && v.length > 0) {
        this.validationsExControl.setErrors({ school: 'School must be Hogwarts.' });
      } else {
        this.validationsExControl.setErrors(null);
      }
    });
  }
}
