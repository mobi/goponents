import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-radio-button',
  styleUrls: ['./go-radio-button.component.scss'],
  templateUrl: './go-radio-button.component.html'
})
export class GoRadioButtonComponent implements OnInit {
  id: string;
  control: FormControl;
  theme: string;
  name: string;

  @Input() formValue: string;
  @Input() label: string;
  @Input() key: string;

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'radio');
  }
}
