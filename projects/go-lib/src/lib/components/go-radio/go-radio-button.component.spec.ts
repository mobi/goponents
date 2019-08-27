import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRadioButtonComponent } from './go-radio-button.component';

describe('GoRadioButtonComponent', () => {
  let component: GoRadioButtonComponent;
  let fixture: ComponentFixture<GoRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoRadioButtonComponent],
      imports: [
        FormsModule,
        GoHintModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRadioButtonComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('Some Value');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
