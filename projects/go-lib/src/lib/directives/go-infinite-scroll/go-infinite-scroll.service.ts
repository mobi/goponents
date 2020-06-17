import { Injectable } from '@angular/core';
import { DataSource, GoInfiniteScrollConfig } from './go-infinite-scroll-config.model';

@Injectable()
export class GoInfiniteScrollService {
  data: Object = {};
  dataComplete: Object = {};
  private allData: Object = {};

  setInitialData(config: GoInfiniteScrollConfig, data: any[]): void {
    if (config.dataMode === DataSource.server) {
      this.data[config.identifier] = data;
      config.index = this.data[config.identifier].length;
      this.setDataComplete(config, false);
    } else {
      this.allData[config.identifier] = data;
      this.data[config.identifier] = [];
      this.loadMoreClient(config);
    }
  }

  LoadMoreData(config: GoInfiniteScrollConfig, data: any[]): void {
    this.data[config.identifier].concat(data);
    for (let i: number = 0; i < data.length; i++) {
      this.data[config.identifier].push(data[i]);
    }
    config.index = this.data[config.identifier].length;
    this.setDataComplete(config, false);
  }

  setDataComplete(config: GoInfiniteScrollConfig, hasChanged: boolean): void {
    this.dataComplete[config.identifier] = hasChanged;
  }

  loadMoreClient(config: GoInfiniteScrollConfig): void {
    for (let i: number = 0; i < config.perPage; i++) {
      const data: any = this.allData[config.identifier][config.index];
      if (!this.isNullOrUndefined(data)) {
        this.data[config.identifier].push(data);
        config.index ++;
      }
    }
    this.setDataComplete(config, false);
  }

  private isNullOrUndefined(data: any): boolean {
    return data === undefined || data === null;
  }
}
