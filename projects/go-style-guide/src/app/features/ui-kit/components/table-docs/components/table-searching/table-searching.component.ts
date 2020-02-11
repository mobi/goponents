import { Component } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import {
  GoTableConfig
} from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { GoTableSearchConfig } from 'projects/go-lib/src/lib/components/go-table/go-table-search-config.model';

@Component({
  selector: 'app-table-searching',
  templateUrl: './table-searching.component.html'
})
export class TableSearchingComponent {
  tableConfig: GoTableConfig = new GoTableConfig({
    searchConfig: new GoTableSearchConfig({
      searchable: true
    }),
    tableData: this.tableDocsService.generateData(20)
  });

  tableSearchConfig: string = `
  class GoTableSearchConfig {
    searchable: boolean = false;
    searchTerm: string;
  }
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

  tableConfigEx: string = `
  tableConfig: GoTableConfig = new GoTableConfig({
    searchConfig: new GoTableSearchConfig({
      searchable: true
    }),
    tableData: data
  });
  `;

  tableConfigRestrictColumn_html: string = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender" [searchable]="false"></go-table-column>
    <go-table-column field="ip_address" title="IP Address" [searchable]="false"></go-table-column>
  </go-table>
  `;

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Searching';
  }
}
