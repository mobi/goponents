import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPanelComponent } from './go-panel.component';

describe('GoPanelComponent', () => {
  let component: GoPanelComponent;
  let fixture: ComponentFixture<GoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
