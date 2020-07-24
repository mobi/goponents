import { Component } from '@angular/core';

import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent {

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Features', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './columns', routeTitle: 'Columns' },
      { route: './templating', routeTitle: 'Column Templates' },
      { route: './filters', routeTitle: 'Filters' },
      { route: './actions', routeTitle: 'Header Actions' },
      { route: './pagination', routeTitle: 'Pagination' },
      { route: './details', routeTitle: 'Row Details' },
      { route: './selection', routeTitle: 'Row Selection' },
      { route: './searching', routeTitle: 'Searching' },
      { route: './server-integration', routeTitle: 'Server-Side Integration' },
      { route: './sorting', routeTitle: 'Sorting' },
      { route: './title-template', routeTitle: 'Title Template' }
    ]}
  ];
}
