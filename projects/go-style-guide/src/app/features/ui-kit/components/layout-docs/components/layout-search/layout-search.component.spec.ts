import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSearchComponent } from './layout-search.component';

describe('LayoutSearchComponent', () => {
  let component: LayoutSearchComponent;
  let fixture: ComponentFixture<LayoutSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
