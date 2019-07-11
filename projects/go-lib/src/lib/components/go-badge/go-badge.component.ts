import { Component, Input } from '@angular/core';

@Component({
  selector: 'go-badge',
  templateUrl: './go-badge.component.html',
  styleUrls: ['./go-badge.component.scss']
})
export class GoBadgeComponent {
  @Input() badgeData: string;
  @Input() badgeColor: string;
  constructor() { }

  getColor() {
    switch (this.badgeColor) {
      case 'positive':
        return 'go-badge--positive';
      case 'negative':
        return 'go-badge--negative';
      default:
        return 'go-badge--neutral';
    }
  }
}
