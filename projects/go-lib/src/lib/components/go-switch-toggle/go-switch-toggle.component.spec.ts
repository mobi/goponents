import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoSwitchToggleComponent } from './go-switch-toggle.component';

describe('GoCheckboxComponent', () => {
  let component: GoSwitchToggleComponent;
  let fixture: ComponentFixture<GoSwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoSwitchToggleComponent],
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
    fixture = TestBed.createComponent(GoSwitchToggleComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the id', () => {
      component.ngOnInit();

      expect(component.id.startsWith('toggle')).toBe(true);
    });
  });

  describe('toggle', () => {
    it('should toggle the value of control if control is not disabled', () => {
      const toggleControl: FormControl = new FormControl({ value: false, disabled: false });
      component.control = toggleControl;

      component.toggle();

      expect(component.control.value).toBe(true);
    });

    it('should not toggle the value of control if the control is disabled', () => {
      const toggleControl: FormControl = new FormControl({ value: false, disabled: true });
      component.control = toggleControl;

      component.toggle();

      expect(component.control.value).toBe(false);
    });
  });
});
