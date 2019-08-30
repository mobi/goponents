import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'go-file-upload',
  templateUrl: './go-file-upload.component.html',
  styleUrls: ['./go-file-upload.component.scss']
})
export class GoFileUploadComponent implements OnInit {

  form: FormGroup;
  control: FormArray;
  fb: FormBuilder;
  filePreview: string;
  hints: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.fb = new FormBuilder();
    this.form = this.fb.group({
      filesArray: this.fb.array([])
    });
    this.control = <FormArray>this.form.controls['filesArray'];
  }

  onFilePicked(event: Event): void {
    event.target.files.forEach((file: any) => {
      this.control.push(this.patchValues(file));
      debugger;
    });
  }

  private patchValues(file: any): AbstractControl {
    return this.fb.group({
      file: [file]
    });
  }

}
