import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'go-file-upload',
  templateUrl: './go-file-upload.component.html',
  styleUrls: ['./go-file-upload.component.scss']
})
export class GoFileUploadComponent implements OnInit {
  form: FormGroup;
  files: FormArray;
  fb: FormBuilder;
  filePreview: Array<string> = [];

  @Input() buttonIcon: string;
  @Input() control: FormControl;
  @Input() buttonVariant: string;
  @Input() label: string;
  @Input() hints: Array<string> = [];

  @ViewChild('filePicker') filePicker: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.fb = new FormBuilder();
    this.form = this.fb.group({
      filesArray: this.fb.array([])
    });
    this.files = <FormArray>this.form.controls['filesArray'];
    this.files.valueChanges.subscribe( (fileChanges: any) => {
      this.control.setValue(fileChanges);
    });
  }

  onFilePicked(): void {
    Array.from(this.filePicker.nativeElement.files).forEach((file: any) => {
      this.files.push(this.patchValues(file));
      this.filePreview.push(file.name);
    });
  }

  removeFile(index: number): void {
    this.files.removeAt(index);
    this.filePreview.splice(index, 1);
  }

  private patchValues(file: any): AbstractControl {
    return this.fb.group({
      file: [file]
    });
  }

}
