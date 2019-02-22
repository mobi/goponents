import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoAccordionPanelComponent } from './go-accordion-panel.component';

describe('GoAccordionPanelComponent', () => {
  let component: GoAccordionPanelComponent;
  let fixture: ComponentFixture<GoAccordionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoAccordionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
