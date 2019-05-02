import { Component, OnInit } from '@angular/core';
import { GoTableConfig, GoMessageService } from '../../../go-lib/src/public_api';
import data from '../assets/MOCK_DATA_1000.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'go-tester';

  tableConfig = new GoTableConfig({
    noDataText: 'Not a single data.',
    tableData: data
  });

  constructor(private goMessageService: GoMessageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.goMessageService.sendMessage('Hey, this is a test!', 'HI!');
    }, 3000);
  }
}
