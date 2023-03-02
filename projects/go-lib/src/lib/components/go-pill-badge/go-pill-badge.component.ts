import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'go-pill-badge',
  templateUrl: './go-pill-badge.component.html',
  styleUrls: ['./go-pill-badge.component.scss'],
})
export class GoPillBadgeComponent implements OnChanges {
  badgeStyles: object;

  @Input() badgeData: string;
  @Input() type: string = 'info';

  ngOnChanges(): void {
    this.badgeStyles = this.badgeClasses();
  }

  badgeClasses(): object {
    return {
      'go-pill-badge--success': this.type === 'success',
      'go-pill-badge--error': this.type === 'error',
      'go-pill-badge--info': this.type === 'info',
    };
  }
}
