import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDocsComponent } from './layout-docs.component';

describe('LayoutDocsComponent', () => {
  let component: LayoutDocsComponent;
  let fixture: ComponentFixture<LayoutDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
