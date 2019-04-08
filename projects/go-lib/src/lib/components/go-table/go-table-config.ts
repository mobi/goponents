import { GoTableSortConfig } from './go-table-sort';

export class GoTableConfig {
  noDataText?: string = 'No Data';
  sort?: GoTableSortConfig;
  sortable?: boolean = true;
  tableData: any[];

  constructor(fields?: {
    noDataText?: string,
    sort?: GoTableSortConfig,
    sortable?: boolean,
    tableData: any[]
  }) {
    if (fields) Object.assign(this, fields);
  }
}
