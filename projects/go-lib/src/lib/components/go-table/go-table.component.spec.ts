import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTableComponent } from './go-table.component';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoTableConfig, GoTableDataSource } from './go-table-config.model';

describe('GoTableComponent', () => {
  let component: GoTableComponent;
  let fixture: ComponentFixture<GoTableComponent>;
  const tableConfig: GoTableConfig = new GoTableConfig({
    pageable: true,
    tableData: []
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTableComponent ],
      imports: [
        GoIconButtonModule,
        GoIconModule,
        GoLoaderModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTableComponent);
    component = fixture.componentInstance;
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
      component.selectAllChecked = false;
    });

    it('should select all rows if preselected', () => {
      component.tableConfig.preselected = true;
      component.ngAfterViewInit();
      expect(component.selectAllChecked).toBe(true);
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

  describe('setDisplayData', () => {
    const fakeTableData: any = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];

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

      expect(component.setDisplayData()).toEqual(fakeTableData);
    });

    it('returns all data when paging mode is disabled', () => {
      component.localTableConfig.pageable = false;

      expect(component.setDisplayData()).toEqual(fakeTableData);
    });

    it('returns paginated data when paging mode is enabled and in client mode', () => {
      expect(component.setDisplayData()).toEqual([ fakeTableData[0] ]);
    });
  });
});
