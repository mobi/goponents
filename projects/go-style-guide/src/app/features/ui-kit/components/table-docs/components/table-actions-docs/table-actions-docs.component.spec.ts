import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionsDocsComponent } from './table-actions-docs.component';

describe('TableActionsDocsComponent', () => {
  let component: TableActionsDocsComponent;
  let fixture: ComponentFixture<TableActionsDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableActionsDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
