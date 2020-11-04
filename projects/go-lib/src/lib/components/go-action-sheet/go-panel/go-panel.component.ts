import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoActionSheetComponent } from '../go-action-sheet.component';

@Component({
  selector: 'go-panel',
  templateUrl: './go-panel.component.html',
  styleUrls: ['./go-panel.component.scss']
})
export class GoPanelComponent {

  @Input() danger: boolean;
  @Input() showHeader: boolean;
  @Input() icon: string;
  @Input() externalLink: string;
  @Input() panelContent: string;
  @Input() target: string;

  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor(private parent: GoActionSheetComponent) { }

  panelClasses(): object {
    return {
      'go-panel--danger': this.danger,
      'go-panel--header': this.showHeader
    };
  }

  handleAction(): void {
    this.action.emit();
    this.closeActionSheet();
  }

  closeActionSheet(): void {
    this.parent.showContent = false;
  }
}
