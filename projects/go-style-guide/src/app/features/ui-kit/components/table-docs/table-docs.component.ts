import { Component } from '@angular/core';

import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Basics', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './actions', routeTitle: 'Actions' },
      { route: './details', routeTitle: 'Details' },
      { route: './pagination', routeTitle: 'Pagination' },
      { route: './selection', routeTitle: 'Selection' },
      { route: './sorting', routeTitle: 'Sorting' },
      { route: './templating', routeTitle: 'Templating' }
    ]},
    { routeTitle: 'Advanced', subRoutes: [
      { route: './server-integration', routeTitle: 'Server-Side Integration' }
    ]}
  ];
}
