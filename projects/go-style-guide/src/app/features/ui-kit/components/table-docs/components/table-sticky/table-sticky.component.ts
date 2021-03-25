import { Component, OnInit, ViewChild } from '@angular/core';
import { GoTableConfig } from 'projects/go-lib/src/lib/components/go-table';
import { GoTableComponent } from 'projects/go-lib/src/lib/components/go-table/go-table.component';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TableDocsService } from '../../table-docs.service';

@Component({
   templateUrl: './table-sticky.component.html'
})
export class TableStickyComponent implements OnInit {

  private destroy$: Subject<void> = new Subject();
  tableConfig: GoTableConfig;

  stickybutton: string = 'Sticky Header';
  stickyHeader: boolean = false;

 tableStickyConfig: string = `
  this.tableConfig = new GoTableConfig({
  stickyHeader: this.stickyHeader
  });`;

  tableStickyConfig_ts: string = `
  // import these at the top of the file
  import { GoTableConfig } from '@tangoe/goponents';

  // Set default configuration for sticky header table
  stickybutton: string = 'Sticky Header'
  stickyHeader: boolean = false;

  // Pass stickyHeader variable in table configuration
  this.tableConfig = new GoTableConfig({
    tableData: data,
    currentTableConfig.stickyHeader = this.stickyHeader;
  });

  // Change the stickyHeader variable value on click event
  changeStickyHeader(): void{
    if(!this.stickyHeader){
      this.stickyHeader=true;
      this.stickybutton = 'Non-Sticky Header'
    }else{
      this.stickyHeader=false;
      this.stickybutton = 'Sticky Header'
    }
    this.handleTableChange(this.tableConfig);
  }

  // Reconfigure the stickyHeader variable in table config while refresh the table
  handleTableChange(): void {
    this.tableConfig = new GoTableConfig({
        tableData: this.tableDocsService.generateData(20),
        stickyHeader: this.stickyHeader
      });
  }
  `;

  tableStickyConfig_html: string = `
    <go-table
      [tableConfig]="tableConfig"
      class="go-column go-column--100"
      tableTitle="Sticky Table Data"
      *ngIf="tableConfig"
      [showTableActions]="true"
      maxHeight="200px">
      <ng-container go-table-actions>
        <go-button (handleClick)="changeStickyHeader()">
          {{ this.stickybutton }}
        </go-button>
      </ng-container>
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
    private subNavService: SubNavService
  ) {
    this.subNavService.pageTitle = 'Table Sticky';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  ngOnInit(): void {
    this.tableConfig = new GoTableConfig({
          tableData: this.tableDocsService.generateData(20)
        });
  }

   ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleTableChange(): void {
    this.tableConfig = new GoTableConfig({
          tableData: this.tableDocsService.generateData(20),
          stickyHeader: this.stickyHeader
        });
  }

  changeStickyHeader(): void {
      if (!this.stickyHeader) {
      this.stickyHeader = true;
      this.stickybutton = 'Non-Sticky Header';
    } else {
      this.stickyHeader = false;
      this.stickybutton = 'Sticky Header';
    }
    this.handleTableChange();
  }

}
