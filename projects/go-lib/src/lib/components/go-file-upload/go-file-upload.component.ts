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
  id: string;

  @Input() control: FormControl;
  @Input() hints: Array<string> = [];
  @Input() isLoading: boolean = false;
  @Input() key: string;
  @Input() label: string;
  @Input() multiple: boolean = false;
  @Input() state: 'selecting' | 'selected' = 'selecting';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
    this.fb = new FormBuilder();
    this.form = this.fb.group({
      filesArray: this.fb.array([])
    });
    this.files = <FormArray>this.form.controls['filesArray'];
    this.files.valueChanges.subscribe( (fileChanges: any) => {
      this.control.setValue(fileChanges);
    });
  }

  onFilePicked(evt: any): void {
    const files: File[] = evt.dataTransfer.files;
    if (files.length > 0) {
      Array.from(files).forEach((file: any) => {
        this.files.push(this.patchValues(file));
        this.filePreview.push(file.name);
      });
      if (!this.multiple) {
        this.state = 'selected';
      }
    }
  }

  removeFile(index: number): void {
    this.files.removeAt(index);
    this.filePreview.splice(index, 1);
    if (this.state === 'selected') {
      this.state = 'selecting';
    }
  }

  private patchValues(file: any): AbstractControl {
    return this.fb.group({
      file: [file]
    });
  }

  private generateId(label: string): string {
    const labelText: string = label || 'file-upload';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
