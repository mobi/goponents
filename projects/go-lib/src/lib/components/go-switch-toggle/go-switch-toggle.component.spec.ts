import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    it('should toggle the value of control if disabled is false', () => {
      component.disabled = false;
      component.control.setValue(false);

      component.toggle();

      expect(component.control.value).toBe(true);
    });

    it('should not toggle the value of control if disabled is true', () => {
      component.disabled = true;
      component.control.setValue(false);

      component.toggle();

      expect(component.control.value).toBe(false);
    });
  });
});
