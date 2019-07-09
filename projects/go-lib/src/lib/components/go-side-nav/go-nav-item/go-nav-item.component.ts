import { Component, Input } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent {
  @Input() navItem: NavItem;

  constructor (public navService: GoSideNavService) { }
}
