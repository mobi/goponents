import { Injectable } from '@angular/core';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GoSideNavService {
  public navOpen: boolean = true;
  public menuItems: (NavGroup | NavItem)[];
  private _menuItems: Map<string, (NavGroup | NavItem)> = new Map();
  private currentItem: NavItem | NavGroup;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.setActiveItem(this.extractBaseUrl(event.urlAfterRedirects));
      }
    });
  }

  setMenuItems(val: (NavGroup | NavItem)[]): void {
    this.menuItems = val;
    this.createNavMap();
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  extractBaseUrl(url: string): string {
    if (this.router.parseUrl(url).root.children['primary']) {
      return this.router.parseUrl(url).root.children['primary'].segments.map((it: UrlSegment) => it.path).join('/');
    }
    return '/';
  }

  setActiveItem(url: string): void {
    const obj: NavGroup | NavItem = this._menuItems.get(this.formatUrl(url));
    if (obj) {
      if (this.currentItem) {
        this.currentItem.routeActive = false;
      }

      obj.routeActive = true;
      this.currentItem = obj;
    }
  }

  private isNavGroup(item: NavGroup | NavItem): item is NavGroup {
    return (item as NavGroup).subRoutes !== undefined;
  }

  private extractNested(group: NavGroup, base: NavGroup): void {
    for (const route of group.subRoutes) {
      if (this.isNavGroup(route)) {
        this.extractNested(route, base);
      } else {
        this._menuItems.set(this.formatUrl(route.route), base);
      }
    }
  }

  private createNavMap(): void {
    let baseItem: NavGroup | NavItem;
    for (let i: number = 0; i < this.menuItems.length; i++) {
      baseItem = this.menuItems[i];
      if (!this.isNavGroup(baseItem)) {
        this._menuItems.set(this.formatUrl(baseItem.route), baseItem);
      } else {
        this.extractNested(baseItem, baseItem);
      }
    }
  }

  private formatUrl(route: string): string {
    return route[0] !== '/' ? '/' + route : route;
  }
}
