import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { routerAnimation } from './app.animations';

import { NavGroup, NavItem } from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerAnimation]
})
export class AppComponent {
  date: Date = new Date();

  menuItems: Array<NavGroup | NavItem> = [
    { route: 'getting-started', routeIcon: 'power_settings_new', routeTitle: 'Getting Started' },
    { route: 'standards', routeIcon: 'gavel', routeTitle: 'Standards', subRoutes: [
      { route: 'standards/colors', routeTitle: 'Colors' },
      { route: 'standards/forms', routeTitle: 'Forms' },
      { route: 'standards/grid', routeTitle: 'Grid System' },
      { route: 'standards/typography', routeTitle: 'Typography' }
    ]},
    { route: 'ui-kit', routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/action-sheet', routeTitle: 'Action Sheet' },
      { route: 'ui-kit/badge', routeTitle: 'Badge' },
      { route: 'ui-kit/button', routeTitle: 'Button' },
      { route: 'ui-kit/card', routeTitle: 'Card' },
      { route: 'ui-kit/configuration', routeTitle: 'Configuration' },
      { route: 'ui-kit/copy', routeTitle: 'Copy' },
      { route: 'ui-kit/forms', routeTitle: 'Forms' },
      { route: 'ui-kit/header-bar', routeTitle: 'Header Bar' },
      { route: 'ui-kit/icon', routeTitle: 'Icon' },
      { route: 'ui-kit/icon-button', routeTitle: 'Icon Button' },
      { route: 'ui-kit/layout', routeTitle: 'Layout' },
      { route: 'ui-kit/loader', routeTitle: 'Loader' },
      { route: 'ui-kit/modal', routeTitle: 'Modal' },
      { route: 'ui-kit/off-canvas', routeTitle: 'Off Canvas' },
      { route: 'ui-kit/tabs', routeTitle: 'Tabs', },
      { route: 'ui-kit/table', routeTitle: 'Table'},
      { route: 'ui-kit/toast', routeTitle: 'Toast' }
    ]}
  ];

  constructor (router: Router) { }

  getRouteAnimation(outlet: any): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
