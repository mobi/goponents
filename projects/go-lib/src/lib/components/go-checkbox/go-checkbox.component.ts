import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-checkbox',
  templateUrl: './go-checkbox.component.html'
})
export class GoCheckboxComponent {
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() label: string;
  @Input() theme: string = 'light';

  constructor() { }
}
