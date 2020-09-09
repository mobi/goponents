import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './forms-overview.component.html'
})
export class FormsOverviewComponent {

  constructor(
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Forms Overview';
    this.subNavService.linkToSource = "https://github.com/mobi/goponents/tree/dev/projects/go-style-guide/src/app/features/standards/components/forms"
  }
}
