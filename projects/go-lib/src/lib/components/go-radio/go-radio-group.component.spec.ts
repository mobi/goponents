import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRadioGroupComponent } from './go-radio-group.component';
import { GoRadioButtonComponent } from './go-radio-button.component';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

@Component({
  selector: 'go-test',
  template: `
    <go-radio-group label="Options" [control]="radioControl">
      <div>
        <go-radio-button label="Option 1" formValue="option1"></go-radio-button>
      </div>
      <div>
        <go-radio-button label="Option 2" formValue="option2"></go-radio-button>
      </div>
    </go-radio-group>
  `
})
class GoTestRadioGroupComponent {
  radioControl: FormControl = new FormControl('');
}

describe('GoRadioGroupComponent', () => {
  let component: GoRadioGroupComponent;
  let fixture: ComponentFixture<GoTestRadioGroupComponent>;
  let buttonOne: GoRadioButtonComponent;
  let buttonTwo: GoRadioButtonComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoRadioButtonComponent, GoRadioGroupComponent, GoTestRadioGroupComponent],
      imports: [
        FormsModule,
        GoHintModule,
        GoRequiredTextModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestRadioGroupComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();

    const buttonArray: GoRadioButtonComponent[] = component.radioButtons.toArray();
    buttonOne = buttonArray[0];
    buttonTwo = buttonArray[1];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterContentChecked', () => {
    beforeEach(() => {
      buttonOne.theme = null;
      buttonTwo.theme = null;
      buttonOne.control = null;
      buttonTwo.control = null;
      buttonOne.name = null;
      buttonTwo.name = null;
      component.radioButtonCount = 0;
    });

    it('should set a theme on each child component', () => {
      component.theme = 'dark';
      component.ngAfterContentChecked();

      expect(buttonOne.theme).toBe('dark');
      expect(buttonTwo.theme).toBe('dark');
    });

    it('should set a name on each child component when legend is provided', () => {
      component.legend = 'Random Name';
      component.ngAfterContentChecked();

      expect(buttonOne.name).toContain('Random-Name-');
      expect(buttonTwo.name).toContain('Random-Name-');
    });

    it('should set a name on each child component when legend is NOT provided', () => {
      component.legend = undefined;
      component.ngAfterContentChecked();

      expect(buttonOne.name).toContain('radio-group-');
      expect(buttonTwo.name).toContain('radio-group-');
    });

    it('should set a control on each child component', () => {
      const newControl: FormControl = new FormControl('option1');

      component.control = newControl;
      component.ngAfterContentChecked();

      expect(buttonOne.control).toBe(newControl);
      expect(buttonTwo.control).toBe(newControl);
    });
  });
});
