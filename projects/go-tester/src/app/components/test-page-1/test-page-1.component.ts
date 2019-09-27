import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GoTableComponent,
  GoTableConfig,
  GoTableDataSource,
  GoToasterService,
  RowSelectionEvent
} from '../../../../../go-lib/src/public_api';

import { AppService } from '../../app.service';


@Component({
  selector: 'app-test-page-1',
  templateUrl: './test-page-1.component.html'
})
export class TestPage1Component implements OnInit {

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  @ViewChild('peopleTable') peopleTable: GoTableComponent;

  constructor(
    private appService: AppService,
    private toasterService: GoToasterService
  ) { }

  ngOnInit(): void {
    this.appService.getMockData(new GoTableConfig()).subscribe((data: any) => {
      this.tableConfig = new GoTableConfig({
        dataMode: GoTableDataSource.server,
        selectable: true,
        selectBy: 'id',
        tableData: data.results,
        totalCount: data.totalCount,
        sortable: false
      });
      this.tableLoading = false;
    });
  }

  handleTableChange(currentTableConfig: GoTableConfig): void {
    if (this.tableConfig.dataMode === GoTableDataSource.server) {
      this.tableLoading = true;
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

  outputSelectionCount(): void {
    this.toasterService.toastSuccess({ message: 'Rows Selected: ' + this.peopleTable.getSelectionCount() });
  }

  showCurrentSelection(): void {
    console.log(this.peopleTable.getSelectionState());
  }

  handleSelection(selectionEvent: RowSelectionEvent): void {
    const action: string = selectionEvent.currentRow.selected ? 'Selected: ' : 'Deselected: ';
    this.toasterService.toastInfo({ message: action + selectionEvent.currentRow.data['email'] });
  }
}
