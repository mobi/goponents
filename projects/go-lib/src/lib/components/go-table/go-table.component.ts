import { Component,
         ContentChildren,
         EventEmitter,
         Input,
         OnChanges,
         OnInit,
         Output,
         QueryList } from '@angular/core';

import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableConfig, GoTableDataMode, SortDirection } from './index';
import { sortBy } from './go-table-utils';

@Component({
  selector: 'go-table',
  templateUrl: './go-table.component.html',
  styleUrls: ['./go-table.component.scss']
})
export class GoTableComponent implements OnInit, OnChanges {

  @Input() tableConfig: GoTableConfig;
  @Input() loadingData: boolean = false;

  @Output() tableChange: EventEmitter<GoTableConfig> = new EventEmitter();

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
    let { sort, sortable, tableData } = this.localTableConfig;

    this.loadingData = true;
    if (tableData && sortable) {
      if (sort && sort.column === columnField) {
        sort.direction = this.toggleSortDir(sort.direction);
      } else {
        this.localTableConfig.sort = { column: columnField, direction: SortDirection.ascending };
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
    this.localTableConfig.paging.skip = this.localTableConfig.paging.skip + this.localTableConfig.paging.perPage;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  isLastPage() : boolean {
    let { paging, tableData, totalCount } = this.localTableConfig;

    return ((paging.skip + paging.perPage) >= tableData.length) && ((paging.skip + paging.perPage) >= totalCount);
  }

  setLastPage() : void {
    let { totalCount, paging } = this.localTableConfig;

    this.loadingData = true;
    let offset = totalCount - (totalCount % paging.perPage);
    paging.skip = offset === totalCount ? totalCount - paging.perPage : offset;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  prevPage() : void {
    this.loadingData = true;
    this.localTableConfig.paging.skip = this.localTableConfig.paging.skip - this.localTableConfig.paging.perPage;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  isFirstPage() : boolean {
    return this.localTableConfig.paging.skip === 0;
  }

  setFirstPage() : void {
    this.loadingData = true;
    this.localTableConfig.paging.skip = 0;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  setPerPage(e) : void {
    this.loadingData = true;
    this.localTableConfig.paging.perPage = Number(e.target.value);
    this.localTableConfig.paging.skip = 0;

    if (this.isServerMode()) {
      this.tableChange.emit(this.localTableConfig);
    } else {
      this.loadingData = false;
    }
  }

  outputResultsPerPage() : string {
    let { paging, totalCount } = this.localTableConfig;

    let beginning = this.localTableConfig.paging.skip + 1;
    let endingEstimate = paging.skip + paging.perPage;
    let ending = endingEstimate <= totalCount ? endingEstimate : totalCount - paging.skip;

    return beginning + " - " + ending;
  }

  setDisplayData() : any[] {
    let { dataMode, paging, tableData } = this.localTableConfig;

    if (this.isServerMode()) {
      return tableData;
    } else {
      return tableData.slice(paging.skip, paging.skip + paging.perPage);
    }
  }
  
  /** Private Methods **/
  private handleSort() : void {
    let { sort, sortable, tableData } = this.localTableConfig;

    if (sort && sortable && tableData && sort.column) {
      this.localTableConfig.tableData.sort(sortBy(sort.column, Boolean(sort.direction)));
    }
  }

  private toggleSortDir(currDir: SortDirection) : SortDirection {
    return currDir === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
  }

  private sortClasses(columnField: string, direction: SortDirection) : boolean {
    let { sort } = this.localTableConfig;

    return sort && sort.column === columnField && sort.direction === direction;
  }

  private setTotalCount() : void {
    let { totalCount, tableData } = this.localTableConfig; 

    this.localTableConfig.totalCount = totalCount !== undefined && totalCount !== null ? totalCount : tableData.length;
  }

  private isServerMode() : boolean {
    return this.localTableConfig.dataMode === GoTableDataMode.server;
  }
}
