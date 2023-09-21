import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { GoCheckboxGroupComponent } from "./go-checkbox-group.component";
import { GoHintModule } from "../go-hint/go-hint.module";
import { GoCheckboxComponent } from "./go-checkbox.component";
import { Component } from "@angular/core";
import { GoRequiredTextModule } from "../go-required-text/go-required-text.module";
import { GoFormErrorsModule } from "../go-form-errors/go-form-errors.module";
import { By } from "@angular/platform-browser";

@Component({
  selector: "go-test",
  template: `
    <go-checkbox-group label="Options" [control]="checkboxForm">
      <div>
        <go-checkbox
          label="Option 1"
          [control]="checkboxForm.controls.option1"
          [hideFieldError]="true"
        ></go-checkbox>
      </div>
      <div>
        <go-checkbox
          label="Option 2"
          [control]="checkboxForm.controls.option2"
          [hideFieldError]="true"
        ></go-checkbox>
      </div>
    </go-checkbox-group>
  `,
})
class GoTestCheckboxGroupComponent {
  checkboxForm: FormGroup = new FormGroup({
    option1: new FormControl(""),
    option2: new FormControl(""),
  });
}

describe("GoCheckboxGroupComponent", () => {
  let checkboxOne: GoCheckboxComponent;
  let checkboxTwo: GoCheckboxComponent;
  let component: GoCheckboxGroupComponent;
  let fixture: ComponentFixture<GoTestCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoCheckboxGroupComponent,
        GoCheckboxComponent,
        GoTestCheckboxGroupComponent,
      ],
      imports: [
        GoFormErrorsModule,
        GoHintModule,
        GoRequiredTextModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestCheckboxGroupComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();

    const checkboxArray: GoCheckboxComponent[] = component.checkboxes.toArray();
    checkboxOne = checkboxArray[0];
    checkboxTwo = checkboxArray[1];
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngAfterContentInit", () => {
    beforeEach(() => {
      checkboxOne.theme = null;
      checkboxTwo.theme = null;
    });

    it("should set a theme on each child component", () => {
      component.theme = "dark";
      component.ngAfterContentInit();

      expect(checkboxOne.theme).toBe("dark");
      expect(checkboxTwo.theme).toBe("dark");
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
