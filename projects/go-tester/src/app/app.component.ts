import { Component } from '@angular/core';
import { GoTableConfig, GoTableSortConfig } from '../../../go-lib/src/lib/components/go-table';
import data from '../assets/MOCK_DATA_1000.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-tester';

  tableConfig = new GoTableConfig({
    sort: new GoTableSortConfig({
      column: 'name.first'
    }),
    tableData: data
  });

  constructor() { }
}
