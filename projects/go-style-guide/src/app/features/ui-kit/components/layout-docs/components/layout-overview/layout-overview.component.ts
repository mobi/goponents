import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-overview',
  templateUrl: './layout-overview.component.html'
})
export class LayoutOverviewComponent {

  basicExample_module: string = `
  // Required imports for the layout:
  import {
    GoFooterModule,
    GoHeaderModule,
    GoIconButtonModule,
    GoLayoutModule,
    GoSideNavModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoFooterModule,
      GoHeaderModule,
      GoIconButtonModule,
      GoLayoutModule,
      GoSideNavModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  basicExample_html: string = `
  <go-layout>
    <go-header go-layout-header>
      <!-- Content for the header is covered in the header docs -->
    </go-header>
    <go-side-nav go-layout-nav>
      <!-- Content for the nav is covered in the nav docs -->
    </go-side-nav>
    <div go-layout-main>
      <!-- Any content that will appear at the top of every page goes here -->
    </div>
    <go-footer go-layout-footer>
      <!-- Content for the footer is covered in the footer docs -->
    </go-footer>
  </go-layout>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Layout Overview';
  }
}
