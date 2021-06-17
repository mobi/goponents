import { Component, ContentChild, HostBinding, Input, OnChanges } from '@angular/core';
import { GoIconButtonComponent } from '../go-icon-button/go-icon-button.component';

@Component({
  selector: 'go-badge',
  templateUrl: './go-badge.component.html',
  styleUrls: ['./go-badge.component.scss']
})
export class GoBadgeComponent implements OnChanges {
  badgeStyles: object;

  @Input() badgeData: string;
  @Input() badgeColor: string = 'neutral';
  @Input() displayData: boolean = true;

  @HostBinding('class.go-badge__parent')

  @ContentChild(GoIconButtonComponent) iconButtonChild: GoIconButtonComponent;

  ngOnChanges(): void {
    this.badgeStyles = this.badgeClasses();
  }

  badgeClasses(): object {
    return {
      'go-badge--positive': this.badgeColor === 'positive',
      'go-badge--negative': this.badgeColor === 'negative',
      'go-badge--neutral': this.badgeColor === 'neutral',
      'go-badge--dot': !this.displayData
    };
  }
}
