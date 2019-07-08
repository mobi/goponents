import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoActionSheetComponent } from './go-action-sheet.component';

describe('GoActionSheetComponent', () => {
  let component: GoActionSheetComponent;
  let fixture: ComponentFixture<GoActionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoActionSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
