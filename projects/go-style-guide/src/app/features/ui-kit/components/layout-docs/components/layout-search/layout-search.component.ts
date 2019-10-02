import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-search',
  templateUrl: './layout-search.component.html'
})
export class LayoutSearchComponent {

  basicExample_htmlLayout: string = `
  <go-layout>
    <go-header go-layout-header>
      <go-search go-header-middle>
        <app-search-test></app-search-test> <!-- or whatever component you want to use to show the results -->
      </go-search>
    </go-header>
    <go-side-nav go-layout-nav>
      <!-- Content for the nav is covered in the nav docs -->
    </go-side-nav>
  </go-layout>
  `;

  basicExample_module: string = `
  // Required imports for the layout, header, & search:
  import {
    GoHeaderModule,
    GoIconButtonModule,
    GoLayoutModule,
    GoSearchModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoHeaderModule,
      GoIconButtonModule,
      GoLayoutModule,
      GoSearchModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  basicExample_ts: string = `
  import { GoSearchService } from '@tangoe/goponents';
  import { YourService } from './your.service';

  @Component({
    selector: 'app-search-test',
    templateUrl: './search-test.component.html'
  })
  export class SearchTestComponent implements OnInit {

    results: any[];

    constructor(
      private searchService: GoSearchService,
      private yourService: YourService
    ) {
      // Do this if you need to change the minimum number of
      // characters to trigger the search, default is 3.
      this.searchService.termLength = 2;

      // Do this if you need to set a custom message if you have
      // no results from the service, default is 'No Results Found'
      this.searchService.noResultsMessage = 'Custom Message Here';
    }

    ngOnInit(): void {
      // subscribe to events of searchTerm
      this.searchService.searchTerm.subscribe((searchTerm: string) => {

        // this section is dependent upon what the data looks like,
        // but when a new searchTerm is fired, go get data
        this.yourService
            .getData(searchTerm)
            .subscribe((results: any[]) => {
              if (results.length === 0) {
                // if yourService did not return any results
                this.results = null;
                this.searchService.notFoundResponse();
              } else {
                // if yourService did return results
                this.results = results;
                this.searchService.successResponse();
              }
            });
      });
    }
  }
  `;

  basicExample_html: string = `
  <!--
    This is just an example of displaying the data.
    It is up to the implementor to format and style the results.
    -->
  <table>
    <tr *ngFor="let item of results">
      <td>{{ item.id }}</td>
      <td>{{ item.name.first }}</td>
      <td>{{ item.name.last }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.gender }}</td>
      <td>{{ item.ip_address }}</td>
    </tr>
  </table>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Search';
  }
}
