import { Component, OnInit } from '@angular/core';

import { GoSearchService } from '../../../../go-lib/src/public_api';

import { AppService } from '../app.service';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html'
})
export class SearchTestComponent implements OnInit {

  results: any[];

  constructor(
    private searchService: GoSearchService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.searchService.searchTerm.subscribe(searchTerm => {
      // this section is dependent upon what the data looks like
      // the loader and hasResults should be updated accordingly
      this.appService
          .getMockSearch(searchTerm)
          .subscribe(results => {
            setTimeout(() => {
              if (results.length === 0) {
                this.results = null;
                this.searchService.notFoundResponse();
              } else {
                this.results = results;
                this.searchService.successResponse();
              }
            }, 1000);
          });
    });
  }
}
