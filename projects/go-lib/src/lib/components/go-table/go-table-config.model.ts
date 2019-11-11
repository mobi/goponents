import { GoTablePageConfig } from './go-table-paging.model';
import { GoTableSortConfig } from './go-table-sort.model';

export class GoTableConfig {
  dataMode: GoTableDataSource = GoTableDataSource.client;
  noDataText: string = 'No Data';
  pageable: boolean = true;
  pageConfig: GoTablePageConfig = new GoTablePageConfig();
  preselected: boolean = false;
  selectable: boolean = false;
  selectBy: string;
  sortConfig?: GoTableSortConfig;
  sortable: boolean = true;
  tableData: any[];
  totalCount: number = null;

  constructor(fields?: {
    dataMode?: GoTableDataSource,
    noDataText?: string,
    pageable?: boolean,
    pageConfig?: GoTablePageConfig,
    preselected?: boolean,
    selectable?: boolean,
    selectBy?: string,
    sortConfig?: GoTableSortConfig,
    sortable?: boolean,
    tableData: any[],
    totalCount?: number
  }) {
    if (fields) { Object.assign(this, fields); }
    if (this.selectable && !this.selectBy) { throw new Error('GoTableConfig: selectBy cannot be null if selectable is true'); }
  }
}

export enum GoTableDataSource {
  client,
  server
}
