import { Component } from '@angular/core';

import { NavGroup } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './table-docs.component.html'
})
export class TableDocsComponent {

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Table Overview';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  menuItems: Array<NavGroup> = [
    { routeTitle: 'Features', subRoutes: [
      { route: './', routeTitle: 'Overview' },
      { route: './child-rows', routeTitle: 'Child Rows' },
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
