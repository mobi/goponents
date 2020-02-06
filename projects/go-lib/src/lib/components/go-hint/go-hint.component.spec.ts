import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHintComponent } from './go-hint.component';
import { SimpleChange } from '@angular/core';

describe('GoHintComponent', () => {
  let component: GoHintComponent;
  let fixture: ComponentFixture<GoHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoHintComponent],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHintComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges()', () => {
    it('sets the type modifiers if `type` is set', () => {
      const types: Array<string> = ['negative', 'neutral', 'positive'];

      types.forEach((type: string) => {
        expect(component.hintClasses[`go-hint--${type}`]).toBeFalsy();
      });

      types.forEach((type: string) => {
        component.ngOnChanges({
          type: new SimpleChange(undefined, type, false)
        });

        expect(component.hintClasses[`go-hint--${type}`]).toBeTruthy();
      });
    });

    it('sets the dark theme modifier if theme === "dark"', () => {
      expect(component.hintClasses['go-hint--dark']).toBeFalsy();

      component.ngOnChanges({
        theme: new SimpleChange(undefined, 'dark', false)
      });

      expect(component.hintClasses['go-hint--dark']).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it('sets a label if type is "negative" and no label is specified', () => {
      component.label = null;
      component.type = 'negative';

      component.ngOnInit();

      expect(component.label).toBe('Error:');
    });

    it('does not set a label by default', () => {
      component.label = null;
      component.type = 'neutral';

      component.ngOnInit();

      expect(component.label).toBe(null);
    });
  });
});
