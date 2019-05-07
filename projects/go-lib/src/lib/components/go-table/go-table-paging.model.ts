export class GoTablePageConfig {
  offset: number = 0;
  pageSizes: number[] = [20, 50, 100];
  perPage: number = 20;

  constructor(fields?: {
    offset?: number,
    pageSizes: number[],
    perPage?: number
  }) {
    if (fields) Object.assign(this, fields);
  }
}

