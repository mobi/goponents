import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html',
  styleUrls: ['./go-input.component.scss']
})
export class GoInputComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() key: string;
  @Input() maxlength: number = 524288;
  @Input() minlength: number = 0;
  @Input() hints: string[];
  @Input() inputType: string = 'text';
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'input');

    if (this.minlength > this.maxlength) {
      this.minlength = 0;
    }

    if (this.maxlength > 524288) {
      this.maxlength = 524288
    }
  }
}
