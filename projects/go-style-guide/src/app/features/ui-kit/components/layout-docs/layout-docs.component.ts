import { Component } from '@angular/core';

import { NavGroup } from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-layout-docs',
  templateUrl: './layout-docs.component.html'
})
export class LayoutDocsComponent {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './header', routeTitle: 'Header' },
      { route: './search', routeTitle: 'Search' },
      { route: './side-nav', routeTitle: 'Side Nav' },
      { route: './footer', routeTitle: 'Footer' },
      { route: './example', routeTitle: 'Full Example' }
    ]}
  ];

}
