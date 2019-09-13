import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTableComponent } from './go-table.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoTableConfig } from './go-table-config.model';
import { GoTablePageConfig } from './go-table-paging.model';

describe('GoTableComponent', () => {
  let component: GoTableComponent;
  let fixture: ComponentFixture<GoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTableComponent ],
      imports: [
        GoIconModule,
        GoLoaderModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTableComponent);
    component = fixture.componentInstance;
    component.tableConfig = new GoTableConfig({
      pageable: true,
      tableData: []
    });
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
});
