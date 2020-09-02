import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { generateId } from '../../utilities/form.utils';

@Component({
  selector: 'go-switch-toggle',
  templateUrl: './go-switch-toggle.component.html',
  styleUrls: ['./go-switch-toggle.component.scss']
})
export class GoSwitchToggleComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() disabled: boolean = false;
  @Input() key: string;
  @Input() hints: string[];
  @Input() label: string;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'toggle');
  }

  toggle(): void {
    if (!this.disabled) {
      this.control.setValue(!this.control.value);
    }
  }
}
