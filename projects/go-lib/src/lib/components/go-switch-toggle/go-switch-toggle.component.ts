import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-switch-toggle',
  templateUrl: './go-switch-toggle.component.html',
  styleUrls: ['./go-switch-toggle.component.scss']
})
export class GoSwitchToggleComponent {
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() label: string;
  @Input() theme: string = 'light';

  constructor() { }

  toggle(): void {
    this.control.setValue(!this.control.value);
  }
}
