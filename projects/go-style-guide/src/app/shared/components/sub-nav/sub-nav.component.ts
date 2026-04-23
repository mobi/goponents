import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
  routeAnimationKey: number = 0;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(public subNavService: SubNavService,
              private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.routeAnimationKey += 1;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
