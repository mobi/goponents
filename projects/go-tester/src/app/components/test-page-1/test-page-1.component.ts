import { Component, OnInit, Input } from '@angular/core';
import { GoTableConfig, GoTableDataSource } from '../../../../../go-lib/src/public_api';

import { AppService } from '../../app.service'; 


@Component({
  selector: 'test-page-1',
  templateUrl: './test-page-1.component.html'
})
export class TestPage1Component implements OnInit {

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getMockData(new GoTableConfig()).subscribe(data => {
      this.tableConfig = new GoTableConfig({
        dataMode: GoTableDataSource.server,
        tableData: data.results,
        totalCount: data.totalCount
      });
      this.tableLoading = false;
    })
  }

  handleTableChange(currentTableConfig: GoTableConfig) : void {
    if (this.tableConfig.dataMode === GoTableDataSource.server) {
      this.appService.getMockData(currentTableConfig).subscribe(data => {
        setTimeout(() => {
          currentTableConfig.tableData = data.results;
          currentTableConfig.totalCount = data.totalCount;
    
          this.tableConfig = currentTableConfig;
          this.tableLoading = false;
        }, 2000);
      });
    }
  }
}
