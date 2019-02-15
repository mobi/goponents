import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLibComponent } from './go-lib.component';

describe('GoLibComponent', () => {
  let component: GoLibComponent;
  let fixture: ComponentFixture<GoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
