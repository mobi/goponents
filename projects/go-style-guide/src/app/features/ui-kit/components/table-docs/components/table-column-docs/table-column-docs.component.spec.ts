import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnDocsComponent } from './table-column-docs.component';

describe('TableColumnDocsComponent', () => {
  let component: TableColumnDocsComponent;
  let fixture: ComponentFixture<TableColumnDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnDocsComponent ],
      providers: [ DatePipe ],
      schemas: [NO_ERRORS_SCHEMA]
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
