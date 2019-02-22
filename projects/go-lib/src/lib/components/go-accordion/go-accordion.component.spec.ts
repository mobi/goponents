import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoAccordionComponent } from './go-accordion.component';

describe('AccordionComponent', () => {
  let component: GoAccordionComponent;
  let fixture: ComponentFixture<GoAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
