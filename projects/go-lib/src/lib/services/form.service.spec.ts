import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { GoFormService } from './form.service';

describe('GoFormService', () => {
  let service: GoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('baseInputClasses', () => {
    const errorClass: string = 'go-form__input--error';
    const themeClass: string = 'go-form__input--dark';

    describe(errorClass, () => {
      it('returns when control is invalid && control is touched', () => {
        const control: FormControl = new FormControl(null, Validators.required);
        control.markAsTouched();

        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'light');
        expect(result[errorClass]).toBeTruthy();
      });

      it('does not return when control is valid && control is touched', () => {
        const control: FormControl = new FormControl('Hogwarts', Validators.required);
        control.markAsTouched();

        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });

      it('does not return when control is invalid && control is untouched', () => {
        const control: FormControl = new FormControl(null, Validators.required);

        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });

      it('does not return when control is valid && control is untouched', () => {
        const control: FormControl = new FormControl('Hogwarts', Validators.required);

        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });
    });

    describe(themeClass, () => {
      const control: FormControl = new FormControl();

      it('return when theme is "dark"', () => {
        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'dark');
        expect(result[themeClass]).toBeTruthy();
      });

      it('does not return when theme is "light"', () => {
        const result: { [k: string]: boolean; } = service.baseInputClasses(control, 'light');
        expect(result[themeClass]).toBeFalsy();
      });
    });
  });

  describe('baseFieldsetClasses', () => {
    const errorClass: string = 'go-form__fieldset--error';
    const themeClass: string = 'go-form__fieldset--dark';

    describe(errorClass, () => {
      it('returns when control is invalid && control is touched', () => {
        const control: FormControl = new FormControl(null, Validators.required);
        control.markAsTouched();

        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'light');
        expect(result[errorClass]).toBeTruthy();
      });

      it('does not return when control is valid && control is touched', () => {
        const control: FormControl = new FormControl('Hogwarts', Validators.required);
        control.markAsTouched();

        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });

      it('does not return when control is invalid && control is untouched', () => {
        const control: FormControl = new FormControl(null, Validators.required);

        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });

      it('does not return when control is valid && control is untouched', () => {
        const control: FormControl = new FormControl('Hogwarts', Validators.required);

        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'light');
        expect(result[errorClass]).toBeFalsy();
      });
    });

    describe(themeClass, () => {
      const control: FormControl = new FormControl();

      it('return when theme is "dark"', () => {
        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'dark');
        expect(result[themeClass]).toBeTruthy();
      });

      it('does not return when theme is "light"', () => {
        const result: { [k: string]: boolean; } = service.baseFieldsetClasses(control, 'light');
        expect(result[themeClass]).toBeFalsy();
      });
    });
  });

  describe('generateId', () => {
    it('returns a string with the label prefix and a random number under 1000000', () => {
      const result: string = service.generateId('Hogwarts', 'text');
      const resultArr: string[] = result.split('-');

      expect(resultArr[0]).toBe('Hogwarts');
      expect(Number(resultArr[1])).toBeLessThan(1000001);
    });

    it('returns a string with the inputType prefix if label is null and a random number under 1000000', () => {
      const result: string = service.generateId(null, 'text');
      const resultArr: string[] = result.split('-');

      expect(resultArr[0]).toBe('text');
      expect(Number(resultArr[1])).toBeLessThan(1000001);
    });
  });

  describe('requiredValidatorExists', () => {
    it('returns true if "required" Validator exists on control', () => {
      const control: FormControl = new FormControl(null, Validators.required);
      const result: boolean = service.requiredValidatorExists(control);
      expect(result).toBeTruthy();
    });

    it('returns false if "required" Validator does not exist on control', () => {
      const control: FormControl = new FormControl();
      const result: boolean = service.requiredValidatorExists(control);
      expect(result).toBeFalsy();
    });
  });
});
