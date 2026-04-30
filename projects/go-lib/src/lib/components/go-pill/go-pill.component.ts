import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GoIconModule} from '../go-icon/go-icon.module';
@Component({
    selector: 'go-pill',
    templateUrl: './go-pill.component.html',
    styleUrls: ['./go-pill.component.scss'],
  imports: [CommonModule, GoIconModule],
})
export class GoPillComponent {
  @Input() removable: boolean = true;
  @Output() removed: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.removed.emit();
  }
}
