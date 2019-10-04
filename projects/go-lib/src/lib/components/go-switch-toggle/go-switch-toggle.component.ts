import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-switch-toggle',
  templateUrl: './go-switch-toggle.component.html',
  styleUrls: ['./go-switch-toggle.component.scss']
})
export class GoSwitchToggleComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() key: string;
  @Input() hints: string[];
  @Input() label: string;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  toggle(): void {
    this.control.setValue(!this.control.value);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'toggle';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
