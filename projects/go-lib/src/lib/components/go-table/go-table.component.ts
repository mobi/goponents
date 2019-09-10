import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';

import { GoTableColumnComponent } from './go-table-column.component';
import {
  GoTableConfig,
  GoTableDataSource,
  GoTablePageConfig,
  GoTableSortConfig,
  RowSelectionEvent,
  SelectionMode,
  SelectionState,
  SortDirection
} from './index';
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

  /**
   * This event is emitted when a row's selection changes
   * @returns a `GoTableRowSelectionEvent` object.
   * - `currentRow` is the targeted row
   * - `selectedRows` are the currently selected rows if the `selectionMode` is `selection`
   * - `selectionMode` is a `GoTableSelectionMode` enum of either `selection` or `deselection`
   * - `deselectedRows` are the currently deselected rows if the `selectionMode` is `deselection`
   */
  @Output() rowSelectionEvent: EventEmitter<RowSelectionEvent> = new EventEmitter<RowSelectionEvent>();
  @Output() tableChange: EventEmitter<GoTableConfig> = new EventEmitter<GoTableConfig>();

  @ContentChildren(GoTableColumnComponent) columns: QueryList<GoTableColumnComponent>;

  @ViewChild('selectAllCheckbox') selectAllCheckbox: ElementRef;

  localTableConfig: GoTableConfig;
  selectAllChecked: boolean = false;
  targetedRows: any[] = [];
  showTable: boolean = false;

  ngOnInit(): void {
    if (!this.tableConfig) {
      throw new Error('GoTableComponent: tableConfig is a required Input');
    } else {
      this.renderTable();
    }
  }

  ngOnChanges(): void {
    this.renderTable();
  }

  renderTable(): void {
    if (this.tableConfig) {
      this.localTableConfig = JSON.parse(JSON.stringify(this.tableConfig));

      this.setTotalCount();
      this.handleSort();
    }

    this.showTable = Boolean(this.tableConfig);
  }

  hasData(): boolean {
    if (this.localTableConfig && this.localTableConfig.tableData) {
      return Boolean(this.localTableConfig.tableData.length);
    }

    return false;
  }

  sortIcons(columnField: string): string {
    if (this.sortClasses(columnField, SortDirection.ascending)) {
      return 'arrow_upward';
    } else if (this.sortClasses(columnField, SortDirection.descending)) {
      return 'arrow_downward';
    }
  }

  showPaging(): boolean {
    return this.hasData() && this.localTableConfig.pageable;
  }

  toggleSort(columnField: string): void {
    const { sortable, sortConfig, tableData }:
    {
      sortable: boolean,
      sortConfig?: GoTableSortConfig,
      tableData: any[]
    } = this.localTableConfig;

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

  nextPage(): void {
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset + this.localTableConfig.pageConfig.perPage;

    this.tableChangeOutcome();
  }

  isLastPage(): boolean {
    const { pageConfig, tableData, totalCount }:
    {
      pageConfig: GoTablePageConfig,
      tableData: any[],
      totalCount: number
    } = this.localTableConfig;

    return ((pageConfig.offset + pageConfig.perPage) >= tableData.length) && ((pageConfig.offset + pageConfig.perPage) >= totalCount);
  }

  setLastPage(): void {
    const { pageConfig, totalCount }:
    {
      pageConfig: GoTablePageConfig,
      totalCount: number
    } = this.localTableConfig;

    const offset: number = totalCount - (totalCount % pageConfig.perPage);
    this.localTableConfig.pageConfig.offset = offset === totalCount ? totalCount - pageConfig.perPage : offset;

    this.tableChangeOutcome();
  }

  prevPage(): void {
    this.localTableConfig.pageConfig.offset = this.localTableConfig.pageConfig.offset - this.localTableConfig.pageConfig.perPage;

    this.tableChangeOutcome();
  }

  isFirstPage(): boolean {
    return this.localTableConfig.pageConfig.offset === 0;
  }

  setFirstPage(): void {
    this.localTableConfig.pageConfig.offset = 0;

    this.tableChangeOutcome();
  }

  setPerPage(event: any): void {
    this.localTableConfig.pageConfig.perPage = Number(event.target.value);
    this.localTableConfig.pageConfig.offset = 0;

    this.tableChangeOutcome();
  }

  outputResultsPerPage(): string {
    const { pageConfig, totalCount }:
    {
      pageConfig: GoTablePageConfig,
      totalCount: number
    } = this.localTableConfig;

    const beginning: number = this.localTableConfig.pageConfig.offset + 1;
    const endingEstimate: number = pageConfig.offset + pageConfig.perPage;
    const ending: number = endingEstimate <= totalCount ? endingEstimate : totalCount - pageConfig.offset;

    return beginning + ' - ' + ending;
  }

  setDisplayData(): any[] {
    const { pageConfig, tableData }:
    {
      pageConfig: GoTablePageConfig,
      tableData: any[]
    } = this.localTableConfig;

    if (this.isServerMode()) {
      return tableData;
    } else {
      return tableData.slice(pageConfig.offset, pageConfig.offset + pageConfig.perPage);
    }
  }

  getSelectionCount(): number {
    if (this.determineSelectionMode() === SelectionMode.deselection) {
      return this.localTableConfig.totalCount - this.targetedRows.length;
    } else {
      return this.targetedRows.length;
    }
  }

  getSelectionState(): SelectionState {
    return {
      deselectedRows: this.selectAllChecked ? this.targetedRows : [],
      selectionMode: this.determineSelectionMode(),
      selectedRows: !this.selectAllChecked ? this.targetedRows : []
    };
  }

  toggleSelectAll(): void {
    this.targetedRows = [];
    this.selectAllChecked = !this.selectAllChecked;

    if (!this.selectAllChecked) {
      this.selectAllCheckbox.nativeElement.indeterminate = false;
    }
  }

  selectionChange(event: any, row: any): void {
    const index: number = this.targetedRows.indexOf(row);

    if (this.selectAllChecked) {
      if (event.target.checked && index >= 0) {
        this.targetedRows.splice(index, 1);
        if (this.targetedRows.length === 0) {
          this.selectAllCheckbox.nativeElement.indeterminate = false;
        }
      } else {
        this.targetedRows.push(row);
        this.selectAllCheckbox.nativeElement.indeterminate = true;
      }
    } else {
      if (event.target.checked && index < 0) {
        this.targetedRows.push(row);
      } else {
        this.targetedRows.splice(index, 1);
      }
    }

    this.rowSelectionEvent.emit({
      currentRow: {
        data: row,
        selected: event.target.checked
      },
      deselectedRows: this.selectAllChecked ? this.targetedRows : [],
      selectionMode: this.determineSelectionMode(),
      selectedRows: !this.selectAllChecked ? this.targetedRows : []
     });
  }

  isRowSelected(row: any): boolean {
    if (this.selectAllChecked && !this.isRowInTargeted(row)) {
      return true;
    } else if (!this.selectAllChecked && this.isRowInTargeted(row)) {
      return true;
    } else {
      return false;
    }
  }

  //#region Private Methods
  private handleSort(): void {
    const { sortConfig, sortable, tableData }:
    {
      sortConfig?: GoTableSortConfig,
      sortable: boolean,
      tableData: any[]
    } = this.localTableConfig;

    if (sortConfig && sortable && tableData && sortConfig.column) {
      this.localTableConfig.tableData.sort(sortBy(sortConfig.column, Boolean(sortConfig.direction)));
    }
  }

  private toggleSortDir(currDir: SortDirection): SortDirection {
    return currDir === SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
  }

  private sortClasses(columnField: string, direction: SortDirection): boolean {
    const { sortConfig }: { sortConfig?: GoTableSortConfig } = this.localTableConfig;

    return sortConfig && sortConfig.column === columnField && sortConfig.direction === direction;
  }

  private setTotalCount(): void {
    const { totalCount, tableData }:
    {
      totalCount: number,
      tableData: any[]
    } = this.localTableConfig;

    this.localTableConfig.totalCount = totalCount !== null ? totalCount : tableData.length;
  }

  private isServerMode(): boolean {
    return this.localTableConfig.dataMode === GoTableDataSource.server;
  }

  private tableChangeOutcome(): void {
    this.tableChange.emit(this.localTableConfig);
  }

  private determineSelectionMode(): SelectionMode {
    return this.selectAllChecked ? SelectionMode.deselection : SelectionMode.selection;
  }

  private isRowInTargeted(row: any): boolean {
    return this.targetedRows.find((i: any) => i[this.localTableConfig.selectBy] === row[this.localTableConfig.selectBy]);
  }
  //#endregion
}
