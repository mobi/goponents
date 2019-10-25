import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTableComponent } from './go-table.component';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoTableConfig } from './go-table-config.model';

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
});
