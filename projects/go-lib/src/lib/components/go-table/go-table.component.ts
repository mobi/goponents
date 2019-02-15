import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Actions } from './actions';

@Component({
  selector: 'go-table',
  templateUrl: 'go-table.component.html',
  styleUrls: ['go-table.component.scss']
})
export class GoTableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: any[];
  @Input() sortableColumns: any[];
  @Input() actions: Actions;
  
  public tableDataSource$ = new BehaviorSubject<any[]>(this.data);
  public activeColumn: string;
  public sortDirection: string = 'sort-up';

  constructor() {}

  ngOnInit() {
    this.activeColumn = this.sortableColumns[0];
    this.sortByColumn(this.activeColumn);

    if (this.actions && this.columns.indexOf('actions') === -1) {
      this.columns.push('actions');
    }
  }

  // Public Methods
  // ================================================

  public sortByColumn(col: string) {
    if (!this.sortableColumns.includes(col)) { return; }

    // Update Sort Classes
    this.setSortDirection(col);

    // Sort ascending if Sort down
    if (this.sortDirection === 'sort-up') {
      this.sortAscending(col);
    } else {
      // Must be sort up, sort descending.
      this.sortDescending(col);
    }
  }

  public sortClass(col: string) {
    return {
      'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
      'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
    };
  }

  // Private Methods
  // ================================================

  private sortDescending(col: string) {
    let sortedData = this.data.sort((a, b) => {
      if (a[col] < b[col]) { return -1; }
      if (a[col] > b[col]) { return 1; }
      return 0;
    });

    this.updateTableData(sortedData);
  }

  private sortAscending(col: string) {
    let sortedData = this.data.sort((a, b) => {
      if (a[col] > b[col]) { return -1; }
      if (a[col] < b[col]) { return 1; }
      return 0;
    });

    this.updateTableData(sortedData);
  }

  private updateTableData(data: any): void {
    let values = Object.keys(data).map((key: any) => data[key]);

    this.tableDataSource$.next(values);
  }

  private setSortDirection(col: string): void {
    let currentColumn = this.activeColumn;
    let sortDirection = this.sortDirection;

    this.activeColumn = col;

    if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
      this.sortDirection = 'sort-down';
    } else {
      this.sortDirection = 'sort-up';
    }
  }

}
