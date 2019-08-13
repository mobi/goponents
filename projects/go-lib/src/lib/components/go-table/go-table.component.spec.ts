import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTableComponent } from './go-table.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoTableDataSource, GoTableConfig } from './go-table-config.model';
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
});
