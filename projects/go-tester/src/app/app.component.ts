import { Component } from '@angular/core';
import { GoTableConfig, GoTableDataMode } from '../../../go-lib/src/public_api';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-tester';

  tableConfig: GoTableConfig;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getMockData(new GoTableConfig()).subscribe(data => {
      this.tableConfig = new GoTableConfig({
        dataMode: GoTableDataMode.server,
        tableData: data.results,
        totalCount: data.totalCount
      });
    })
  }

  handleTableChange(currentTableConfig: GoTableConfig) : void {
    if (this.tableConfig.dataMode === GoTableDataMode.server) {
      this.appService.getMockData(currentTableConfig).subscribe(data => {
        setTimeout(() => {
          currentTableConfig.tableData = data.results;
          currentTableConfig.totalCount = data.totalCount;
          currentTableConfig.loadingData = false;
    
          this.tableConfig = currentTableConfig;
        }, 1000);
      });
    }
  }
}
