import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoOffCanvasSubmitButtonComponent } from './go-off-canvas-submit-button.component';

describe('GoOffCanvasSubmitButtonComponent', () => {
  let component: GoOffCanvasSubmitButtonComponent;
  let fixture: ComponentFixture<GoOffCanvasSubmitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoOffCanvasSubmitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoOffCanvasSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
