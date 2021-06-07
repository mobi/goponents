import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubNavService } from '../../../../../../shared/components/sub-nav/sub-nav.service';
import { GoFileUploadComponent } from 'projects/go-lib/src/lib/components/go-file-upload/go-file-upload.component';

@Component({
  selector: 'app-file-upload-docs',
  templateUrl: './file-upload-docs.component.html'
})
export class FileUploadDocsComponent implements OnInit {
  fileControl: FormControl = new FormControl('');
  fileControl2: FormControl = new FormControl('');
  fileControl3: FormControl = new FormControl('');
  fileControl4: FormControl = new FormControl('');
  fileControl5: FormControl = new FormControl('');
  fileControl6: FormControl = new FormControl('');
  fileControl7: FormControl = new FormControl('');
  fileControl8: FormControl = new FormControl('');
  fileControl9: FormControl = new FormControl();

  hints: Array<string> = [
    'Please upload your best picture',
    'The absolute most awesome picture'
  ];

  basicExample: string = `
  <go-file-upload [control]="fileControl">
  </go-file-upload>
  `;

  basicLabelExample: string = `
  <go-file-upload
    [control]="fileControl"
    label="Most Awesome Picture">
  </go-file-upload>
  `;

  basicKeyExample: string = `
  <go-file-upload
    [control]="fileControl"
    label="Most Awesome Picture"
    key="most-awesome-picture">
  </go-file-upload>
  `;

  basicKeyExampleOutput: string = `
  <label for="most-awesome-picture">Most Awesome Picture</label>
  <input type="file" id="most-awesome-picture">
  `;

  basicHintsTemplate: string = `
  hints: Array<string> = [
    'Please upload your best picture',
    'The absolute most awesome picture'
  ];
  `;

  basicHintsExample: string = `
  <go-file-upload
    [control]="fileControl"
    label="Most Awesome Picture"
    [hints]="hints">
  </go-file-upload>
  `;

  basicErrorsExample: string = `
  this.fileControl.setErrors([
    {
      message: 'An error occurred.'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;

  basicMultipleExample: string = `
  <go-file-upload
    [control]="fileControl5"
    label="Most Awesome Pictures"
    [multiple]="true">
  </go-file-upload>
  `;

  basicResetExample_html: string = `
  <go-file-upload
    [control]="fileControl9"
    label="Most Awesome Pictures"
    #fileUploadReset>
  </go-file-upload>

  <go-button
    (handleClick)="resetFileUpload()">
    Reset
  </go-button>
  `;

  basicResetExample_ts: string = `
  @ViewChild('fileUploadReset', { static: false }) fileUploadReset: GoFileUploadComponent;

  resetFileUpload(): void {
    this.fileUploadReset.reset();
  }
  `;

  basicLoadingExample: string = `
  <go-file-upload
    [control]="fileControl"
    label="Most Awesome Pictures"
    [isLoading]="true">
  </go-file-upload>
  `;

  basicThemeExample: string = `
  <go-file-upload
    [control]="fileControl"
    label="Most Awesome Pictures"
    theme="dark">
  </go-file-upload>
  `;

  @ViewChild('fileUploadReset') fileUploadReset: GoFileUploadComponent;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'File Upload';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-file-upload';
  }

  ngOnInit(): void {
    setTimeout((): void => {
      this.fileControl5.setErrors([
        {
          message: 'An error occurred.'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);
    }, 500);
  }

  resetFileUpload(): void {
    this.fileUploadReset.reset();
  }
}
