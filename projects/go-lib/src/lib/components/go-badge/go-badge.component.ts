import { Component, Input } from '@angular/core';

@Component({
  selector: 'go-badge',
  templateUrl: './go-badge.component.html',
  styleUrls: ['./go-badge.component.scss']
})
export class GoBadgeComponent {
  @Input() badgeData: string;
  constructor() { }
}
