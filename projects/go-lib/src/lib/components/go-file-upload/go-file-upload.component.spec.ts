import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GoFileUploadComponent } from "./go-file-upload.component";
import { CommonModule } from "@angular/common";
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { GoButtonModule } from "../go-button/go-button.module";
import { GoHintModule } from "../go-hint/go-hint.module";
import { GoIconButtonModule } from "../go-icon-button/go-icon-button.module";
import { GoIconModule } from "../go-icon/go-icon.module";
import { GoLoaderModule } from "../go-loader/go-loader.module";
import { GoRequiredTextModule } from "../go-required-text/go-required-text.module";
import { GoFormErrorsModule } from "../go-form-errors/go-form-errors.module";
import { By } from "@angular/platform-browser";

describe("GoFileUploadComponent", () => {
  let component: GoFileUploadComponent;
  let fixture: ComponentFixture<GoFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoFileUploadComponent],
      imports: [
        CommonModule,
        FormsModule,
        GoFormErrorsModule,
        GoButtonModule,
        GoHintModule,
        GoIconModule,
        GoIconButtonModule,
        GoLoaderModule,
        GoRequiredTextModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFileUploadComponent);
    component = fixture.componentInstance;
    component.control = new FormControl("");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onDragOver", () => {
    it('should set state to "selecting" if it\'s not loading', () => {
      component.state = "selected";
      component.isLoading = false;

      component.onDragOver();

      expect(component.state).toEqual("selecting");
    });
  });

  describe("onDragLeave", () => {
    it('should set state to "selected" if any files are uploaded', () => {
      const file: FormGroup = new FormGroup({
        file: new FormControl("whatever"),
      });

      component.files = new FormArray([file]);
      component.state = "selecting";

      component.onDragLeave();

      expect(component.state).toEqual("selected");
    });
  });

  describe("reset", () => {
    it("calls clear on files", () => {
      spyOn(component.files, "clear").and.callThrough();

      component.reset();

      expect(component.files.clear).toHaveBeenCalled();
    });

    it("sets filePreview to empty array", () => {
      component.filePreview = ["whatever"];

      component.reset();

      expect(component.filePreview).toEqual([]);
    });

    it("sets isLoading to false", () => {
      component.isLoading = true;

      component.reset();

      expect(component.isLoading).toBeFalsy();
    });

    it('sets state to "selecting"', () => {
      component.state = "selected";

      component.reset();

      expect(component.state).toEqual("selecting");
    });
  });

  describe("removeFile", () => {
    beforeEach(() => {
      const file: FormGroup = new FormGroup({
        file: new FormControl("whatever"),
      });
      component.files = new FormArray([file]);
      component.filePreview = ["whatever"];
    });

    it("should set state to selecting if it was previously selected", () => {
      component.state = "selected";
      component.removeFile(0);
      expect(component.state).toBe("selecting");
    });

    it("should not change the state if the state was selecting", () => {
      component.state = "selecting";
      component.removeFile(0);
      expect(component.state).toBe("selecting");
    });

    it("should remove the file at the given index from the form control", () => {
      component.removeFile(0);
      expect(component.control.value.length).toBe(0);
    });

    it("should remove the file at the given index from our file Preview Array", () => {
      component.removeFile(0);
      expect(component.filePreview.length).toBe(0);
    });
  });

  describe("onFilePicked", () => {
    const files: Object[] = [
      {
        id: 1,
        name: "file",
      },
    ];

    afterEach(() => {
      component.files = component.fb.array([]);
      component.filePreview = [];
    });

    it("doesn't error when dropping a file", () => {
      component.onFilePicked({
        dataTransfer: {
          files: files,
        },
      });

      expect(component.files.length).toBe(1);
      expect(component.filePreview.length).toBe(1);
      expect(component.filePreview[0]).toBe("file");
    });

    it("doesn\t error when clicking on the file upload", () => {
      component.onFilePicked({
        target: {
          files: files,
        },
      });

      expect(component.files.length).toBe(1);
      expect(component.filePreview.length).toBe(1);
      expect(component.filePreview[0]).toBe("file");
    });
  });
  it("component should not render go-form-errors if hideFieldError property is true ", () => {
    component.hideFieldError = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(0);
  });
  it("component should render go-form-errors if hideFieldError property is false ", () => {
    component.hideFieldError = false;
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(1);
  });
  it("component should render go-form-errors if hideFieldError is not set ", () => {
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(1);
  });
});
