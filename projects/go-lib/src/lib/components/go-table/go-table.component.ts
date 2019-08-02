import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList
} from '@angular/core';

import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableConfig, GoTableDataSource, SortDirection } from './index';
import { sortBy } from './go-table-utils';
import { fadeTemplateAnimation } from '../../animations/fade.animation';

@Component({
  animations: [fadeTemplateAnimation],
  selector: 'go-table',
  templateUrl: './go-table.component.html',
  styleUrls: ['./go-table.component.scss']
})
export class GoTableComponent implements OnInit, OnChanges {

  @Input() loadingData: boolean = false;
  @Input() showTableActions: boolean = false;
  @Input() stackHeader: boolean = false;
  @Input() tableConfig: GoTableConfig;
  @Input() tableTitle: string;

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
  }

  hasData() : boolean {
    if (this.localTableConfig && this.localTableConfig.tableData) {
      return Boolean(this.localTableConfig.tableData.length);
    }

    return false;
  }

  sortIcons(columnField: string) : string {
    if (this.sortClasses(columnField, SortDirection.ascending)) {
      return 'arrow_upward';
    } else if (this.sortClasses(columnField, SortDirection.descending)) {
      return 'arrow_downward';
    }
  }

  showPaging() : boolean {
    return this.hasData() && this.localTableConfig.pageable;
  }

  toggleSort(columnField: string) : void {
    const { sortConfig, sortable, tableData } = this.localTableConfig;

    if (tableData && sortable) {
      if (sortConfig && sortConfig.column === columnField) {
        this.localTableConfig.sortConfig.direction = this.toggleSortDir(sortConfig.direction);
      } else {
        this.localTableConfig.sortConfig = { column: columnField, direction: SortDirection.ascending };
      }

      this.localTableConfig.pageConfig.offset = 0;

      this.tableChange.emit(this.localTableConfig);
      if (!this.isServerMode()) {
        this.handleSort();
      }
    }
  }

  nextPage() : void {
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset + this.localTableConfig.pageConfig.perPage;

    this.tableChangeOutcome();
  }

  isLastPage() : boolean {
    const { pageConfig, tableData, totalCount } = this.localTableConfig;

    return ((pageConfig.offset + pageConfig.perPage) >= tableData.length) && ((pageConfig.offset + pageConfig.perPage) >= totalCount);
  }

  setLastPage() : void {
    const { totalCount, pageConfig } = this.localTableConfig;

    let offset = totalCount - (totalCount % pageConfig.perPage);
    this.localTableConfig.pageConfig.offset = offset === totalCount ? totalCount - pageConfig.perPage : offset;

    this.tableChangeOutcome();
  }

  prevPage() : void {
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset - this.localTableConfig.pageConfig.perPage;

    this.tableChangeOutcome();
  }

  isFirstPage() : boolean {
    return this.localTableConfig.pageConfig.offset === 0;
  }

  setFirstPage() : void {
    this.localTableConfig.pageConfig.offset = 0;

    this.tableChangeOutcome();
  }

  setPerPage(event: any) : void {
    this.localTableConfig.pageConfig.perPage = Number(event.target.value);
    this.localTableConfig.pageConfig.offset = 0;

    this.tableChangeOutcome();
  }

  outputResultsPerPage() : string {
    const { pageConfig, totalCount } = this.localTableConfig;

    let beginning = this.localTableConfig.pageConfig.offset + 1;
    let endingEstimate = pageConfig.offset + pageConfig.perPage;
    let ending = endingEstimate <= totalCount ? endingEstimate : totalCount - pageConfig.offset;

    return beginning + " - " + ending;
  }

  setDisplayData() : any[] {
    const { pageConfig, tableData } = this.localTableConfig;

    if (this.isServerMode()) {
      return tableData;
    } else {
      return tableData.slice(pageConfig.offset, pageConfig.offset + pageConfig.perPage);
    }
  }

  /** Private Methods **/
  private handleSort() : void {
    const { sortConfig, sortable, tableData } = this.localTableConfig;

    if (sortConfig && sortable && tableData && sortConfig.column) {
      this.localTableConfig.tableData.sort(sortBy(sortConfig.column, Boolean(sortConfig.direction)));
    }
  }

  private toggleSortDir(currDir: SortDirection) : SortDirection {
    return currDir === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
  }

  private sortClasses(columnField: string, direction: SortDirection) : boolean {
    const { sortConfig } = this.localTableConfig;

    return sortConfig && sortConfig.column === columnField && sortConfig.direction === direction;
  }

  private setTotalCount() : void {
    const { totalCount, tableData } = this.localTableConfig;

    this.localTableConfig.totalCount = totalCount !== null ? totalCount : tableData.length;
  }

  private isServerMode() : boolean {
    return this.localTableConfig.dataMode === GoTableDataSource.server;
  }

  private tableChangeOutcome() : void {
    this.tableChange.emit(this.localTableConfig);
  }
}
