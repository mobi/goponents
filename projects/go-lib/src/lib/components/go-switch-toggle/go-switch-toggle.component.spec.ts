import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoSwitchToggleComponent } from './go-switch-toggle.component';
import { GoHintModule } from '../go-hint/go-hint.module';

describe('GoCheckboxComponent', () => {
  let component: GoSwitchToggleComponent;
  let fixture: ComponentFixture<GoSwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoSwitchToggleComponent],
      imports: [FormsModule, GoHintModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSwitchToggleComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
