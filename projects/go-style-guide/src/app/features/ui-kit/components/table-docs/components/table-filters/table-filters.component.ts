import { Component, OnInit } from '@angular/core';
import { GoTableConfig } from '../../../../../../../../../go-lib/src/public_api';
import { SubNavService } from '../../../../../../shared/components/sub-nav/sub-nav.service';
import { TableDocsService } from '../../table-docs.service';

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html'
})
export class TableFiltersComponent {

  tableFilters_html: string = `
  <go-table
    tableTitle="Example of Table Filters"
    [tableConfig]="tableConfig">
    <ng-container go-table-filters>
      <go-pill>Filter 1</go-pill>
      <go-pill>Filter 2</go-pill>
    </ng-container>
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Filters';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

}
