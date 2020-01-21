import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoCheckboxGroupComponent } from './go-checkbox-group.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoCheckboxComponent } from './go-checkbox.component';
import { Component } from '@angular/core';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

@Component({
  selector: 'go-test',
  template: `
    <go-checkbox-group label="Options" [control]="checkboxForm">
      <div>
        <go-checkbox label="Option 1" [control]="checkboxForm.controls.option1"></go-checkbox>
      </div>
      <div>
        <go-checkbox label="Option 2" [control]="checkboxForm.controls.option2"></go-checkbox>
      </div>
    </go-checkbox-group>
  `
})
class GoTestCheckboxGroupComponent {
  checkboxForm: FormGroup = new FormGroup({
    option1: new FormControl(''),
    option2: new FormControl('')
  });
}

describe('GoCheckboxGroupComponent', () => {
  let checkboxOne: GoCheckboxComponent;
  let checkboxTwo: GoCheckboxComponent;
  let component: GoCheckboxGroupComponent;
  let fixture: ComponentFixture<GoTestCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoCheckboxGroupComponent, GoCheckboxComponent, GoTestCheckboxGroupComponent],
      imports: [
        GoHintModule,
        GoRequiredTextModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestCheckboxGroupComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();

    const checkboxArray: GoCheckboxComponent[] = component.checkboxes.toArray();
    checkboxOne = checkboxArray[0];
    checkboxTwo = checkboxArray[1];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterContentInit', () => {
    beforeEach(() => {
      checkboxOne.theme = null;
      checkboxTwo.theme = null;
    });

    it('should set a theme on each child component', () => {
      component.theme = 'dark';
      component.ngAfterContentInit();

      expect(checkboxOne.theme).toBe('dark');
      expect(checkboxTwo.theme).toBe('dark');
    });
  });
});
