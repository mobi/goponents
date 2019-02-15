import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCardComponent } from './go-card.component';

describe('GoCardComponent', () => {
  let component: GoCardComponent;
  let fixture: ComponentFixture<GoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
