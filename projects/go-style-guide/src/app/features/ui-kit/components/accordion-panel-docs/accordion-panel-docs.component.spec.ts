import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPanelDocsComponent } from './accordion-panel-docs.component';

describe('AccordionPanelDocsComponent', () => {
  let component: AccordionPanelDocsComponent;
  let fixture: ComponentFixture<AccordionPanelDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPanelDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPanelDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
