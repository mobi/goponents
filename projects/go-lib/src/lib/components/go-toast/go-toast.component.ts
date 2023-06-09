import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'go-toast',
  templateUrl: './go-toast.component.html',
  styleUrls: ['./go-toast.component.scss']
})
export class GoToastComponent {
  duration: number;

  @Input() dismissable: boolean = false;
  @Input() enableMaxHeight: boolean = false;
  @Input() header: string;
  @Input() icon: string;
  @Input() message: string;
  @Input() showToastActions: boolean = false;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() type: string;

  @Output() handleDismiss: EventEmitter<void> = new EventEmitter();

  /**
   * Used to render Angular components and HTML inside of the header
   * instead of using just a string
   */
  @ContentChild('headerContent') headerContent: TemplateRef<any>;

  /**
   * Used to render Angular components and HTML inside of the message
   * instead of using just a string
   */
  @ContentChild('messageContent') messageContent: TemplateRef<any>;

  get _icon(): string {
    if (this.icon) {
      return this.icon;
    } else {
      switch (this.type) {
        case 'positive':
          return 'done';
        case 'negative':
          return 'priority_high';
        default:
          return 'notifications_none';
      }
    }
  }

  get _status(): string {
    switch (this.type) {
      case 'positive':
        return 'go-toast-status--positive';
      case 'negative':
        return 'go-toast-status--negative';
      default:
        return 'go-toast-status--neutral';
    }
  }

  dismiss(): void {
    this.handleDismiss.emit();
  }
}
