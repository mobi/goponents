import { Component } from '@angular/core';

import { NavGroup } from '../../../../../../../go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-docs',
  templateUrl: './layout-docs.component.html'
})
export class LayoutDocsComponent {

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Layout Overview';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-layout';
  }

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './app-drawer', routeTitle: 'App Drawer' },
      { route: './header', routeTitle: 'Header' },
      { route: './search', routeTitle: 'Search' },
      { route: './side-nav', routeTitle: 'Side Nav' },
      { route: './footer', routeTitle: 'Footer' },
      { route: './example', routeTitle: 'Full Example' }
    ]}
  ];

}
