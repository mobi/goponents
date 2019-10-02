import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './server-integration.component.html'
})
export class ServerIntegrationComponent {
  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Table Server Integration';
  }

  ////////////////////////////

  tableConfig_ts: string = `
  tableConfig: GoTableConfig = new GoTableConfig({
    dataMode: GoTableDataSource.server,
    tableData: []
  });
  tableLoading: boolean = true;

  constructor(private mockService: TableMockDataService) { }

  ngOnInit() {
    this.handleTableChange(this.tableConfig);
  }
  `;

  tableConfig_ts_tableChange: string = `
  handleTableChange(currentTableConfig: GoTableConfig) : void {
    this.mockService.getMockData(currentTableConfig).subscribe(data => {
      currentTableConfig.tableData = data.results;
      currentTableConfig.totalCount = data.totalCount;

      this.tableConfig = currentTableConfig;
      this.tableLoading = false;
    });
  }
  `;

  tableConfig_html: string = `
  <go-table *ngIf="tableConfig"
            (tableChange)="handleTableChange($event)"
            [loadingData]="tableLoading"
            [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  server_response: string = `
  {
    results: [{}], // the actual results for the table
    totalCount: 12345 // the total count for the entire table, not just this page
  }
  `;
}
