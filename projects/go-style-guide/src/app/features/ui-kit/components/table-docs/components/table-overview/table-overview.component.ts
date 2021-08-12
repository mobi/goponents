import { Component } from '@angular/core';

import { GoTableConfig } from 'projects/go-lib/src/public_api';
import { FakeData, TableDocsService } from '../../table-docs.service';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './table-overview.component.html'
})
export class TableOverviewComponent {
  stickyButton: string = 'Sticky Header';
  stickyHeader: boolean = false;

  constructor(
    private subNavService: SubNavService,
    private tableDocsService: TableDocsService
  ) {
    this.subNavService.pageTitle = 'Table Overview';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  ////////////////////////////

  componentBindings: string = `
  @Input() loadingData: boolean = false;
  @Input() maxHeight: string;
  @Input() minHeight: string;
  @Input() renderBoxShadows: boolean = true;
  @Input() showTableActions: boolean = false;
  @Input() stickyHeader: boolean = false;
  @Input() tableConfig: GoTableConfig;
  @Input() tableTitle: string;
  `;

  tableConfigClass: string = `
  class GoTableConfig {
    dataMode: GoTableDataSource = GoTableDataSource.client;
    noDataText: string = 'No Data';
    pageable: boolean = true;
    pageConfig: GoTablePageConfig = new GoTablePageConfig();
    preselected: boolean = false;
    searchConfig: GoTableSearchConfig = new GoTableSearchConfig();
    selectable: boolean = false;
    selectBy: string;
    sortConfig?: GoTableSortConfig;
    sortable: boolean = true;
    tableData: any[]; // Only required property
    totalCount: number = null;
  }
  `;

  basicExample_html: string = `
  <go-table [tableConfig]="tableConfig" tableTitle="Default Example">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  basicExample_ts: string = `
  tableConfig = new GoTableConfig({
    tableData: this.data
  });
  `;

  boxShadowExample_html: string = `
  <go-table [tableConfig]="tableConfig" tableTitle="No Box-Shadow Example" [renderBoxShadows]="false">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  maxHeightExample_html: string = `
  <go-table
    [tableConfig]="tableConfig"
    tableTitle="Max Height Example"
    maxHeight="300px">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  minHeightExample_html: string = `
  <go-table
    [tableConfig]="tableConfig"
    tableTitle="Min Height Example"
    minHeight="700px">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

    tableStickyConfig_html: string = `
    <go-table
      [tableConfig]="tableConfig"
      tableTitle="Sticky Table Header"
      [showTableActions]="true"
      [stickyHeader]="stickyHeader" >
      <ng-container go-table-actions>
        <go-button (handleClick)="changeStickyHeader()">
          {{ this.stickybutton }}
        </go-button>
      </ng-container>
      <go-table-column field="id" title="ID"></go-table-column>
      <go-table-column field="name.first" title="First Name"></go-table-column>
      <go-table-column field="name.last" title="Last Name"></go-table-column>
      <go-table-column field="email" title="Email"></go-table-column>
      <go-table-column field="gender" title="Gender"></go-table-column>
      <go-table-column field="ip_address" title="IP Address"></go-table-column>
    </go-table>
  `;

  tableStickyConfig_ts: string = `
  // Set default configuration for sticky header table
  stickybutton: string = 'Sticky Header'
  stickyHeader: boolean = false;

  // Change the stickyHeader variable value on click event
  changeStickyHeader(): void{
    this.stickyHeader = !this.stickyHeader;
    this.stickyButton = !this.stickyHeader ? 'Sticky Header' : 'Non-Sticky Header';
  }
  `;

  filterTableEx: string = `
  // Specify the generic on the config variable
  tableConfig: GoTableConfig<FakeData> = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });

  filterTable(): void {
    // Compiler now recognizes tableData items as \`FakeData\` interfaces
    // This allows us to keep things strictly typed
    const filteredData: FakeData[] = this.tableConfig.tableData.filter((item: FakeData) => {
      return item.email.includes('tangoe');
    });
  }
  `;

  tableConfig: GoTableConfig<FakeData> = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });

  changeStickyHeader(): void {
    this.stickyHeader = !this.stickyHeader;
    this.stickyButton = !this.stickyHeader ? 'Sticky Header' : 'Non-Sticky Header';
  }
}
