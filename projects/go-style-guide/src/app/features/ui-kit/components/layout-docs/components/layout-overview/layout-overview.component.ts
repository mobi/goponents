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
  </go-layout>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Layout Overview';
  }
}
