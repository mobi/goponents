import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NavAppDrawer } from '../nav-app-drawer.model';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from './go-side-nav.service';

@Component({
  selector: 'go-side-nav',
  templateUrl: './go-side-nav.component.html',
  styleUrls: ['./go-side-nav.component.scss'],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class GoSideNavComponent implements OnInit, OnDestroy {
  @Input() menuItems: Array<NavGroup | NavItem>;
  @Input() navAppDrawer: NavAppDrawer;
  @Input() appDrawerHeader: string = 'Launch';

  private destroy$: Subject<void> = new Subject();

  constructor (
    private router: Router,
    public navService: GoSideNavService
  ) { }

  ngOnInit(): void {
    this.generateIds(this.menuItems);

    this.navService.setMenuItems(this.menuItems);
    this.navService.setActiveItem(this.navService.extractBaseUrl(this.router.url));
    this.configureExpanded(this.router.url);

    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.configureExpanded(event.url);
     });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeNavs(navGroup: NavGroup): void {
    this.menuItems.forEach((group: (NavGroup | NavItem)) => {
      const g: NavGroup = group as NavGroup;
      g.expanded = this.openAccordion(g, navGroup);
    });
  }

  //#region Private Methods

  // This recursively adds ids to all NavGroups. We need these ids below within openAccordion()
  // when checking which accordions should be closed upon clicking a NavGroup.
  private generateIds(items: (NavGroup | NavItem)[]): void {
    items.forEach((item: (NavGroup | NavItem)) => {
      if ('subRoutes' in item) {
        item.id = `${item.routeTitle}-${Math.round(Math.random() * 1000000)}`;
        this.generateIds(item.subRoutes);
      }
    });
  }

  private configureExpanded(url: string): void {
    this.menuItems.forEach((item: (NavGroup | NavItem)) => {
      (item as NavGroup).expanded = this.setExpanded(item, url);
    });
  }

  private setExpanded(item: NavGroup | NavItem, url: string): boolean {
    if ((item as NavGroup).subRoutes) {
      return this.navGroupExpansion(item as NavGroup, url);
    } else {
      return url.includes((item as NavItem).route);
    }
  }

  private navGroupExpansion(group: NavGroup, url: string): boolean {
    group.expanded = group.subRoutes.some((subRoute: (NavGroup | NavItem)) => {
      return this.setExpanded(subRoute, url);
    });
    return group.expanded;
  }

  /**
   * @description this goes through and opens the accordion of the group that was clicked on and
   * closes the other accordions that were previously open if they are not above the group that was
   * clicked on. It uses recursion to go through nested groups to make sure that if a child group
   * is open the parents of the child is also open.
   * @param group this is the group we are trying to decide if it should be open.
   * @param item this is the group that we are searching for that was clicked on and needs opened.
   */
  private openAccordion(group: NavGroup, item: NavGroup): boolean {
    if (group.subRoutes) {
      if (group.id !== item.id) {
        group.expanded = group.subRoutes.some((subRoute: (NavGroup | NavItem)) => {
          return this.openAccordion((subRoute as NavGroup), item);
        });
      } else {
        group.expanded = true;
      }

      return group.expanded;
    }
    return false;
  }
  //#endregion
}
