import { Component } from '@angular/core';

import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html'
})
export class LayoutFooterComponent {
  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Footer';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-footer';
  }

  basicExample_module: string = `
  // Required imports for the layout & side nav:
  import {
    GoFooterModule,
    GoHeaderModule,
    GoIconButtonModule,
    GoLayoutModule
  } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      GoFooterModule,
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
    <go-header go-layout-header>
      <!-- Content for the header is covered in the header docs -->
    </go-header>
    <go-side-nav go-layout-nav>
      <!-- Content for the side nav is covered in the side nav docs -->
    </go-side-nav>
    <go-footer go-layout-footer>
      <!-- This content can be anything that you want to show at the end of every page -->
      {{ date }}
    </go-footer>
  </go-layout>
  `;

  basicExample_component: string = `
  date: Date = new Date();
  `;
}
