import { Component } from '@angular/core';
import { GoTableConfig } from 'projects/go-lib/src/public_api';
import { TableDocsService } from '../../table-docs.service';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  templateUrl: './table-templates.component.html',
  styleUrls: ['./table-templates.component.scss']
})
export class TableTemplatesComponent {
  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Templating';
  }

  ////////////////////////////

  columnTemplating: string = `
  <go-table [tableConfig]="tableConfig">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email">
      <ng-template #goTableCell let-item>
        <a class="go-link" href="mailto:{{ item.email }}">{{ item.email }}</a>
      </ng-template>
    </go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  headerTemplating: string = `
  <go-table class="go-column go-column--100" [tableConfig]="tableConfig" tableTitle="Header Template Example">
    ${this.customHeader('id', 'ID')}
    ${this.customHeader('name.first', 'First Name')}
    ${this.customHeader('name.last', 'Last Name')}
    ${this.customHeader('email', 'Primary Email')}
    ${this.customHeader('gender', 'Gender')}
    ${this.customHeader('ip_address', 'IP Address')}
  </go-table>
  `;

  tableConfig: object = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });


  // Private Functions
  // ===================

  private customHeader(column: string, field: string): string {
    return `
    <go-table-column field="${column}">
      <ng-template #goTableHead let-item>
        <div class="stacked-header">
          <span class="stacked-header__type">Person</span>
          ${field}
        </div>
      </ng-template>
    </go-table-column>
    `.trim();
  }
}
