import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'go-icon-button',
  templateUrl: './go-icon-button.component.html',
  styleUrls: ['./go-icon-button.component.scss']
})
export class GoIconButtonComponent implements OnChanges {

  iconClass: string = '';

  @Input() buttonDisabled: boolean;
  @Input() buttonIcon: string;
  @Input() buttonSize: string = 'small';
  @Input() buttonTitle: string;

  @Output() handleClick: EventEmitter<void> = new EventEmitter();

  ngOnChanges(): void {
    this.iconClass = 'go-icon--' + this.buttonSize;
  }

  clicked(): void {
    this.handleClick.emit();
  }
}
