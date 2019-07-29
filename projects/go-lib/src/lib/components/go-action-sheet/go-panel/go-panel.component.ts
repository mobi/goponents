import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-panel',
  templateUrl: './go-panel.component.html',
  styleUrls: ['./go-panel.component.scss']
})
export class GoPanelComponent {

  @Input() danger: boolean;
  @Input() header: boolean;
  @Input() icon: string;
  @Input() externalLink: string;
  @Input() title: string;

  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  panelClasses(): object {
    return {
      'go-panel--danger': this.danger,
      'go-panel--header': this.header
    }
  }

  handleAction(): void {
    this.action.emit();
  }
}
