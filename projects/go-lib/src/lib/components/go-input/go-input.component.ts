import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html'
})
export class GoInputComponent implements OnInit {

  @Input() controlName: string;
  @Input() errors: string[];
  @Input() errorStatus: string = 'Error:';
  @Input() hints: string[];
  @Input() inputDisabled: boolean;
  @Input() inputType: string = 'text';
  @Input() label: string;
  @Input() parentFormGroup: FormGroup;
  @Input() placeholder: string = '';
  @Input() theme: string = 'light';

  constructor() { }

  ngOnInit(): void {
    if (!this.controlName) {
      throw new Error('GoInput: controlName is a required Input');
    }
    if (!this.parentFormGroup) {
      throw new Error('GoInput: parentFormGroup is a required Input');
    }
  }

  controlIsValid(): boolean {
    return !this.parentFormGroup.get(this.controlName).invalid;
  }
}
