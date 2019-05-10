import { Component } from '@angular/core';
import { AppService } from './app.service';
import {
  GoTableConfig,
  GoOffCanvasService,
  GoTableDataSource,
  GoButtonComponent,
  GoIconComponent
} from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-tester';

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  constructor(
    private appService: AppService,
    private goOffCanvasService: GoOffCanvasService
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

  openThing() : void {
    this.goOffCanvasService.openOffCanvas({
      component: GoButtonComponent,
      bindings: {
        buttonVariant: 'alert',
        buttonIcon: 'g_translate'
      }
    });
  }

  openOtherThing() : void {
    this.goOffCanvasService.openOffCanvas({
      component: GoIconComponent,
      bindings: {
        icon: 'alarm'
      }
    });
  }
}
