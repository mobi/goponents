import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIconComponent } from './go-icon.component';

describe('GoIconComponent', () => {
  let component: GoIconComponent;
  let fixture: ComponentFixture<GoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
