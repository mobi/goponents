import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToastComponent } from './go-toast.component';

describe('GoToastComponent', () => {
  let component: GoToastComponent;
  let fixture: ComponentFixture<GoToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
