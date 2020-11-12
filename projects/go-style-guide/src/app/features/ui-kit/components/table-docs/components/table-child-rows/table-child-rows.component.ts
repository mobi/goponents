import { Component } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import {
  GoTableConfig,
  GoToasterService
} from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-table-child-rows',
  templateUrl: './table-child-rows.component.html'
})
export class TableChildRowsComponent {

  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(20)
  });

  tableChildRowsExample: string = `
  <go-table
    [tableConfig]="tableConfig"
    childRowsKey="children"
    tableTitle="Table Child Rows">

    <!-- Parent Rows -->
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>

    <!-- Child Rows -->
    <ng-container #goTableChildRows>
      <!-- 'field' refers to properties on child row object -->
      <go-table-child-column field="id"></go-table-child-column>
      <go-table-child-column field="name.first"></go-table-child-column>
      <go-table-child-column field="name.last"></go-table-child-column>
      <go-table-child-column field="ip_address"></go-table-child-column>
    </ng-container>
  </go-table>
  `;

  tableChildRowsTemplateExample: string = `
  <go-table
    [tableConfig]="tableConfig"
    childRowsKey="children"
    tableTitle="Table Child Rows">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
    <!-- Add an empty column here for an 'actions' column in the child rows -->
    <go-table-column width="60"></go-table-column>

    <ng-container #goTableChildRows>
      <go-table-child-column field="id"></go-table-child-column>
      <go-table-child-column field="name.first"></go-table-child-column>
      <go-table-child-column field="name.last"></go-table-child-column>
      <go-table-child-column field="ip_address"></go-table-child-column>
      <go-table-child-column width="60">
        <!--
          - Define the child column template with #goTableCell
          - let-childItem allows use of the targeted child row object
          - let-parentItem="parentItem" allows use of the targeted parent row
        -->
        <ng-template #goTableCell let-childItem let-parentItem="parentItem">
          <go-icon-button
            buttonIcon="explore"
            (handleClick)="logRow(parentItem, childItem)">
          </go-icon-button>
        </ng-template>
      </go-table-child-column>
    </ng-container>
  </go-table>
  `;

  tableChildRowsTemplateExample_ts: string = `
  logRow(parentItem: any, childItem: any): void {
    this.toasterService.toastInfo({
      header: 'Child Row Clicked!',
      message: \`
        Child Name: \${childItem.name.first}<br/>
        Parent Name: \${parentItem.name.first}
      \`
    });
  }
  `;

  constructor(
    private tableDocsService: TableDocsService,
    private toasterService: GoToasterService,
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Child Rows';
  }

  logRow(parentItem: any, childItem: any): void {
    this.toasterService.toastInfo({
      header: 'Child Row Clicked!',
      message: `
        Child Name: ${childItem.name.first}<br/>
        Parent Name: ${parentItem.name.first}
      `
    });
  }
}
