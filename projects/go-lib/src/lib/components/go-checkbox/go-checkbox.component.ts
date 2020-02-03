import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-checkbox',
  templateUrl: './go-checkbox.component.html'
})
export class GoCheckboxComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() disabled: boolean = false;
  @Input() hints: string[];
  @Input() key: string;
  @Input() label: string;
  @Input() theme: string = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'checkbox');
  }
}
