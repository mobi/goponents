import { Component,
         ContentChildren,
         EventEmitter,
         Input,
         OnChanges,
         OnInit,
         Output,
         QueryList } from '@angular/core';

import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableConfig, GoTableDataSource, SortDirection } from './index';
import { sortBy } from './go-table-utils';

@Component({
  selector: 'go-table',
  templateUrl: './go-table.component.html',
  styleUrls: ['./go-table.component.scss']
})
export class GoTableComponent implements OnInit, OnChanges {

  @Input() tableConfig: GoTableConfig;
  @Input() loadingData: boolean = false;

  @Output() tableChange: EventEmitter<GoTableConfig> = new EventEmitter<GoTableConfig>();

  @ContentChildren(GoTableColumnComponent) columns: QueryList<GoTableColumnComponent>;

  localTableConfig: GoTableConfig;
  showTable: boolean = false;

  ngOnInit() {
    if (!this.tableConfig) {
      throw new Error("GoTableComponent: tableConfig is a required Input");
    } else {
      this.renderTable();
    }
  }

  ngOnChanges() {
    this.renderTable();
  }

  renderTable() : void {
    if (this.tableConfig) {
      this.localTableConfig = JSON.parse(JSON.stringify(this.tableConfig));

      this.setTotalCount();
      this.handleSort();
    }
    
    this.showTable = Boolean(this.tableConfig);
    this.loadingData = false;
  }

  hasData() : boolean {
    if (this.localTableConfig && this.localTableConfig.tableData) {
      return Boolean(this.localTableConfig.tableData.length);
    }

    return false;
  }

  showPaging() : boolean {
    return this.hasData() && this.localTableConfig.pageable;
  }

  columnClasses(columnField: string) : object {
    return {
      'go-table__th--sort-down': this.sortClasses(columnField, SortDirection.ascending),
      'go-table__th--sort-up': this.sortClasses(columnField, SortDirection.descending)
    }
  }

  toggleSort(columnField: string) : void {
    let { sortConfig, sortable, tableData } = this.localTableConfig;

    this.loadingData = true;
    if (tableData && sortable) {
      if (sortConfig && sortConfig.column === columnField) {
        sortConfig.direction = this.toggleSortDir(sortConfig.direction);
      } else {
        this.localTableConfig.sortConfig = { column: columnField, direction: SortDirection.ascending };
      }

      if (this.isServerMode()) {
        this.tableChange.emit(this.localTableConfig);
      } else {
        this.handleSort();
        this.loadingData = false;
      }
    }
  }

  nextPage() : void {
    this.loadingData = true;
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset + this.localTableConfig.pageConfig.perPage;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  isLastPage() : boolean {
    let { pageConfig, tableData, totalCount } = this.localTableConfig;

    return ((pageConfig.offset + pageConfig.perPage) >= tableData.length) && ((pageConfig.offset + pageConfig.perPage) >= totalCount);
  }

  setLastPage() : void {
    let { totalCount, pageConfig } = this.localTableConfig;

    this.loadingData = true;
    let offset = totalCount - (totalCount % pageConfig.perPage);
    pageConfig.offset = offset === totalCount ? totalCount - pageConfig.perPage : offset;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  prevPage() : void {
    this.loadingData = true;
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset - this.localTableConfig.pageConfig.perPage;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  isFirstPage() : boolean {
    return this.localTableConfig.pageConfig.offset === 0;
  }

  setFirstPage() : void {
    this.loadingData = true;
    this.localTableConfig.pageConfig.offset = 0;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  setPerPage(event: any) : void {
    this.loadingData = true;
    this.localTableConfig.pageConfig.perPage = Number(event.target.value);
    this.localTableConfig.pageConfig.offset = 0;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  outputResultsPerPage() : string {
    let { pageConfig, totalCount } = this.localTableConfig;

    let beginning = this.localTableConfig.pageConfig.offset + 1;
    let endingEstimate = pageConfig.offset + pageConfig.perPage;
    let ending = endingEstimate <= totalCount ? endingEstimate : totalCount - pageConfig.offset;

    return beginning + " - " + ending;
  }

  setDisplayData() : any[] {
    let { pageConfig, tableData } = this.localTableConfig;

    if (this.isServerMode()) {
      return tableData;
    } else {
      return tableData.slice(pageConfig.offset, pageConfig.offset + pageConfig.perPage);
    }
  }
  
  /** Private Methods **/
  private handleSort() : void {
    let { sortConfig, sortable, tableData } = this.localTableConfig;

    if (sortConfig && sortable && tableData && sortConfig.column) {
      this.localTableConfig.tableData.sort(sortBy(sortConfig.column, Boolean(sortConfig.direction)));
    }
  }

  private toggleSortDir(currDir: SortDirection) : SortDirection {
    return currDir === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
  }

  private sortClasses(columnField: string, direction: SortDirection) : boolean {
    let { sortConfig } = this.localTableConfig;

    return sortConfig && sortConfig.column === columnField && sortConfig.direction === direction;
  }

  private setTotalCount() : void {
    let { totalCount, tableData } = this.localTableConfig; 

    this.localTableConfig.totalCount = totalCount !== undefined && totalCount !== null ? totalCount : tableData.length;
  }

  private isServerMode() : boolean {
    return this.localTableConfig.dataMode === GoTableDataSource.server;
  }
}
