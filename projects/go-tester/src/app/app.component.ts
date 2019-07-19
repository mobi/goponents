import { Component, OnInit, ViewChild } from '@angular/core';

import { AppService } from './app.service';
import {
  GoButtonComponent,
  GoIconComponent,
  GoLoaderComponent,
  GoOffCanvasService,
  GoTableConfig,
  GoTableDataSource,
  GoToasterService
} from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('heyButton') heyButton: GoButtonComponent;
  @ViewChild('loader') loader: GoLoaderComponent;

  title = 'go-tester';

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  constructor(
    private appService: AppService,
    private goToasterService: GoToasterService,
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
    });

    setTimeout(() => {
      this.goToasterService.toastInfo({ message: 'Check this out'});
      this.goToasterService.toastSuccess({message: 'Check this out' });
      this.goToasterService.toastError({ message: 'Check this out' });
    }, 1500);
  }

  stopLoaderAnimation() {
    this.loader.loaderDone = this.loader.loaderDone ? false : true;
  }

  clickHey(): void {
    setTimeout(() => {
      this.heyButton.reset();
    }, 4000);
  }

  handleTableChange(currentTableConfig: GoTableConfig): void {
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

  openThing(): void {
    this.goOffCanvasService.openOffCanvas({
      component: GoIconComponent,
      bindings: {
        icon: 'alarm'
      }
    });
  }
}
