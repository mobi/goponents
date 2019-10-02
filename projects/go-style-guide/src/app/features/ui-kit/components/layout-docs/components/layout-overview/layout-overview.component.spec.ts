import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOverviewComponent } from './layout-overview.component';

describe('LayoutOverviewComponent', () => {
  let component: LayoutOverviewComponent;
  let fixture: ComponentFixture<LayoutOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
