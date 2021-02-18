import { ElementRef, QueryList } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoButtonComponent } from '../go-button/go-button.component';
import { GoButtonGroupComponent } from './go-button-group.component';

describe('GoButtonGroupComponent', () => {
  let component: GoButtonGroupComponent;
  let fixture: ComponentFixture<GoButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoButtonGroupComponent);
    component = fixture.componentInstance;
    component.buttons = new QueryList();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('calls processButtons', () => {
      spyOn<any>(component, 'processButtons').and.callThrough();

      component.ngOnChanges();

      expect(component['processButtons']).toHaveBeenCalled();
    });
  });

  describe('ngAfterContentInit', () => {
    it('calls processButtons', () => {
      spyOn<any>(component, 'processButtons').and.callThrough();

      component.ngAfterContentInit();

      expect(component['processButtons']).toHaveBeenCalled();
    });
  });

  describe('processButtons', () => {

    beforeEach(() => {
      component.buttons.reset([
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({}))
      ]);
    });

    it('sets groupPosition on each button if buttons exist', () => {
      component.buttons.forEach((btn: GoButtonComponent) => {
        expect(btn.groupPosition).toBeNull();
      });

      component['processButtons']();

      component.buttons.forEach((btn: GoButtonComponent) => {
        expect(btn.groupPosition).not.toBeNull();
      });
    });

    it('sets buttonDisabled on each button if buttons exist', () => {
      component.buttons.forEach((btn: GoButtonComponent) => {
        btn.buttonDisabled = false;
      });

      component.buttonDisabled = true;
      component['processButtons']();

      component.buttons.forEach((btn: GoButtonComponent) => {
        expect(btn.buttonDisabled).toBeTruthy();
      });
    });

    it('sets buttonVariant on each button if buttons exist', () => {
      component.buttons.forEach((btn: GoButtonComponent) => {
        btn.buttonVariant = 'neutral';
      });

      component.buttonVariant = 'secondary';
      component['processButtons']();

      component.buttons.forEach((btn: GoButtonComponent) => {
        expect(btn.buttonVariant).toBe('secondary');
      });
    });

    it('calls ngOnChanges on each button in the group if buttons exist', () => {
      component.buttons.forEach((btn: GoButtonComponent) => {
        spyOn(btn, 'ngOnChanges').and.callThrough();
      });

      component['processButtons']();

      component.buttons.forEach((btn: GoButtonComponent) => {
        expect(btn.ngOnChanges).toHaveBeenCalled();
      });
    });
  });

  describe('determinePosition', () => {
    it('returns null if less than 2 buttons in group', () => {
      component.buttons.reset([
        new GoButtonComponent(new ElementRef({}))
      ]);

      const result: string = component['determinePosition'](0);

      expect(result).toBeNull();
    });

    it('returns \'first\' if index is 0 and 2 or more buttons in group', () => {
      component.buttons.reset([
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({}))
      ]);

      const result: string = component['determinePosition'](0);

      expect(result).toBe('first');
    });

    it('returns \'last\' if index is last and 2 or more buttons in group', () => {
      component.buttons.reset([
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({}))
      ]);

      const result: string = component['determinePosition'](2);

      expect(result).toBe('last');
    });

    it('returns \'middle\' if index is between first and last and 3 or more buttons in group', () => {
      component.buttons.reset([
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({})),
        new GoButtonComponent(new ElementRef({}))
      ]);

      const result: string = component['determinePosition'](1);

      expect(result).toBe('middle');
    });
  });
});
