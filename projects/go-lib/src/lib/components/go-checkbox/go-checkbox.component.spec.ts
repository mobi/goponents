import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoCheckboxComponent } from './go-checkbox.component';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';

describe('GoCheckboxComponent', () => {
  let component: GoCheckboxComponent;
  let fixture: ComponentFixture<GoCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoCheckboxComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        GoHintModule,
        GoRequiredTextModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCheckboxComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      component.id = undefined;
    });

    it('sets the id of the input to `key` if one is passed in', () => {
      expect(component.id).toBeUndefined();

      component.key = 'a-specific-id';
      component.ngOnInit();

      expect(component.id).toBe(component.key);
    });

    it('generates a semi-random id based on the label if key is undefined', () => {
      expect(component.key).toBeUndefined();
      expect(component.id).toBeUndefined();

      component.label = 'test label';
      component.ngOnInit();

      expect(component.id).toBeDefined();
      expect(component.id).toContain('test-label-');
    });

    it('generates a semi-random id if a label and key are undefined', () => {
      expect(component.key).toBeUndefined();
      expect(component.label).toBeUndefined();
      expect(component.id).toBeUndefined();

      component.ngOnInit();

      expect(component.id).toBeDefined();
      expect(component.id).toContain('checkbox-');
    });
  });
});
