import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoSelectComponent } from './go-select.component';

describe('GoSelectComponent', () => {
  let component: GoSelectComponent;
  let fixture: ComponentFixture<GoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoSelectComponent],
      imports: [
        CommonModule,
        GoFormErrorsModule,
        GoButtonModule,
        GoHintModule,
        GoRequiredTextModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSelectComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('Some Value');
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
      expect(component.id).toContain('select-');
    });
  });

  describe('onSelectAll()', () => {
    it('adds all of the available items to the form control value', () => {
      component.bindValue = undefined;
      component.items = [
        { value: 1, label: 'Label 1' },
        { value: 2, label: 'Label 2' },
        { value: 3, label: 'Label 3' }
      ];

      component.onSelectAll();

      expect(component.control.value).toEqual(component.items);
    });

    it('uses bindValue to get value if bindValue exists', () => {
      component.bindValue = 'id';
      component.items = [
        { id: 1, label: 'Label 1' },
        { id: 2, label: 'Label 2' },
        { id: 3, label: 'Label 3' }
      ];

      component.onSelectAll();

      expect(component.control.value).toEqual([1, 2, 3]);
    });
  });

  describe('onRemoveAll', () => {
    it('uses removed the selected values', () => {
      component.bindValue = 'id';
      component.items = [
        { id: 1, label: 'Label 1' },
        { id: 2, label: 'Label 2' },
        { id: 3, label: 'Label 3' }
      ];

      component.onSelectAll();

      component.onRemoveAll();

      expect(component.control.value).toBeNull();
    });
  });
});
