import { Component, ViewChild } from '@angular/core';
import { TableDocsService } from '../../table-docs.service';
import {
  GoTableComponent,
  GoTableConfig,
  GoToasterService,
  RowSelectionEvent,
  SelectionState
} from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html'
})
export class TableSelectionComponent {

  @ViewChild('interactiveTable', { static: true }) interactiveTable: GoTableComponent;
  @ViewChild('eleRefTable', { static: true }) eleRefTable: GoTableComponent;

  tableSelectConfig: string = `
  class GoTableConfig {
    selectable: boolean; // defaults to false
    selectBy: string;
  }
  `;

  tableSelectionEventOutputs: string = `
  // Emits a \`RowSelectionEvent\` event when an individual row is selected or deselected.
  @Output() rowSelectionEvent: EventEmitter<RowSelectionEvent> = new EventEmitter<RowSelectionEvent>();
  // Emits a \`SelectionState\` event when all rows are selected or deselected via the select-all checkbox.
  @Output() selectAllEvent: EventEmitter<SelectionState> = new EventEmitter<SelectionState>();
  `;

  tableSelectionModels: string = `
  export interface RowSelectionEvent extends SelectionState {
    /**
     * The current row that was targeted for selection
     */
    currentRow: {
      /**
       * The entire data in the row
       */
      data: object;
      /**
       * Whether or not this row was selected (\`true\`) or deselected (\`false\`)
       */
      selected: boolean;
    };
  }

  export interface SelectionState {
    /**
     * The current deselected rows; if \`selectionMode\` is \`selection\` then this will always be an empty array
     */
    deselectedRows?: any[];

    /**
     * Defines the current mode of selection. \`selection\` will add items to \`selectedRows\`
     * and \`deselection\` will add items to \`deselectedRows\`.
     *
     * If in \`deselection\` mode, the UI toggle all checkboxes to true. Items instead will be added to \`deselectedRows\`
     * because they're being removed from the selection.
     */
    selectionMode: SelectionMode;

    /**
     * The current selected rows; if \`selectionMode\` is \`deselection\` then this will always be an empty array
     */
    selectedRows?: any[];
  }
  `;

  tableSelectionExample_html: string = `
  <go-table
    [tableConfig]="tableConfig"
    (rowSelectionEvent)="tableRowEvent($event)"
    (selectAllEvent)="selectAllEvent($event)">
    <!-- Table rows markup --!>
  </go-table>
  `;

  tableSelectionExample_ts: string = `
  tableRowEvent(rowEvent: RowSelectionEvent): void {
    // Do something with the rowEvent
  }

  selectAllEvent(selectionState: SelectionState): void {
    // Do something with the selectionState
  }
  `;

  eleRef_html: string = `
  <go-table
    [tableConfig]="eleRefTableConfig"
    tableTitle="Element Reference Example"
    [showTableActions]="true"
    #eleRefTable>
    <ng-container go-table-actions>
      <go-button (handleClick)="getSelectionState()">Selection State</go-button>
    </ng-container>
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  eleRef_ts: string = `
  import {
    GoTableComponent,
    GoTableConfig,
    SelectionState
  } from '@tangoe/goponents';

  eleRefTableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: [] // your array of data
  });

  @ViewChild('eleRefTable', { static: false }) eleRefTable: GoTableComponent;

  getSelectionState(): void {
    const state: SelectionState = this.eleRefTable.getSelectionState();

    // do something with the state
  }
  `;

  rowEvent_html: string = `
  <go-table
    [tableConfig]="rowEventTableConfig"
    tableTitle="Row Event Example"
    (rowSelectionEvent)="rowEventExample($event)">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  rowEvent_ts: string = `
  import {
    GoTableConfig,
    RowSelectionEvent,
    SelectionState
  } from '@tangoe/goponents';

  rowEventTableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: [] // your array of data
  });

  tableRowEvent(rowEvent: RowSelectionEvent): void {
    // do something with rowEvent
  }
  `;

  preselectedTable_html: string = `
  <go-table
    class="go-column go-column--100"
    [tableConfig]="preselectedTableConfig"
    tableTitle="Preselect All Rows">
    <go-table-column field="id" title="ID"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  preselectedTable_ts: string = `
  import {
    GoTableConfig
  } from '@tangoe/goponents';

  preselectedTableConfig: GoTableConfig = new GoTableConfig({
    preselected: true,
    selectBy: 'id',
    selectable: true,
    tableData: [] // your array of data
  });
  `;

  interactiveTableConfig: GoTableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: this.tableDocsService.generateData(20)
  });

  eleRefTableConfig: GoTableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: this.tableDocsService.generateData(20)
  });

  rowEventTableConfig: GoTableConfig = new GoTableConfig({
    selectBy: 'id',
    selectable: true,
    tableData: this.tableDocsService.generateData(20)
  });

  preselectedTableConfig: GoTableConfig = new GoTableConfig({
    preselected: true,
    selectBy: 'id',
    selectable: true,
    tableData: this.tableDocsService.generateData(20)
  });

  constructor(
    private tableDocsService: TableDocsService,
    private subNavService: SubNavService,
    private toasterService: GoToasterService
  ) {
    this.subNavService.pageTitle = 'Table Selection';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-table';
  }

  tableRowEvent(rowEvent: RowSelectionEvent): void {
    this.toasterService.toastInfo({ header: 'Row Event', message: 'Selection Mode: ' + rowEvent.selectionMode + '. ' }, 6000);
    this.toasterService.toastInfo({ header: 'Row Event', message: 'Selected Row Count: ' + rowEvent.selectedRows.length + '. ' }, 6000);
    this.toasterService.toastInfo({ header: 'Row Event', message: 'Deselected Row Count: ' + rowEvent.deselectedRows.length + '. ' }, 6000);
    this.toasterService.toastInfo(
      {
        header: 'Row Event',
        message: `Current Row Id: ${rowEvent.currentRow.data['id']}, ${rowEvent.currentRow.selected ? 'selected' : 'deselected'}.`
      },
      6000
    );
  }

  selectAllEvent(selectionState: SelectionState): void {
    this.toasterService.toastInfo(
      { header: 'Select All Event', message: 'Selection Mode: ' + selectionState.selectionMode + '. ' },
      6000
    );
    this.toasterService.toastInfo(
      { header: 'Select All Event', message: 'Selected Row Count: ' + selectionState.selectedRows.length + '. ' },
      6000
    );
    this.toasterService.toastInfo(
      { header: 'Select All Event', message: 'Deselected Row Count: ' + selectionState.deselectedRows.length + '. ' },
      6000
    );
  }

  interactiveTableState(): void {
    const state: SelectionState = this.interactiveTable.getSelectionState();
    this.tableSelectionState(state);
  }

  getSelectionState(): void {
    const state: SelectionState = this.eleRefTable.getSelectionState();
    this.tableSelectionState(state);
  }

  private tableSelectionState(state: SelectionState): void {
    this.toasterService.toastSuccess({ header: 'Selection State', message: 'Selection Mode: ' + state.selectionMode + '. ' }, 6000);
    // tslint:disable-next-line: max-line-length
    this.toasterService.toastSuccess({ header: 'Selection State', message: 'Selected Row Count: ' + state.selectedRows.length + '. ' }, 6000);
    // tslint:disable-next-line: max-line-length
    this.toasterService.toastSuccess({ header: 'Selection State', message: 'Deselected Row Count: ' + state.deselectedRows.length + '. ' }, 6000);
  }

}
