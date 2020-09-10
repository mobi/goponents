import { Component } from '@angular/core';

import {
  GoTableConfig,
  GoToasterService
} from '../../../../../../../../../go-lib/src/public_api';
import { TableDocsService } from '../../table-docs.service';
import { SubNavService } from '../../../../../../shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title-template.component.html'
})
export class TableTitleTemplateComponent {

  headerTemplating: string = `
  <go-table [tableConfig]="tableConfig">
    <ng-template #goTableTitle>
      <h4
        class="go-heading-4 go-heading--no-margin"
        style="padding: 1rem;">
        Example Title Template
      </h4>
      <go-icon-button
        buttonIcon="save_alt"
        (handleClick)="makeToast()">
      </go-icon-button>
    </ng-template>
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService,
    private toasterService: GoToasterService
  ) {
    this.subNavService.pageTitle = 'Title Template';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(5)
  });

  makeToast(): void {
    this.toasterService.toastSuccess({
      message: 'Save Icon Clicked!'
    });
  }

}
