import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoFormErrorsModule } from "../go-form-errors/go-form-errors.module";
import { GoHintModule } from "../go-hint/go-hint.module";
import { GoRequiredTextModule } from "../go-required-text/go-required-text.module";
import { GoCheckboxComponent } from "./go-checkbox.component";
import { By } from "@angular/platform-browser";

describe("GoCheckboxComponent", () => {
  let component: GoCheckboxComponent;
  let fixture: ComponentFixture<GoCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoCheckboxComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        GoFormErrorsModule,
        GoHintModule,
        GoRequiredTextModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCheckboxComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngAfterViewInit", () => {
    it("sets the hidden input to indeterminate if indeterminate input is true", () => {
      expect(component.hiddenInputRef.nativeElement.indeterminate).toBe(false);

      component.indeterminate = true;

      component.ngAfterViewInit();

      expect(component.hiddenInputRef.nativeElement.indeterminate).toBe(true);
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
