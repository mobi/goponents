import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoInputComponent } from './go-input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

describe('GoInputComponent', () => {
  let component: GoInputComponent;
  let fixture: ComponentFixture<GoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoInputComponent],
      imports: [
        FormsModule,
        GoFormErrorsModule,
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

  describe('ngOnInit()', () => {
    it('sets minlength to 0 if minlength is greater than maxlength', () => {
      component.minlength = 10;
      component.maxlength = 8;

      component.ngOnInit();

      expect(component.minlength).toBe(0);
    })
      
    it('sets maxlength to 524288 if maxlength is greater than 524288', () => {
      component.maxlength = 524290;

      component.ngOnInit();

      expect(component.maxlength).toBe(524288);
    })
  });
});
