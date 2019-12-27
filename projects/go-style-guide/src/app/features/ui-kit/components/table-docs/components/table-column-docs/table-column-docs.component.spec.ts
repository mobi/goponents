import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnDocsComponent } from './table-column-docs.component';

describe('TableColumnDocsComponent', () => {
  let component: TableColumnDocsComponent;
  let fixture: ComponentFixture<TableColumnDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
