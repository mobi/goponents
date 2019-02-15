import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoButtonComponent } from './go-button.component';

describe('GoButtonComponent', () => {
  let component: GoButtonComponent;
  let fixture: ComponentFixture<GoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
