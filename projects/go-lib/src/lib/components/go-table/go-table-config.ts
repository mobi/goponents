import { GoTablePageConfig } from './go-table-paging';
import { GoTableSortConfig } from './go-table-sort';

export class GoTableConfig {
  dataMode: GoTableDataSource = GoTableDataSource.client;
  noDataText: string = 'No Data';
  pageable: boolean = true;
  pageConfig: GoTablePageConfig = new GoTablePageConfig();
  sortConfig?: GoTableSortConfig;
  sortable: boolean = true;
  tableData: any[];
  totalCount?: number;

  constructor(fields?: {
    dataMode?: GoTableDataSource,
    noDataText?: string,
    pageable?: boolean,
    pageConfig?: GoTablePageConfig,
    sortConfig?: GoTableSortConfig,
    sortable?: boolean,
    tableData: any[],
    totalCount?: number
  }) {
    if (fields) Object.assign(this, fields);
  }
}

export enum GoTableDataSource {
  client,
  server
}
