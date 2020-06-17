export class GoInfiniteScrollConfig {
  dataMode: DataSource = DataSource.server;
  identifier: string;
  index: number = 0;
  perPage: number = 20;

  constructor(fields?: {
    dataMode?: DataSource,
    identifier?: string,
    index?: number,
    perPage?: number
  }) {
    if (fields) { Object.assign(this, fields); }
    if (this.dataMode === DataSource.client && !this.identifier) {
      throw new Error('GoInfiniteScroll: identifier cannot be null if dataMode is client');
    }
  }
}

export enum DataSource {
  client,
  server
}
