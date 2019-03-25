import { GoTableSortConfig } from './go-table-sort';

export class GoTableConfig {
  sort?: GoTableSortConfig;
  sortable?: boolean = true;
  tableData: any[];

  constructor(fields?: {
    sort?: GoTableSortConfig,
    sortable?: boolean,
    tableData: any[]
  }) {
    if (fields) Object.assign(this, fields);
  }
}
