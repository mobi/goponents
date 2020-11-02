import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

import { GoTableConfig, GoTableDataSource } from './go-table-config.model';
import { GoTablePage } from './go-table-page.model';
import { RowSelectionEvent, SelectionMode, SelectionState } from './go-table-selection.model';
import { GoTableSortConfig, SortDirection } from './go-table-sort.model';

import { GoTableComponent } from './go-table.component';
import { Component, SimpleChange } from '@angular/core';
import { GoTableColumnComponent } from './go-table-column.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoCheckboxModule } from '../go-checkbox/go-checkbox.module';
import { GoSelectModule } from '../go-select/go-select.module';

@Component({
  selector: 'go-table-test',
  template: `
    <go-table [tableConfig]="tableConfig">
      <go-table-column field="id" title="ID" [searchable]="false"></go-table-column>
      <go-table-column field="value" title="Value"></go-table-column>
      <go-table-column field="animal" title="Animal"></go-table-column>
    </go-table>
  `
})
class GoTestTableComponent {
  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: [
      { id: 1, value: 'a', animal: 'puppy' },
      { id: 2, value: 'b', animal: 'kitten' },
      { id: 3, value: 'c', animal: 'koala bear' }
    ]
  });
}

describe('GoTableComponent', () => {
  let component: GoTableComponent;
  let fixture: ComponentFixture<GoTestTableComponent>;
  const tableConfig: GoTableConfig = new GoTableConfig({
    pageable: true,
    tableData: []
  });

  const fakeTableData: any = [
    { id: 1, value: 'a', animal: 'puppy' },
    { id: 2, value: 'b', animal: 'kitten' },
    { id: 3, value: 'c', animal: 'koala bear' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTableComponent, GoTableColumnComponent, GoTestTableComponent ],
      imports: [
        FormsModule,
        GoCheckboxModule,
        GoIconButtonModule,
        GoIconModule,
        GoLoaderModule,
        GoSelectModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestTableComponent);
    component = fixture.debugElement.children[0].componentInstance;
    component.tableConfig = tableConfig;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('outputResultsPerPage', () => {

    beforeEach(() => {
      component.localTableConfig.totalCount = 135;
    });

    it('calculates first number based on offset', () => {
      component.localTableConfig.pageConfig.perPage = 50;
      component.localTableConfig.pageConfig.offset = 10;

      const resultSet: string = component.outputResultsPerPage();
      const firstNumber: number = component.localTableConfig.pageConfig.offset + 1;
      const secondNumber: number = component.localTableConfig.pageConfig.offset + component.localTableConfig.pageConfig.perPage;

      expect(resultSet).toBe(firstNumber +  ' - ' + secondNumber);
    });

    it('calculates last number as totalCount if on last page', () => {
      component.localTableConfig.pageConfig.perPage = 50;
      component.localTableConfig.pageConfig.offset = 100;

      const resultSet: string = component.outputResultsPerPage();
      const firstNumber: number = component.localTableConfig.pageConfig.offset + 1;

      expect(resultSet).toBe(firstNumber + ' - ' + component.localTableConfig.totalCount);
    });

    it('calculates last number as remainder of page if not on last page', () => {
      component.localTableConfig.pageConfig.perPage = 50;
      component.localTableConfig.pageConfig.offset = 50;

      const resultSet: string = component.outputResultsPerPage();
      const firstNumber: number = component.localTableConfig.pageConfig.offset + 1;
      const secondNumber: number = component.localTableConfig.pageConfig.offset + component.localTableConfig.pageConfig.perPage;

      expect(resultSet).toBe(firstNumber + ' - ' + secondNumber);
    });
  });

  describe('toggleSort', () => {
    beforeEach(() => {
      spyOn(component.tableChange, 'emit');
    });

    afterEach(() => {
      component.tableConfig = tableConfig;
    });

    it('should update columns if column is sortable', () => {
      component.toggleSort(true, 'value');
      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should not update columns if column is not sortable', () => {
      component.toggleSort(false, 'value');
      expect(component.tableChange.emit).not.toHaveBeenCalled();
    });

    it('should update columns if column sortable is undefined, but table is sortable', () => {
      component.tableConfig.sortable = true;
      component.toggleSort(undefined, 'value');
      expect(component.tableChange.emit).toHaveBeenCalled();
    });
  });

  describe('afterViewInit', () => {
    afterEach(() => {
      component.selectAllControl.setValue(false);
    });

    it('should select all rows if preselected', () => {
      component.tableConfig.preselected = true;
      component.ngAfterViewInit();
      expect(component.selectAllControl.value).toBe(true);
    });
  });

  describe('setPageByPageNumber', () => {
    beforeEach(() => {
      component.localTableConfig.totalCount = 135;
      component.localTableConfig.pageConfig.perPage = 10;
    });

    it('should set page number numbers from 1-5 if 5 pages exist and on first page', () => {
      component.setPageByPageNumber(1);
      for (let i: number = 0; i < 5; i++) {
        expect(component.pages[i].number).toBe(i + 1);
      }
    });

    it('should set page number numbers from 1-5 if 5 pages exist and on second page', () => {
      component.setPageByPageNumber(2);
      for (let i: number = 0; i < 5; i++) {
        expect(component.pages[i].number).toBe(i + 1);
      }
    });

    it('should set page numbers around middle number if all pages exist', () => {
      component.setPageByPageNumber(5);
      for (let i: number = 0; i < 5; i++) {
        // page numbers will be 3-7
        expect(component.pages[i].number).toBe(i + 3);
      }
    });

    it('should set page numbers to be the last 5 pages if on second to last page', () => {
      component.setPageByPageNumber(13);
      for (let i: number = 0; i < 5; i++) {
        // page numbers will be 10-14
        expect(component.pages[i].number).toBe(i + 10);
      }
    });

    it('should set page numbers to be the last 5 pages if on last page', () => {
      component.setPageByPageNumber(14);
      for (let i: number = 0; i < 5; i++) {
        // page numbers will be 10-14
        expect(component.pages[i].number).toBe(i + 10);
      }
    });

    it('should set page numbers to all pages if less than 5 pages exist', () => {
      component.localTableConfig.totalCount = 37;
      component.setPageByPageNumber(3);
      for (let i: number = 0; i < 4; i++) {
        // page numbers will be 1-4
        expect(component.pages[i].number).toBe(i + 1);
      }
      expect(component.pages.length).toBe(4);
    });

    it('should emit a tableChange for server side pagination', () => {
      spyOn(component.tableChange, 'emit');
      component.setPageByPageNumber(2);

      expect(component.tableChange.emit).toHaveBeenCalled();
    });
  });

  describe('getDisplayData', () => {
    beforeEach(() => {
      component.localTableConfig.tableData = fakeTableData;

      // reset data mode and paging to default values
      component.localTableConfig.dataMode = GoTableDataSource.client;
      component.localTableConfig.pageable = true;

      // ensures data is paginated when on
      component.localTableConfig.pageConfig.offset = 0;
      component.localTableConfig.pageConfig.perPage = 1;
    });

    it('returns all data when server mode is enabled', () => {
      component.localTableConfig.dataMode = GoTableDataSource.server;

      expect(component.getDisplayData()).toEqual(fakeTableData);
    });

    it('returns all data when paging mode is disabled', () => {
      component.localTableConfig.pageable = false;

      expect(component.getDisplayData()).toEqual(fakeTableData);
    });

    it('returns paginated data when paging mode is enabled and in client mode', () => {
      expect(component.getDisplayData()).toEqual([ fakeTableData[0] ]);
    });
  });

  describe('isRowSelected', () => {
    let isRowSelected: boolean;

    beforeEach(() => {
      component.selectAllControl.setValue(true);
      component.localTableConfig.tableData = fakeTableData;
      component.localTableConfig.selectBy = 'id';
      component.localTableConfig.selectable = true;
    });

    it('should return false if selectAll is checked and row is unchecked', () => {
      component.targetedRows = [fakeTableData[0]];

      isRowSelected = component.isRowSelected(fakeTableData[0]);

      expect(isRowSelected).toBe(false);
    });

    it('should return true if selectAll and row are both checked', () => {
      component.targetedRows = [fakeTableData[0]];

      isRowSelected = component.isRowSelected(fakeTableData[1]);

      expect(isRowSelected).toBe(true);
    });

    it('should return true if selectAll is not checked, but row is checked', () => {
      component.selectAllControl.setValue(false);
      component.targetedRows = [fakeTableData[0]];

      isRowSelected = component.isRowSelected(fakeTableData[0]);

      expect(isRowSelected).toBe(true);
    });
  });

  describe('selectionChange', () => {
    let value: boolean = true;

    beforeEach(() => {
      component.localTableConfig.tableData = fakeTableData;
      component.localTableConfig.selectBy = 'id';
      component.localTableConfig.selectable = true;
      component.selectAllIndeterminate = true;
      component.selectAllControl.setValue(true);
      component.targetedRows = [fakeTableData[0]];
    });

    afterEach(() => {
      value = true;
    });

    it('should set selectAllIndeterminate to false if SelectAll is active and checking only inactive checkbox', () => {
      component.selectionChange(value, fakeTableData[0]);

      expect(component.selectAllIndeterminate).toEqual(false);
    });

    it('should set selectAllIndeterminate to true if SelectAll is active and unchecking a checkbox', () => {
      component.selectAllIndeterminate = false;
      value = false;

      component.selectionChange(value, fakeTableData[1]);

      expect(component.selectAllIndeterminate).toEqual(true);
    });

    it('should remove row from targeted rows if selectAll is checked and row was previously unchecked', () => {
      component.selectionChange(value, fakeTableData[0]);

      expect(component.targetedRows).toEqual([]);
    });

    it('should add row to targeted rows if selectAll is checked and row was previously checked', () => {
      value = false;

      component.selectionChange(value, fakeTableData[1]);

      expect(component.targetedRows[1]).toEqual(fakeTableData[1]);
    });

    it('should remove row from targeted rows if selectAll is unchecked and row was previously checked', () => {
      component.selectAllControl.setValue(false);
      value = false;

      component.selectionChange(value, fakeTableData[0]);

      expect(component.targetedRows).toEqual([]);
    });

    it('should add row to targeted rows if selectAll is unchecked and row was previously unchecked', () => {
      component.selectAllControl.setValue(false);

      component.selectionChange(value, fakeTableData[1]);

      expect(component.targetedRows[1]).toEqual(fakeTableData[1]);
    });

    it('emits a rowSelectionEvent with selected rows if selectAll is unchecked', () => {
      const selectionEventData: RowSelectionEvent = {
        currentRow: {
          data: fakeTableData[1],
          selected: true
        },
        deselectedRows: [],
        selectionMode: SelectionMode.selection,
        selectedRows: [fakeTableData[0], fakeTableData[1]]
      };

      spyOn(component.rowSelectionEvent, 'emit');
      component.selectAllControl.setValue(false);

      component.selectionChange(value, fakeTableData[1]);

      expect(component.rowSelectionEvent.emit).toHaveBeenCalledWith(selectionEventData);
    });

    it('emits a rowSelectionEvent with deselected rows if selectAll is checked', () => {
      const selectionEventData: RowSelectionEvent = {
        currentRow: {
          data: fakeTableData[1],
          selected: true
        },
        deselectedRows: [fakeTableData[0], fakeTableData[1]],
        selectionMode: SelectionMode.deselection,
        selectedRows: []
      };
      spyOn(component.rowSelectionEvent, 'emit');

      component.selectionChange(value, fakeTableData[1]);

      expect(component.rowSelectionEvent.emit).toHaveBeenCalledWith(selectionEventData);
    });
  });

  describe('setupSelectAllControlSub', () => {
    beforeEach(() => {
      component.selectAllIndeterminate = true;
      component.selectAllControl.setValue(true);
      component.targetedRows = fakeTableData;
      component.tableConfig.selectable = true;
      component.tableConfig.selectBy = 'id';
      component.renderTable();
    });

    it('should set selectAllIndeterminate to false if selectAll toggled off', () => {
      component.selectAllControl.setValue(false);

      expect(component.selectAllIndeterminate).toBe(false);
    });

    it('shouldn\'t set selectAllIndeterminate to true if selectAll toggled on', () => {
      component.selectAllIndeterminate = false;
      component.selectAllControl.setValue(false);

      component.selectAllControl.setValue(true);

      expect(component.selectAllIndeterminate).toBe(false);
    });

    it('should reset targetedRows if toggling selectAll on', () => {
      component.selectAllControl.setValue(true);

      expect(component.targetedRows).toEqual([]);
    });

    it('should reset targetedRows if toggling selectAll off', () => {
      component.selectAllControl.setValue(false);

      expect(component.targetedRows).toEqual([]);
    });

    it('should emit a SelectionState event when selectAll is toggled', () => {
      const selectionEventData: SelectionState = {
        deselectedRows: [],
        selectionMode: SelectionMode.selection,
        selectedRows: []
      };
      spyOn(component.selectAllEvent, 'emit');

      component.selectAllControl.setValue(false);

      expect(component.selectAllEvent.emit).toHaveBeenCalledWith(selectionEventData);
    });
  });

  describe('getSelectionCount', () => {
    let selectionCount: number;

    beforeEach(() => {
      component.localTableConfig.totalCount = 5;
    });

    it('should return selected rows if selecting', () => {
      component.selectAllControl.setValue(false);
      component.targetedRows = fakeTableData;

      selectionCount = component.getSelectionCount();

      expect(selectionCount).toEqual(3);
    });

    it('should return total row count minus deselected rows if deselecting', () => {
      component.selectAllControl.setValue(true);
      component.targetedRows = fakeTableData;

      selectionCount = component.getSelectionCount();

      expect(selectionCount).toEqual(2);
    });
  });

  describe('getSelectionState', () => {
    let selectionState: SelectionState;

    it('should return deselected rows if select all is checked', () => {
      component.selectAllControl.setValue(true);
      component.targetedRows = fakeTableData;

      selectionState = component.getSelectionState();

      expect(selectionState.deselectedRows.length).toBe(3);
      expect(selectionState.selectedRows.length).toBe(0);
      expect(selectionState.selectionMode).toBe(SelectionMode.deselection);
    });

    it('should return selected rows if select all is not checked', () => {
      component.selectAllControl.setValue(false);
      component.targetedRows = fakeTableData;

      selectionState = component.getSelectionState();

      expect(selectionState.deselectedRows.length).toBe(0);
      expect(selectionState.selectedRows.length).toBe(3);
      expect(selectionState.selectionMode).toBe(SelectionMode.selection);
    });
  });

  describe('setupPageSizes', () => {
    it('should set value of pageSizeControl to that of pageConfig.perPage', () => {
      component.pageSizeControl.reset();
      component.localTableConfig.pageConfig.perPage = 25;

      component.setupPageSizes();

      expect(component.pageSizeControl.value).toEqual(component.localTableConfig.pageConfig.perPage);
    });

    it('should set pageConfig.perPage to new page size when pageSizeControl changes', () => {
      component.pageSizeControl.setValue(50);

      component.setupPageSizes();
      component.pageSizeControl.setValue(25);

      expect(component.localTableConfig.pageConfig.perPage).toEqual(component.pageSizeControl.value);
    });

    it('should call set page when pageSizeControl changes', () => {
      spyOn<any>(component, 'setPage');

      component.setupPageSizes();
      component.pageSizeControl.setValue(25);

      expect(component['setPage']).toHaveBeenCalled();
    });

    it('should emit table change event when pageSizeControl changes', () => {
      spyOn(component.tableChange, 'emit');

      component.setupPageSizes();
      component.pageSizeControl.setValue(25);

      expect(component.tableChange.emit).toHaveBeenCalled();
    });
  });

  describe('setFirstPage', () => {
    beforeEach(() => {
      spyOn(component.tableChange, 'emit');
    });

    afterEach(() => {
      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should set offset to 0 and emit changes', () => {
      component.localTableConfig.pageConfig.offset = 25;

      component.setFirstPage();

      expect(component.localTableConfig.pageConfig.offset).toBe(0);
    });
  });

  describe('prevPage', () => {
    beforeEach(() => {
      spyOn(component.tableChange, 'emit');
    });

    afterEach(() => {
      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should go to previous page', () => {
      component.localTableConfig.totalCount = 25;
      component.localTableConfig.pageConfig.offset = 20;
      component.localTableConfig.pageConfig.perPage = 5;

      component.prevPage();

      expect(component.localTableConfig.pageConfig.offset).toBe(15);
    });
  });

  describe('setLastPage', () => {
    beforeEach(() => {
      component.localTableConfig.totalCount = 25;
      component.localTableConfig.pageConfig.offset = 5;
      component.localTableConfig.pageConfig.perPage = 5;
      spyOn(component.tableChange, 'emit');
    });

    afterEach(() => {
      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should set offset to last page', () => {
      component.setLastPage();

      expect(component.localTableConfig.pageConfig.offset).toBe(20);
    });

    it('should set offset to last page if an odd amount of rows on the last page', () => {
      component.localTableConfig.totalCount = 26;

      component.setLastPage();

      expect(component.localTableConfig.pageConfig.offset).toBe(25);
    });
  });

  describe('isLastPage', () => {
    let isOnLastPage: boolean;

    beforeEach(() => {
      component.localTableConfig.totalCount = 26;
      component.localTableConfig.pageConfig.perPage = 5;
    });

    it('should return true if on last page', () => {
      component.localTableConfig.pageConfig.offset = 25;

      isOnLastPage = component.isLastPage();

      expect(isOnLastPage).toBe(true);
    });

    it('should return false if not on last page', () => {
      component.localTableConfig.pageConfig.offset = 20;

      isOnLastPage = component.isLastPage();

      expect(isOnLastPage).toBe(false);
    });
  });

  describe('nextPage', () => {
    beforeEach(() => {
      spyOn(component.tableChange, 'emit');
    });

    afterEach(() => {
      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should go to the next page', () => {
      component.localTableConfig.totalCount = 25;
      component.localTableConfig.pageConfig.offset = 5;
      component.localTableConfig.pageConfig.perPage = 5;

      component.nextPage();

      expect(component.localTableConfig.pageConfig.offset).toBe(10);
    });
  });

  describe('toggleSort', () => {
    beforeEach(() => {
      spyOn(component.tableChange, 'emit');
      component.localTableConfig.tableData = fakeTableData;
      component.localTableConfig.sortable = true;
      component.localTableConfig.sortConfig = new GoTableSortConfig({
        column: 'animal'
      });
    });

    it('should not make changes if no tableData', () => {
      component.localTableConfig.tableData = null;

      component.toggleSort(true, 'animal');

      expect(component.tableChange.emit).not.toHaveBeenCalled();
    });

    it('should not make changes if column is not sortable', () => {
      component.toggleSort(false, 'animal');

      expect(component.tableChange.emit).not.toHaveBeenCalled();
    });

    it('should not make changes if table is not sortable', () => {
      component.localTableConfig.sortable = false;

      component.toggleSort(undefined, 'animal');

      expect(component.tableChange.emit).not.toHaveBeenCalled();
    });

    it('should make changes if table is sortable', () => {
      component.toggleSort(undefined, 'animal');

      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should make changes if column is sortable', () => {
      component.localTableConfig.sortable = false;

      component.toggleSort(true, 'animal');

      expect(component.tableChange.emit).toHaveBeenCalled();
    });

    it('should switch sort direction if already sorting on that column', () => {
      component.toggleSort(undefined, 'animal');

      expect(component.localTableConfig.sortConfig.direction).toEqual(SortDirection.descending);
    });

    it('should set tableSortConfig to column if not already sorting on that column', () => {
      component.toggleSort(undefined, 'id');

      expect(component.localTableConfig.sortConfig.direction).toEqual(SortDirection.ascending);
      expect(component.localTableConfig.sortConfig.column).toEqual('id');
    });

    it('should set page to first page', () => {
      component.localTableConfig.pageConfig.offset = 25;

      component.toggleSort(undefined, 'animal');

      expect(component.localTableConfig.pageConfig.offset).toBe(0);
    });

    it('should sort on column if not server mode', () => {
      const sortedTableData: any[] = [
        { id: 1, value: 'a', animal: 'puppy' },
        { id: 3, value: 'c', animal: 'koala bear' },
        { id: 2, value: 'b', animal: 'kitten' }
      ];

      component.localTableConfig.dataMode = GoTableDataSource.client;

      component.toggleSort(undefined, 'animal');

      expect(component.localTableConfig.tableData).toEqual(sortedTableData);
    });

    it('should not sort columns if server mode', () => {
      component.localTableConfig.dataMode = GoTableDataSource.server;

      component.toggleSort(undefined, 'animal');

      expect(component.localTableConfig.tableData).toEqual(fakeTableData);
    });
  });

  describe('showPaging', () => {
    let shouldShowPaging: boolean;

    beforeEach(() => {
      component.localTableConfig.tableData = fakeTableData;
      component.localTableConfig.pageable = true;
    });

    it('returns true if it has data and pagination enabled', () => {
      shouldShowPaging = component.showPaging();

      expect(shouldShowPaging).toBe(true);
    });

    it('returns false if data is empty', () => {
      component.localTableConfig.tableData = [];

      shouldShowPaging = component.showPaging();

      expect(shouldShowPaging).toBe(false);
    });

    it('returns false if pagination is disabled', () => {
      component.localTableConfig.pageable = false;

      shouldShowPaging = component.showPaging();

      expect(shouldShowPaging).toBe(false);
    });
  });

  describe('sortIcons', () => {
    let sortIcon: string;
    beforeEach(() => {
      component.localTableConfig.sortConfig = new GoTableSortConfig({
        column: 'id',
        direction: SortDirection.ascending
      });
    });

    it('returns arrow_upward if sorting by ascending', () => {
      sortIcon = component.sortIcons('id');

      expect(sortIcon).toEqual('arrow_upward');
    });

    it('returns arrow_downward if sorting by descending', () => {
      component.localTableConfig.sortConfig.direction = SortDirection.descending;

      sortIcon = component.sortIcons('id');

      expect(sortIcon).toEqual('arrow_downward');
    });

    it('returns undefined if not sorting by that column', () => {
      sortIcon = component.sortIcons('animal');

      expect(sortIcon).toEqual(undefined);
    });
  });

  describe('hasData', () => {
    let hasData: boolean;

    it('returns false if data is undefined', () => {
      component.localTableConfig.tableData = undefined;

      hasData = component.hasData();

      expect(hasData).toBe(false);
    });

    it('returns false if data is null', () => {
      component.localTableConfig.tableData = null;

      hasData = component.hasData();

      expect(hasData).toBe(false);
    });

    it('returns false if data is empty', () => {
      component.localTableConfig.tableData = [];

      hasData = component.hasData();

      expect(hasData).toBe(false);
    });

    it('should return true if there is data', () => {
      component.localTableConfig.tableData = fakeTableData;

      hasData = component.hasData();

      expect(hasData).toBe(true);
    });
  });

  describe('renderTable', () => {
    beforeEach(() => {
      component.localTableConfig = null;
      component.tableConfig = new GoTableConfig({
        tableData: fakeTableData
      });
    });

    afterEach(() => {
      component.tableConfig = tableConfig;
    });

    it('should set showTable to false if no tableConfig', () => {
      component.showTable = true;
      component.tableConfig = undefined;

      component.renderTable();

      expect(component.showTable).toBe(false);
    });

    it('should set total count based on number of rows if not passed in', () => {
      component.renderTable();

      expect(component.localTableConfig.totalCount).toBe(3);
    });

    it('should set total count to total Count if passed in', () => {
      component.tableConfig.totalCount = 25;

      component.renderTable();

      expect(component.localTableConfig.totalCount).toBe(25);
    });

    it('should sort by column if sortable and column passed in', () => {
      const sortedTableData: any[] = [
        { id: 2, value: 'b', animal: 'kitten' },
        { id: 3, value: 'c', animal: 'koala bear' },
        { id: 1, value: 'a', animal: 'puppy' }
      ];

      component.tableConfig.sortable = true;
      component.tableConfig.sortConfig = new GoTableSortConfig({
        column: 'animal'
      });

      component.renderTable();

      expect(component.localTableConfig.tableData).toEqual(sortedTableData);
    });

    it('sets pages up with default page size if not passed in', () => {
      const pages: GoTablePage[] = [
        { number: 1, active: true },
        { number: 2, active: false },
        { number: 3, active: false }
      ];

      component.tableConfig.totalCount = 25;

      component.renderTable();

      expect(component.pages).toEqual(pages);
    });

    it('sets pages up with page size passed in', () => {
      const pages: GoTablePage[] = [
        { number: 1, active: true },
        { number: 2, active: false },
        { number: 3, active: false },
        { number: 4, active: false },
        { number: 5, active: false }
      ];

      component.tableConfig.totalCount = 25;
      component.tableConfig.pageConfig.perPage = 5;

      component.renderTable();

      expect(component.pages).toEqual(pages);
    });

    it('should reset the searchTerm if passed in', () => {
      component.searchTerm.reset();
      component.tableConfig.searchConfig.searchTerm = 'koala';
      component.tableConfig.searchConfig.searchable = true;

      component.renderTable();

      expect(component.searchTerm.value).toEqual(component.tableConfig.searchConfig.searchTerm);
    });

    it('should build the rowSelectForm if table rows are selectable', () => {
      expect(component.rowSelectForm).toBeFalsy();

      component.tableConfig.selectable = true;

      component.renderTable();

      expect(component.rowSelectForm).toBeTruthy();
    });

    it('should set up a subscription to each control on the rowSelectForm if rows are selectable', () => {
      spyOn(component, 'selectionChange');
      component.tableConfig.selectable = true;
      component.tableConfig.selectBy = 'id';

      component.renderTable();
      expect(component.selectionChange).not.toHaveBeenCalled();

      component.rowSelectForm.get('selection_1').setValue(true);
      expect(component.selectionChange).toHaveBeenCalledWith(true, fakeTableData[0]);
    });

    it('should set up a subscription to selectAllControl if rows are selectable', () => {
      component.tableConfig.selectable = true;
      component.tableConfig.selectBy = 'id';

      component.renderTable();

      expect(component.rowSelectForm.value['selection_1']).toBe(false);

      component.selectAllControl.setValue(true);

      expect(component.rowSelectForm.value['selection_1']).toBe(true);
    });
  });

  describe('clearSearch', () => {
    it('resets the searchTerm control', () => {
      component.searchTerm.setValue('voldemort');

      component.clearSearch();

      expect(component.searchTerm.value).toBeNull();
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.tableConfig = tableConfig;
      component.tableConfig.dataMode = GoTableDataSource.client;
      component.tableConfig.tableData = fakeTableData;
    });

    it('should throw error if tableConfig is not defined', () => {
      const requiredError: Error = new Error('GoTableComponent: tableConfig is a required Input');

      component.tableConfig = undefined;

      try {
        component.ngOnInit();

        fail('should have thrown error');
      } catch (error) {
        expect(error).toEqual(requiredError);
      }
    });

    it('sets the searchTerm if a searchTerm is passed in to the config', fakeAsync(() => {
      component.tableConfig.searchConfig.searchTerm = 'koala';
      component.tableConfig.searchConfig.searchable = true;
      component.searchTerm.reset();

      component.renderTable();
      component.ngOnInit();
      tick(501);

      expect(component.searchTerm.value).toEqual(component.tableConfig.searchConfig.searchTerm);
      expect(component.localTableConfig.tableData).toEqual([{ id: 3, value: 'c', animal: 'koala bear' }]);
    }));

    it('sets up a search term that filters table if config is set to searchable', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;

      component.ngOnInit();

      component.searchTerm.setValue('koala bear');
      tick(501);
      expect(component.localTableConfig.searchConfig.searchTerm).toBe('koala bear');
      expect(component.localTableConfig.tableData).toEqual([{ id: 3, value: 'c', animal: 'koala bear' }]);
    }));

    it('sets up a search term that filters table with partial search term matching', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;

      component.ngOnInit();

      component.searchTerm.setValue('bear');
      tick(501);
      expect(component.localTableConfig.searchConfig.searchTerm).toBe('bear');
      expect(component.localTableConfig.tableData).toEqual([{ id: 3, value: 'c', animal: 'koala bear' }]);
    }));

    it('sets up a search term that filters table and updates table count after filtering', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;

      component.ngOnInit();

      component.searchTerm.setValue('koala bear');
      tick(501);
      expect(component.localTableConfig.totalCount).toBe(1);
      expect(component.localTableConfig.tableData.length).toEqual(1);
    }));

    it('does not search on columns that are set to not be searchable', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;

      component.ngOnInit();

      component.searchTerm.setValue('1');
      tick(501);
      expect(component.localTableConfig.searchConfig.searchTerm).toBe('1');
      expect(component.localTableConfig.tableData).toEqual([]);
    }));

    it('does not search if datamode is server', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;
      component.tableConfig.dataMode = GoTableDataSource.server;

      component.renderTable();
      component.ngOnInit();

      component.searchTerm.setValue('koala bear');
      tick(501);
      expect(component.localTableConfig.tableData).toEqual(fakeTableData);
    }));

    it('resets the page offset if datamode is server', fakeAsync(() => {
      component.tableConfig.searchConfig.searchable = true;
      component.tableConfig.dataMode = GoTableDataSource.server;

      component.renderTable();
      component.ngOnInit();

      component.localTableConfig.pageConfig.offset = 10;

      component.searchTerm.setValue('koala bear');
      tick(501);
      expect(component.localTableConfig.pageConfig.offset).toEqual(0);
    }));

    it('emits a table change event if search term changes', fakeAsync(() => {
      spyOn(component.tableChange, 'emit');

      component.tableConfig.searchConfig.searchable = true;
      component.tableConfig.dataMode = GoTableDataSource.server;

      component.ngOnInit();

      component.searchTerm.setValue('koala bear');
      tick(501);
      expect(component.tableChange.emit).toHaveBeenCalled();
    }));
  });

  describe('ngOnChanges', () => {
    it('should render table', () => {
      spyOn(component, 'renderTable');

      component.ngOnChanges({ tableConfig: {} as SimpleChange });

      expect(component.renderTable).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewInit', () => {
    beforeEach(() => {
      component.tableConfig = tableConfig;
      component.tableConfig.dataMode = GoTableDataSource.client;
      component.tableConfig.tableData = fakeTableData;
    });

    it('performs a search if datamode is client and table is searchable', () => {
      component.tableConfig.searchConfig.searchTerm = 'koala';
      component.tableConfig.searchConfig.searchable = true;

      component.renderTable();
      component.ngAfterViewInit();

      expect(component.localTableConfig.tableData).toEqual([{ id: 3, value: 'c', animal: 'koala bear' }]);
    });

    it('does not perform a search if datamode is server and table is searchable', () => {
      component.tableConfig.searchConfig.searchTerm = 'koala';
      component.tableConfig.searchConfig.searchable = true;
      component.tableConfig.dataMode = GoTableDataSource.server;

      component.renderTable();
      component.ngAfterViewInit();

      expect(component.localTableConfig.tableData).toEqual(fakeTableData);
    });

    it('does not perform a search if datamode is client and table is not searchable', () => {
      component.tableConfig.searchConfig.searchable = false;

      component.renderTable();
      component.ngAfterViewInit();

      expect(component.localTableConfig.tableData).toEqual(fakeTableData);
    });

    it('calls detectChanges if a search is performed', () => {
      component.tableConfig.searchConfig.searchTerm = 'koala';
      component.tableConfig.searchConfig.searchable = true;

      spyOn(component['changeDetector'], 'detectChanges');

      component.renderTable();
      component.ngAfterViewInit();

      expect(component['changeDetector'].detectChanges).toHaveBeenCalled();
    });
  });
});
