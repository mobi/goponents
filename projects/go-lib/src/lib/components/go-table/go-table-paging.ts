export class GoTablePagingConfig {
  pageSizes: number[] = [20, 50, 100];
  perPage: number = 20;
  skip: number = 0;

  constructor(fields?: {
    pageSizes: number[];
    perPage?: number,
    skip?: number
  }) {
    if (fields) Object.assign(this, fields);
  }
}

