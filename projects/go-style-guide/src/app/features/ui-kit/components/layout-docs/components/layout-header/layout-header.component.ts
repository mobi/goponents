import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html'
})
export class LayoutHeaderComponent {

  componentBindings: string = `
  @Input() altText: string = '';
  @Input() logo: string = '';
  @Input() logoLink: string = '';
  @Input() logoLinkUseRouterLink: boolean = true;
  `;

  basicExample_module: string = `
  // Required imports for the layout & side nav:
  import {
    GoHeaderModule,
    GoIconButtonModule,
    GoLayoutModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoHeaderModule,
      GoIconButtonModule,
      GoLayoutModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  basicExample_html: string = `
  <go-layout>
    <go-header go-layout-header [logo]="logo" [altText]="'Tangoe Logo'">
      <go-search go-header-middle>
        <!-- Content for the go-search is covered in the search docs -->
      </go-search>
      <ng-container go-header-right>
        <!-- This content can be anything, but it's commonplace to have multiple action-sheets here -->
      </ng-container>
    </go-header>
    <go-side-nav go-layout-nav>
      <!-- Content for the nav is covered in the nav docs -->
    </go-side-nav>
  </go-layout>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Header';
  }
}
