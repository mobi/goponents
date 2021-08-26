import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ValidationErrors } from '@angular/forms';

import { GoFormErrorsComponent } from './go-form-errors.component';

describe('GoFormErrorsComponent', () => {
  let component: GoFormErrorsComponent;
  let fixture: ComponentFixture<GoFormErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFormErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('errors', () => {
    it('should return the errors for the control', () => {
      const errors: ValidationErrors = { school: 'Must be Hogwarts' };
      component.control = new FormControl(null);
      component.control.setErrors(errors);

      expect(component.errors).toBe(errors);
    });
  });
});
