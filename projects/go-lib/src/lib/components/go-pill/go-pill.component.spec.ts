import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPillComponent } from './go-pill.component';

describe('GoPillComponent', () => {
  let component: GoPillComponent;
  let fixture: ComponentFixture<GoPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
