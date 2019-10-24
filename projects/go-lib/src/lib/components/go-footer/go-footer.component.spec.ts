import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFooterComponent } from './go-footer.component';

describe('GoFooterComponent', () => {
  let component: GoFooterComponent;
  let fixture: ComponentFixture<GoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
