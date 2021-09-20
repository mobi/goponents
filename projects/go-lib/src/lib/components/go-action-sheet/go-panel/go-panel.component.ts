import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoActionSheetComponent } from '../go-action-sheet.component';

@Component({
  selector: 'go-panel',
  templateUrl: './go-panel.component.html',
  styleUrls: ['./go-panel.component.scss']
})
export class GoPanelComponent {

  @Input() closeOnClick: boolean = true;
  @Input() danger: boolean;
  @Input() disablePanel: boolean = false;
  @Input() externalLink: string;
  @Input() icon: string;
  @Input() panelContent: string;
  @Input() readonly: boolean = false;
  @Input() showHeader: boolean;
  @Input() target: string;

  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor(private parent: GoActionSheetComponent) { }

  panelClasses(): object {
    return {
      'go-panel--danger': this.danger,
      'go-panel--header': this.showHeader,
      'go-panel--disabled': this.disablePanel,
      'go-panel--readonly': this.readonly
    };
  }

  handleAction(): void {
    if (!this.readonly && !this.disablePanel) {
      this.action.emit();
      this.panelClicked();
    }
  }

  panelClicked(): void {
    if (this.closeOnClick) {
      this.parent.showContent = false;
    }
  }
}
