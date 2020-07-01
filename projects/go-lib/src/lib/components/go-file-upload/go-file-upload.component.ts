import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

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
    this.id = this.key || generateId(this.label, 'file-upload');
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
    const files: File[] = evt.dataTransfer ? evt.dataTransfer.files : evt.target.files;

    if (files.length > 0) {
      if (!this.multiple) {
        this.files.reset();
        this.filePreview = [];
        this.state = 'selected';
      }

      Array.from(files).forEach((file: any) => {
        this.files.push(this.patchValues(file));
        this.filePreview.push(file.name);
      });
    }
  }

  removeFile(index: number): void {
    this.files.removeAt(index);
    this.filePreview.splice(index, 1);
    if (this.state === 'selected') {
      this.state = 'selecting';
    }
  }

  onDragOver(): void {
    if (!this.isLoading) {
      this.state = 'selecting';
    }
  }

  onDragLeave(): void {
    if (this.files.length) {
      this.state = 'selected';
    }
  }

  reset(): void {
    this.files.reset();
    this.filePreview = [];
    this.isLoading = false;
    this.state = 'selecting';
  }

  private patchValues(file: any): AbstractControl {
    return this.fb.group({
      file: [file]
    });
  }
}
