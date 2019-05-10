import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-toast',
  templateUrl: './go-toast.component.html',
  styleUrls: ['./go-toast.component.scss']
})
export class GoToastComponent implements OnInit {
  statusClass: string = 'go-toast-status--neutral';
  icon: string = 'notifications_none';

  @Input() dismissable: boolean = false;
  @Input() header: string;
  @Input() message: string;
  @Input() type: string;

  @Output() handleDismiss = new EventEmitter();

  ngOnInit(): void {
    this.statusClass = this.getStatus();
    this.icon = this.getIcon();
  }

  public dismiss(): void {
    this.handleDismiss.emit();
  }

  //#region Private Methods

  private getStatus(): string {
    switch (this.type) {
      case 'positive':
        return 'go-toast-status--positive';
      case 'negative':
        return 'go-toast-status--negative';
      default:
        return 'go-toast-status--neutral';
    }
  }

  private getIcon(): string {
    switch (this.type) {
      case 'positive':
        return 'done';
      case 'negative':
        return 'priority_high';
      default:
        return 'notifications_none'
    }
  }

  //#endregion
}
