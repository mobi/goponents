import { Component, OnInit } from '@angular/core';

import {
  GoIconComponent,
  GoModalService,
  GoOffCanvasService,
  GoSideNavService,
  NavGroup,
  NavItem
} from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logo: string = 'https://mobi.thefutureis.mobi/images/assets/theme_logo/000/000/000/178/header.png?1556627290';
  title: string = 'go-tester';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', subRoutes: [
      { route: 'test-page-1', routeTitle: 'Test 1' },
      { route: 'test-page-2', routeTitle: 'Test 2' }
    ]}
  ];

  constructor(
    private goOffCanvasService: GoOffCanvasService,
    private goSideNavService: GoSideNavService,
    private goModalService: GoModalService
  ) { }

  ngOnInit() {
  }

  openThing(): void {
    this.goOffCanvasService.openOffCanvas({
      component: GoIconComponent,
      bindings: {
        icon: 'alarm'
      }
    });
  }

  toggleSideMenu(): void {
    this.goSideNavService.toggleNav();
  }

  openModal(): void {
    this.goModalService.openModal(
      GoIconComponent,
      {
        icon: 'alarm'
      }
    );
  }
}
