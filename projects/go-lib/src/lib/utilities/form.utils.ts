import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


export function requiredValidatorExists(control: FormControl): boolean | void {
  if (control.validator) {
    const validator: ValidationErrors = control.validator({} as AbstractControl);
    if (validator && validator.required) {
      return true;
    }
  }
}

export function generateId(label: string, inputType: string): string {
  const labelText: string = label || inputType;
  const idArray: Array<string> = labelText.split(' ');

  // NOTE: There is a chance that this number is not unique.
  idArray.push(String(Math.round(Math.random() * 1000000)));

  return idArray.join('-');
}
