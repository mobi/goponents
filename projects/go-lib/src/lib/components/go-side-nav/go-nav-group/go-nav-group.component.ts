import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-nav-group',
  templateUrl: './go-nav-group.component.html',
  styleUrls: ['./go-nav-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoNavGroupComponent {
  @Input() navItem: NavGroup | NavItem;
  @Input() class: string;
  @Output() closeNavs = new EventEmitter<NavGroup>();

  constructor (public navService: GoSideNavService) { }

  expand(navGroup: NavGroup): void {
    navGroup.expanded = !navGroup.expanded;

    if (!this.navService.navOpen) {
      this.navService.toggleNav();
    }

    if (navGroup.expanded) {
      this.closeNavs.emit(navGroup);
    }
  }
}
