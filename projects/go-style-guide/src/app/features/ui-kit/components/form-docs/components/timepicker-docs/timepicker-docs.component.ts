import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './timepicker-docs.component.html'
})
export class TimepickerDocsComponent implements OnInit {

    time: FormControl = new FormControl('18:15:00');
    time2: FormControl = new FormControl();
    time3: FormControl = new FormControl();
    time4: FormControl = new FormControl();
    time5: FormControl = new FormControl();
    time6: FormControl = new FormControl();
    time7: FormControl = new FormControl();

    hints: Array<string> = [
      'Please enter your time',
      'This is a second hint for no reason'
    ];

    basicInputExample: string = `
    <go-timepicker [control]="time"></go-timepicker>
    `;

    basicInputExampleComponent: string = `
    time: FormControl = new FormControl('18:15:00');
    `;

    basicInputLabelExample: string = `
    <go-timepicker [control]="time"></go-timepicker>
    `;

    basicInputKeyExample: string = `
    <go-timepicker [control]="time" label="Select Time" key="your-name-input"></go-timepicker>
    `;

    basicInputKeyExampleOutput: string = `
    <label for="your-name-input">Your Name</label>
    <input type="text" id="your-name-input" [formControl]="time">
    `;

    basicHintsTemplate: string = `
    hints: Array<string> = [
      'Please enter your time',
      'This is a second hint for no reason'
    ];
    `;

    basicInputHintsExample: string = `
    <go-timepicker
      label="Select Time"
      [control]="time"
      [hints]="hints">
    </go-timepicker>
    `;

    basicErrorsTemplate: string = `
    this.time.setErrors([
      {
        message: 'This time is invalid'
      },
      {
        type: 'Required',
        message: 'This is a required input.'
      }
    ]);
    `;

    basicDisabledExample: string = `
    startTime: new FormControl({
      value: '',
      disabled: true
    });
    `;

    basicDisabledExample2: string = `
    endTime: new FormControl('');

    ngOnInit(): void {
      this.endTime.disable();
      // Use this.endTime.enable(); to re-enable the input.
    }
    `;

    basicPlaceholderExample: string = `
    <go-timepicker
      [control]="time"
      label="Select Time"
      placeholder="10:00 AM">
    </go-timepicker>
    `;

    constructor(private subNavService: SubNavService) {
        this.subNavService.pageTitle = 'Timepicker';
        this.subNavService.linkToSource = '';
    }
    ngOnInit(): void {
      setTimeout((): void => {
        this.time4.setErrors([
          {
            message: 'This time is invalid'
          },
          {
            type: 'Required',
            message: 'This is a required input.'
          }
        ]);
        this.time5.disable();
        this.time6.disable();
      }, 500);
    }
}
