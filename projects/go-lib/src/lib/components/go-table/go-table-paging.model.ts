export class GoTablePageConfig {
  offset: number = 0;
  pageSizes: number[] = [10, 25, 50];
  perPage: number = 10;

  constructor(fields?: {
    offset?: number,
    pageSizes: number[],
    perPage?: number
  }) {
    if (fields) Object.assign(this, fields);
  }
}

