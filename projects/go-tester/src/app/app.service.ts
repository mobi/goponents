import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GoTableConfig, GoTablePageConfig, GoTableSortConfig } from '../../../go-lib/src/public_api';

// Only using this to emulate sorting for server side
import { sortBy } from '../../../go-lib/src/lib/components/go-table/go-table-utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  getMockData(params?: GoTableConfig): Observable<any> {
    return this.http.get<any>('../assets/MOCK_DATA_1000.json').pipe(map((data: any) => {
      const formattedData: any = { totalCount: 0, results: [] };

      formattedData.totalCount = data.length;

      if (params) {
        formattedData.results = params.sortConfig ? this.sortData(params.sortConfig, data) : formattedData.results;
        formattedData.results = params.pageConfig ? this.paginateData(params.pageConfig, data) : formattedData.results;
      } else {
        formattedData.results = data;
      }

      return formattedData;
    }));
  }

  getMockSearch(term: string): any {
    return this.http.get<any>('../assets/MOCK_DATA_1000.json').pipe(map((data: any) => {
      return data.filter((item: any) => {
        return item.id.toString().includes(term) ||
               item.name.first.includes(term) ||
               item.name.last.includes(term) ||
               item.email.includes(term);
      });
    }));
  }

  /***** Private Methods *****/
  private paginateData(paging: GoTablePageConfig, results: any[]): any[] {
    return results.slice(paging.offset, paging.offset + paging.perPage);
  }

  private sortData(sort: GoTableSortConfig, results: any[]): any[] {
    return results.sort(sortBy(sort.column, Boolean(sort.direction)));
  }


}
