import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GoSearchService } from '../../../../../go-lib/src/public_api';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html'
})
export class SearchTestComponent implements OnInit, OnDestroy {

  results: any[];

  private destroy$: Subject<void> = new Subject();

  constructor(
    private searchService: GoSearchService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.searchService.searchTerm

    .subscribe((searchTerm: string) => {
      // this section is dependent upon what the data looks like
      this.appService
          .getMockSearch(searchTerm)
          .pipe(takeUntil(this.destroy$))
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
