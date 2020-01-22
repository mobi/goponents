import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoInputComponent } from './go-input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

describe('GoInputComponent', () => {
  let component: GoInputComponent;
  let fixture: ComponentFixture<GoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoInputComponent],
      imports: [
        FormsModule,
        GoHintModule,
        GoRequiredTextModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoInputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('Some Value');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
