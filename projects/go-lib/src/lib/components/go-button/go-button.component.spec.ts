import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoButtonComponent } from './go-button.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('GoButtonComponent', () => {
  let component: GoButtonComponent;
  let fixture: ComponentFixture<GoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoButtonComponent ],
      imports: [ GoIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicked()', () => {
    it('emits the handleClick event with the isProcessing boolean', () => {
      spyOn(component.handleClick, 'emit');
      spyOn(component, 'clicked').and.callThrough();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      buttonElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.clicked).toHaveBeenCalled();
      expect(component.handleClick.emit).toHaveBeenCalledWith(component.isProcessing);
    });
  });

  describe('classObject()', () => {
    beforeEach(() => {
      expect(component.classObject).toEqual({});
    });

    it('returns an object that sets go-button--negative to true based on buttonVariant', () => {
      expect(component.classObject['go-button--negative']).toBeFalsy();

      component.buttonVariant = 'alert';
      component.ngOnChanges();
      expect(component.classObject['go-button--negative']).toBe(true);

      component.buttonVariant = 'negative';
      component.ngOnChanges();
      expect(component.classObject['go-button--negative']).toBe(true);
    });

    it('returns an object that set go-button--neutral to true based on buttonVariant', () => {
      expect(component.classObject['go-button--neutral']).toBeFalsy();

      component.buttonVariant = 'neutral';
      component.ngOnChanges();
      expect(component.classObject['go-button--neutral']).toBe(true);
    });

    it('returns an object that set go-button--positive to true based on buttonVariant', () => {
      expect(component.classObject['go-button--positive']).toBeFalsy();

      component.buttonVariant = 'positive';
      component.ngOnChanges();
      expect(component.classObject['go-button--positive']).toBe(true);
    });

    it('returns an object that set other modifiers to true', () => {
      expect(component.classObject['go-button--dark']).toBeFalsy();
      expect(component.classObject['go-button--loading']).toBeFalsy();

      component.useDarkTheme = true;
      component.isProcessing = true;
      component.ngOnChanges();

      expect(component.classObject['go-button--dark']).toBe(true);
      expect(component.classObject['go-button--loading']).toBe(true);
    });
  });

  describe('the template', () => {
    it('does not include a <go-icon> by default', () => {
      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const iconComponent: HTMLElement = goButtonTemplate.querySelector('go-icon');

      expect(iconComponent).toBeNull();
    });

    it('does include a <go-icon> if buttonIcon is set', () => {
      component.buttonIcon = 'test';
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const iconComponent: HTMLElement = goButtonTemplate.querySelector('go-icon');

      expect(iconComponent).not.toBeNull();
    });

    it('disables the button if buttonDisabled is set to true', () => {
      component.buttonDisabled = true;
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.disabled).toBe(true);
    });

    it('disables the button if isProcessing is set to true', () => {
      component.isProcessing = true;
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.disabled).toBe(true);
    });

    it('sets button type to button by default', () => {
      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.type).toBe('button');
    });

    it('sets the button type if buttonType is passed in', () => {
      component.buttonType = 'submit';
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.type).toBe(component.buttonType);
    });
  });
});
