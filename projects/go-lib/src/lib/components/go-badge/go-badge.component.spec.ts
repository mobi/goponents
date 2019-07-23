import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBadgeComponent } from './go-badge.component';

describe('GoBadgeComponent', () => {
  let component: GoBadgeComponent;
  let fixture: ComponentFixture<GoBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
