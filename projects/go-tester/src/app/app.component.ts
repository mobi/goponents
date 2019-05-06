import { Component, OnInit } from '@angular/core';
import { GoTableConfig, GoToasterService } from '../../../go-lib/src/public_api';
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

  constructor(private goToasterService: GoToasterService) { }

  ngOnInit() {
    setTimeout(() => {
      this.goToasterService.toastInfo({ message: 'Check this out'});
    }, 1500);
  }
}
