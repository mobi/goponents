import { GoTablePageConfig } from './go-table-paging.model';
import { GoTableSortConfig } from './go-table-sort.model';
import { GoTableSearchConfig } from './go-table-search-config.model';

export class GoTableConfig<T = any> {
  dataMode: GoTableDataSource = GoTableDataSource.client;
  noDataText: string = 'No Data';
  pageable: boolean = true;
  pageConfig: GoTablePageConfig = new GoTablePageConfig();
  preselected: boolean = false;
  searchConfig: GoTableSearchConfig = new GoTableSearchConfig();
  selectable: boolean = false;
  selectBy: string;
  sortConfig?: GoTableSortConfig;
  sortable: boolean = true;
  tableData: T[];
  totalCount: number = null;

  constructor(fields?: {
    dataMode?: GoTableDataSource,
    noDataText?: string,
    pageable?: boolean,
    pageConfig?: GoTablePageConfig,
    preselected?: boolean,
    searchConfig?: GoTableSearchConfig,
    selectable?: boolean,
    selectBy?: string,
    sortConfig?: GoTableSortConfig,
    sortable?: boolean,
    tableData: T[],
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
