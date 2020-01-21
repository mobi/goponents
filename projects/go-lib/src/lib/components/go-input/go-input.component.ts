import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html'
})
export class GoInputComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() key: string;
  @Input() hints: string[];
  @Input() inputType: string = 'text';
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'input');
  }
}
