import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-toast',
  templateUrl: './go-toast.component.html',
  styleUrls: ['./go-toast.component.scss']
})
export class GoToastComponent {

  @Input() dismissable: boolean = false;
  @Input() header: string;
  @Input() message: string;
  @Input() type: string;

  @Output() handleDismiss = new EventEmitter();

  //#region Private Methods

  private statusClasses() : object {
    return {
      'go-toast-status--positive': this.type === 'positive',
      'go-toast-status--neutral': this.type === 'neutral' || !this.type,
      'go-toast-status--negative': this.type === 'negative'
    }
  }

  private goIconType() : string {
    switch (this.type) {
      case 'positive':
        return 'done';
      case 'negative':
        return 'priority_high';
      default:
        return 'notifications_none'
    }
  }

  private dismiss() : void {
    this.handleDismiss.emit();
  }

  //#endregion
}
