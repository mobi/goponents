import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTextAreaComponent } from './go-text-area.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GoTextAreaComponent', () => {
  let component: GoTextAreaComponent;
  let fixture: ComponentFixture<GoTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTextAreaComponent],
      imports: [FormsModule, ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTextAreaComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = new FormBuilder().group({
      testField: ''
    });

    component.controlName = 'testField';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
