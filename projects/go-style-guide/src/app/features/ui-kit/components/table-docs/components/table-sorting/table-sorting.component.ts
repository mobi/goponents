import { Component } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import { GoTableConfig, GoTableSortConfig, SortDirection } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './table-sorting.component.html'
})
export class TableSortingComponent {
  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Sorting';
  }

  ////////////////////////////

  tableSortConfig: string = `
  class GoTableSortConfig {
    column: string;
    direction?: SortDirection = SortDirection.ascending;
  }
  `;

  tableSortDir: string = `
  enum SortDirection {
    ascending = 1,
    descending = 0
  }
  `;

  tableConfigEx: string = `
  // import these at the top of the file
  import { GoTableConfig, GoTableSortConfig, SortDirection } from '@tangoe/goponents';

  this.tableConfig = new GoTableConfig({
    sortConfig: new GoTableSortConfig({
      column: 'name.first',
      direction: SortDirection.descending
    }),
    tableData: data
  });
  `;

  tableConfigEx_html: string = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfigEx_nosort: string = `
  // import these at the top of the file
  import { GoTableConfig, GoTableSortConfig, SortDirection } from '@tangoe/goponents';

  this.tableConfig = new GoTableConfig({
    sortable: false,
    tableData: data
  });
  `;

  tableConfig: GoTableConfig = new GoTableConfig({
    sortConfig: new GoTableSortConfig({
      column: 'name.first',
      direction: SortDirection.descending
    }),
    tableData: this.tableDocsService.generateData(20)
  });

  tableConfig_nosort: GoTableConfig = new GoTableConfig({
    sortable: false,
    tableData: this.tableDocsService.generateData(20)
  });
}
