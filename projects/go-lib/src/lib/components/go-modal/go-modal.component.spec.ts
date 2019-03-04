import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoModalComponent } from './go-modal.component';

describe('GoModalComponent', () => {
  let component: GoModalComponent;
  let fixture: ComponentFixture<GoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
