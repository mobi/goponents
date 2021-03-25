import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class TestPage1Component implements OnInit, OnDestroy {

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  private destroy$: Subject<void> = new Subject();

  tableDetailsConfig: GoTableConfig;
  tableDetailsLoading: boolean = true;
  stickybutton: string = 'Sticky Header';
  stickyHeader: boolean = false;

  @ViewChild('peopleTable', { static: false }) peopleTable: GoTableComponent;

  constructor(
    private appService: AppService,
    private toasterService: GoToasterService
  ) { }

  ngOnInit(): void {
    this.appService.getMockData(new GoTableConfig())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.tableConfig = new GoTableConfig({
          dataMode: GoTableDataSource.server,
          selectable: true,
          selectBy: 'id',
          tableData: data.results,
          totalCount: data.totalCount,
          sortable: false
        });
        this.tableDetailsConfig = new GoTableConfig({
          dataMode: GoTableDataSource.server,
          selectable: true,
          selectBy: 'id',
          tableData: data.results,
          totalCount: data.totalCount,
          sortable: false,
        });

        this.tableLoading = false;
        this.tableDetailsLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleTableChange(currentTableConfig: GoTableConfig): void {
    if (this.tableConfig.dataMode === GoTableDataSource.server) {
      this.tableLoading = true;
      this.appService.getMockData(currentTableConfig)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any) => {
          setTimeout(() => {
            currentTableConfig.tableData = data.results;
            currentTableConfig.totalCount = data.totalCount;
            currentTableConfig.stickyHeader = this.stickyHeader;

              this.tableConfig = currentTableConfig;
              this.tableLoading = false;
            }, 1000);
          });
    }
  }

  toggleSelection(): void {
    const newConfig: GoTableConfig = {
      ...this.tableConfig,
      selectBy: 'id',
      selectable: !this.tableConfig.selectable
    };

    this.tableConfig = newConfig;
  }

  outputSelectionCount(): void {
    this.toasterService.toastSuccess({ message: 'Rows Selected: ' + this.peopleTable.getSelectionCount() });
  }

  showCurrentSelection(): void {
    console.log(this.peopleTable.getSelectionState());
  }

  changeStickyHeader(): void {
    if (!this.stickyHeader) {
      this.stickyHeader = true;
      this.stickybutton = 'Non-Sticky Header';
    } else {
      this.stickyHeader = false;
      this.stickybutton = 'Sticky Header';
    }
    this.handleTableChange(this.tableConfig);
  }

  handleSelection(selectionEvent: RowSelectionEvent): void {
    const action: string = selectionEvent.currentRow.selected ? 'Selected: ' : 'Deselected: ';
    this.toasterService.toastInfo({ message: action + selectionEvent.currentRow.data['email'] });
  }

  goBack(): void {
    this.toasterService.toastInfo({ message: 'Back button clicked' });
  }

  saveClick(): void {
    this.toasterService.toastSuccess({ message: 'Save clicked!' });
  }

  cancelClick(): void {
    this.toasterService.toastError({ message: 'Cancel clicked!' });
  }

  logRow(parentItem: any, childItem: any): void {
    this.toasterService.toastInfo({
      header: 'Child Row Clicked!',
      message: `
        Child Name: ${childItem.name.first}<br/>
        Parent Name: ${parentItem.name.first}
      `
    });
  }
}
