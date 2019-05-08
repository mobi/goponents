import { Component, OnInit } from '@angular/core';
import { GoTableConfig, GoTableDataSource, GoToasterService } from '../../../go-lib/src/public_api';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'go-tester';

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  constructor(
    private appService: AppService,
    private goToasterService: GoToasterService
  ) { }

  ngOnInit() {
    this.appService.getMockData(new GoTableConfig()).subscribe(data => {
      this.tableConfig = new GoTableConfig({
        dataMode: GoTableDataSource.server,
        tableData: data.results,
        totalCount: data.totalCount
      });
      this.tableLoading = false;
    })

    setTimeout(() => {
      this.goToasterService.toastInfo({ message: 'Check this out'});
    }, 1500);
  }

  handleTableChange(currentTableConfig: GoTableConfig) : void {
    if (this.tableConfig.dataMode === GoTableDataSource.server) {
      this.appService.getMockData(currentTableConfig).subscribe(data => {
        setTimeout(() => {
          currentTableConfig.tableData = data.results;
          currentTableConfig.totalCount = data.totalCount;
    
          this.tableConfig = currentTableConfig;
          this.tableLoading = false;
        }, 1000);
      });
    }
  }
}
