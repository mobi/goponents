import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './text-area-docs.component.html'
})
export class TextAreaDocsComponent implements OnInit {
  message: FormControl = new FormControl('');
  message2: FormControl = new FormControl('');
  message3: FormControl = new FormControl('');
  message4: FormControl = new FormControl('');
  message5: FormControl = new FormControl('');
  message6: FormControl = new FormControl({ value: '', disabled: true });
  message7: FormControl = new FormControl('');
  message8: FormControl = new FormControl('');
  message9: FormControl = new FormControl('');
  message10: FormControl = new FormControl('');

  hints: Array<string> = [
    'Please type your message here',
    'This is a second hint for no reason'
  ];

  basicExample: string = `
  <go-text-area [control]="message">
  </go-text-area>
  `;

  basicLabelExample: string = `
  <go-text-area
    [control]="message"
    label="Your Message">
  </go-text-area>
  `;

  basicKeyExample: string = `
  <go-text-area
    [control]="message"
    label="Your Message"
    key="your-message-input">
  </go-text-area>
  `;

  basicKeyExampleOutput: string = `
  <label for="your-message-input">Your Name</label>
  <textarea type="text" id="your-message-input" [formControl]="message"></textarea>
  `;

  basicHintsTemplate: string = `
  hints: Array<string> = [
    'Please type your message here',
    'This is a second hint for no reason'
  ];
  `;

  basicHintsExample: string = `
  <go-text-area
    label="Your Message"
    [control]="message"
    [hints]="hints">
  </go-text-area>
  `;

  basicErrorsTemplate: string = `
  this.message.setErrors([
    {
      message: 'An error occurred.'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;

  basicDisabledExample: string = `
  message: new FormControl({
    value: '',
    disabled: true
  });
  `;

  basicDisabledExample2: string = `
  otherMessage: new FormControl('');

  ngOnInit(): void {
    this.otherMessage.disable();
    // Use this.otherMessage.enable(); to re-enable the input.
  }
  `;

  basicPlaceholderExample: string = `
  <go-text-area
    [control]="message"
    label="Your Message"
    placeholder="Tell us a little bit about yourself.">
  </go-text-area>
  `;

  basicRowsExample: string = `
  <go-text-area
    [control]="message"
    label="Your Message"
    rows="5">
  </go-text-area>
  `;

  basicMaxLengthExample: string = `
  <go-text-area
    [control]="message"
    label="Your Message"
    maxlength="10">
  </go-text-area>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Textarea';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-text-area';
  }

  ngOnInit(): void {
    setTimeout((): void => {
      this.message5.setErrors([
        {
          message: 'An error occurred.'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);

      this.message7.disable();
    });
  }
}
