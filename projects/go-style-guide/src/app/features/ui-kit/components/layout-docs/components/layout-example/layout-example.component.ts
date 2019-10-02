import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-example',
  templateUrl: './layout-example.component.html'
})
export class LayoutExampleComponent {

  example_app_module: string = `
  import {
    GoHeaderModule,
    GoIconButtonModule,
    GoLayoutModule,
    GoSearchModule,
    GoSideNavModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoHeaderModule,
      GoIconButtonModule,
      GoLayoutModule,
      GoSearchModule,
      GoSideNavModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  example_app_html: string = `
  <go-layout>
    <go-header go-layout-header [logo]="logo" [altText]="'Tangoe Logo'">
      <go-search go-header-middle>
        <app-search-test></app-search-test>
      </go-search>
      <ng-container go-header-right>
        <go-icon-button buttonIcon="add_circle"></go-icon-button>
      </ng-container>
    </go-header>
    <go-side-nav go-layout-nav [menuItems]="menuItems">
    </go-side-nav>
  </go-layout>
  `;

  example_app_ts: string = `
  import {
    NavGroup,
    NavItem
  } from '@tangoe/goponents';

  logo: string = 'url-to-your-logo/go-design.png';
  title: string = 'Go Design';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', description: 'Test Routes', subRoutes: [
      { route: 'test-page-1', routeTitle: 'Test 1', description: 'Test Route 1' },
      { route: 'test-page-2', routeTitle: 'Test 2' }
    ]}
  ];
  `;

  example_search_html: string = `
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

  example_search_ts: string = `
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
    ) { }

    ngOnInit(): void {
      this.searchService.searchTerm.subscribe((searchTerm: string) => {

        this.yourService
            .getData(searchTerm)
            .subscribe((results: any[]) => {
              if (results.length === 0) {
                this.results = null;
                this.searchService.notFoundResponse();
              } else {
                this.results = results;
                this.searchService.successResponse();
              }
            });
      });
    }
  }
  `;
}
