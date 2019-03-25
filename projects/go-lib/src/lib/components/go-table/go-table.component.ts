import { Component, ContentChildren, Input, OnChanges, QueryList } from '@angular/core';
import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableConfig, SortDirection } from './index';
import { sortBy } from './go-table-utils';

@Component({
  selector: 'go-table',
  templateUrl: './go-table.component.html',
  styleUrls: ['./go-table.component.scss']
})
export class GoTableComponent implements OnChanges {

  @Input() tableConfig: GoTableConfig;

  @ContentChildren(GoTableColumnComponent) columns: QueryList<GoTableColumnComponent>;

  ngOnChanges() {
    this.renderTable();
  }

  renderTable() {
    if (this.tableConfig!.tableData) {
      this.handleSort();
    }
  }

  columnClasses(columnField: string) : object {
    return {
      'go-table__th--sort-up': (this.tableConfig!.sort.column === columnField && this.tableConfig!.sort.direction === SortDirection.ascending),
      'go-table__th--sort-down': (this.tableConfig!.sort.column === columnField && this.tableConfig!.sort.direction === SortDirection.descending)
    }
  }

  toggleSort(columnField: string) {
    if (this.tableConfig!.tableData && this.tableConfig.sortable) {
      if (this.tableConfig!.sort.column == columnField) {
        this.tableConfig.sort.direction = this.tableConfig.sort.direction == SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
      } else {
        this.tableConfig.sort = { column: columnField, direction: SortDirection.ascending };
      }
      this.handleSort();
    }
  }
  
  /** Private Methods **/
  private handleSort() {
    if (this.tableConfig!.sort && this.tableConfig!.sortable && this.tableConfig!.tableData) {
      this.tableConfig.tableData.sort(sortBy(this.tableConfig.sort.column, Boolean(this.tableConfig.sort.direction)));
    }
  }

}
