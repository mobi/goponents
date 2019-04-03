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

  localTableConfig: GoTableConfig;

  ngOnChanges() {
    this.renderTable();
  }

  renderTable() {
    if (this.tableConfig!.tableData) {
      this.localTableConfig = JSON.parse(JSON.stringify(this.tableConfig));
      this.handleSort();
    }
  }

  columnClasses(columnField: string) : object {
    return {
      'go-table__th--sort-up': (this.localTableConfig.sort && this.localTableConfig.sort.column === columnField && this.localTableConfig.sort.direction === SortDirection.ascending),
      'go-table__th--sort-down': (this.localTableConfig.sort && this.localTableConfig.sort.column === columnField && this.localTableConfig.sort.direction === SortDirection.descending)
    }
  }

  toggleSort(columnField: string) {
    if (this.localTableConfig.tableData && this.localTableConfig.sortable) {
      if (this.localTableConfig.sort && this.localTableConfig.sort.column == columnField) {
        this.localTableConfig.sort.direction = this.localTableConfig.sort.direction == SortDirection.ascending ? SortDirection.descending : SortDirection.ascending;
      } else {
        this.localTableConfig.sort = { column: columnField, direction: SortDirection.ascending };
      }
      this.handleSort();
    }
  }
  
  /** Private Methods **/
  private handleSort() {
    if (this.localTableConfig.sort && this.localTableConfig.sortable && this.localTableConfig.tableData && this.localTableConfig.sort.column) {
      this.localTableConfig.tableData.sort(sortBy(this.localTableConfig.sort.column, Boolean(this.localTableConfig.sort.direction)));
    }
  }

}
