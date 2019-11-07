import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFileUploadComponent } from './go-file-upload.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormGroup, FormControl } from '@angular/forms';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { createHostListener } from '@angular/compiler/src/core';

describe('GoFileUploadComponent', () => {
  let component: GoFileUploadComponent;
  let fixture: ComponentFixture<GoFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoFileUploadComponent],
      imports: [
        CommonModule,
        FormsModule,
        GoButtonModule,
        GoHintModule,
        GoIconModule,
        GoIconButtonModule,
        GoLoaderModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFileUploadComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('removeFile', () => {
    beforeEach(() => {
      const file: FormGroup = new FormGroup({
        file: new FormControl('whatever')
      });
      component.files = new FormArray([file]);
      component.filePreview = ['whatever'];
    });

    it('should set state to selecting if it was previously selected', () => {
      component.state = 'selected';
      component.removeFile(0);
      expect(component.state).toBe('selecting');
    });

    it('should not change the state if the state was selecting', () => {
      component.state = 'selecting';
      component.removeFile(0);
      expect(component.state).toBe('selecting');
    });

    it('should remove the file at the given index from the form control', () => {
      component.removeFile(0);
      expect(component.control.value.length).toBe(0);
    });

    it('should remove the file at the given index from our file Preview Array', () => {
      component.removeFile(0);
      expect(component.filePreview.length).toBe(0);
    });
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      component.id = undefined;
    });

    it('sets the id of the input to `key` if one is passed in', () => {
      expect(component.id).toBeUndefined();

      component.key = 'a-specific-id';
      component.ngOnInit();

      expect(component.id).toBe(component.key);
    });

    it('generates a semi-random id based on the label if key is undefined', () => {
      expect(component.key).toBeUndefined();
      expect(component.id).toBeUndefined();

      component.label = 'test label';
      component.ngOnInit();

      expect(component.id).toBeDefined();
      expect(component.id).toContain('test-label-');
    });

    it('generates a semi-random id if a label and key are undefined', () => {
      expect(component.key).toBeUndefined();
      expect(component.label).toBeUndefined();
      expect(component.id).toBeUndefined();

      component.ngOnInit();

      expect(component.id).toBeDefined();
      expect(component.id).toContain('file-upload-');
    });
  });

  describe('onFilePicked', () => {
    const files: Object[] = [{
      id: 1,
      name: 'file'
    }];

    afterEach(() => {
      component.files = component.fb.array([]);
      component.filePreview = [];
    });

    it('doesn\'t error when dropping a file', () => {
      component.onFilePicked({
        dataTransfer: {
          files: files
        }
      });

      expect(component.files.length).toBe(1);
      expect(component.filePreview.length).toBe(1);
      expect(component.filePreview[0]).toBe('file');
    });

    it('doesn\t error when clicking on the file upload', () => {
      component.onFilePicked({
        target: {
          files: files
        }
      });

      expect(component.files.length).toBe(1);
      expect(component.filePreview.length).toBe(1);
      expect(component.filePreview[0]).toBe('file');
    });
  });
});
