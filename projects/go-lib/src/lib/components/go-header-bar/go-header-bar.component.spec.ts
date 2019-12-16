import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHeaderBarComponent } from './go-header-bar.component';

describe('GoHeaderBarComponent', () => {
  let component: GoHeaderBarComponent;
  let fixture: ComponentFixture<GoHeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeaderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
