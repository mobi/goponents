import { Component } from '@angular/core';
import { GoTableConfig } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { TableDocsService } from '../../table-docs.service';

@Component({
  selector: 'app-table-column-docs',
  templateUrl: './table-column-docs.component.html'
})
export class TableColumnDocsComponent {
  constructor(private tableDocsService: TableDocsService, private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Table Columns';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  componentBindings: string = `
  @Input() alignment: 'top' | 'middle' | 'bottom' = 'middle';
  @Input() field:      string;
  @Input() searchable: boolean = true;
  @Input() sortable?:  boolean = true;
  @Input() title:      string;
  @Input() width:      number;
  @Input() wrapContent: boolean = null;
  `;

  fieldExample: string = `
  new GoTableConfig({
    tableData: [
      {
        id: 0,
        name: {
          first: John,
          last: Smith
        }
      }
    ]
  });
  `;

  basicExample_html: string = `
  <go-table [tableConfig]="tableConfig" tableTitle="Example Usage">
    <go-table-column field="id" [sortable]="false" width="5"></go-table-column>
    <go-table-column field="active"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" width="50"></go-table-column>
    <go-table-column field="gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
    <go-table-column field="last_login" title="Last Login" [wrapContent]="false"></go-table-column>
    <go-table-column field="alive"></go-table-column>
    <go-table-column field="login_attempts" title="Login Attempts"></go-table-column>
  </go-table>
  `;

  basicExample_ts: string = `
  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.data
  });
  `;

  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(5)
  });
}
