import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLayoutComponent } from './go-layout.component';

describe('GoLayoutComponent', () => {
  let component: GoLayoutComponent;
  let fixture: ComponentFixture<GoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
