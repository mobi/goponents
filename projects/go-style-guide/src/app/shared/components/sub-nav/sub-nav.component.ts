import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { routerAnimation } from '../../../app.animations';

import { NavGroup } from '../../../../../../go-lib/src/public_api';
import { SubNavService } from './sub-nav.service';

@Component({
  animations: [routerAnimation],
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubNavComponent {

  @Input() menuItems: Array<NavGroup>;

  mobileSubmenuShown: boolean;

  constructor(public subNavService: SubNavService) { }

  getRouteAnimation(outlet: any): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  toggleSubmenu(): void {
    this.mobileSubmenuShown = this.mobileSubmenuShown ? false : true;
  }

  submenuIcon(): string {
    return this.mobileSubmenuShown ? 'chevron_right' : 'chevron_left';
  }

  closeMobileMenu(): void {
    this.mobileSubmenuShown = false;
  }

}
