import { GoTablePagingConfig } from './go-table-paging';
import { GoTableSortConfig } from './go-table-sort';

export class GoTableConfig {
  dataMode: GoTableDataMode = GoTableDataMode.client;
  noDataText: string = 'No Data';
  pageable: boolean = true;
  paging: GoTablePagingConfig = new GoTablePagingConfig();
  sort?: GoTableSortConfig;
  sortable: boolean = true;
  tableData: any[];
  totalCount?: number;

  constructor(fields?: {
    dataMode?: GoTableDataMode,
    noDataText?: string,
    pageable?: boolean,
    paging?: GoTablePagingConfig,
    sort?: GoTableSortConfig,
    sortable?: boolean,
    tableData: any[],
    totalCount?: number
  }) {
    if (fields) Object.assign(this, fields);
  }
}

export enum GoTableDataMode {
  client,
  server
}
