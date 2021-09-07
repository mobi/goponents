import { Component, Input, OnInit } from '@angular/core';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-switch-toggle',
  templateUrl: './go-switch-toggle.component.html',
  styleUrls: ['./go-switch-toggle.component.scss']
})
export class GoSwitchToggleComponent extends GoFormBaseComponent {

  @Input() labelPosition: 'before' | 'after' = 'after';

  toggle(): void {
    if (!this.control.disabled) {
      this.control.setValue(!this.control.value);
    }
  }
}
