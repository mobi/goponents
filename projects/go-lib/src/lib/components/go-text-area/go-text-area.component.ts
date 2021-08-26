import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-text-area',
  templateUrl: './go-text-area.component.html'
})
export class GoTextAreaComponent implements OnInit {
  id: string;

  @Input() control: FormControl | AbstractControl;
  @Input() key: string;
  @Input() hints: Array<string>;
  @Input() label: string;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() placeholder: string = '';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() rows: number;

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'text-area');

    this.validateMinMax();
  }

  private validateMinMax(): void {
    if (this.maxlength && this.minlength && this.minlength > this.maxlength) {
      this.minlength = 0;
    }
  }
}
