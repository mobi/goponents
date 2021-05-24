import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoEditorComponent } from './go-editor.component';

describe('GoEditorComponent', () => {
  let component: GoEditorComponent;
  let fixture: ComponentFixture<GoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
