import { Component } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import {
  GoTableConfig
} from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html'
})
export class TableDetailsComponent {
  tableDetailsConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });

  tableDetailsExample: string = `
  <go-table class="go-column go-column--100"
            [tableConfig]="tableDetailsConfig"
            tableTitle="Table Details">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
    <go-table-details>
      <ng-template #goTableDetails let-item>
        <div>Email: <a class="go-link" href="mailto:{{ item.email }}">{{ item.email }}</a></div>
        <div>Gender: {{ item.gender }}</div>
      </ng-template>
    </go-table-details>
  </go-table>
  `;

  tableDetailsComponentExample: string = `
  <go-table class="go-column go-column--100"
              [tableConfig]="tableDetailsConfig"
              tableTitle="Table Details">
      <go-table-column field="id" title="ID"></go-table-column>
      <go-table-column field="name.first" title="First Name"></go-table-column>
      <go-table-column field="name.last" title="Last Name"></go-table-column>
      <go-table-column field="ip_address" title="IP Address"></go-table-column>
      <go-table-details>
        <ng-template #goTableDetails let-item>
          <app-table-details-test [row]="item"></app-table-details-test>
        </ng-template>
      </go-table-details>
    </go-table>
  `;

  testComponent: string = `
  loading: boolean = false;

  @Input() row: any;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  `;

  testComponentHtml: string = `
  <go-loader *ngIf="loading"></go-loader>

  <span  *ngIf="!loading">
    <go-icon [icon]="row.icon"></go-icon>
    Id: {{ row.id }}
  </span>
  `;

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Details';
  }
}
