export class GoTableSortConfig {
  column: string;
  direction: SortDirection = SortDirection.ascending;

  constructor(fields?: {
    column: string,
    direction?: SortDirection
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}

export enum SortDirection {
  ascending = 1,
  descending = 0
}
