import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIconComponent } from './go-icon.component';

describe('GoIconComponent', () => {
  let component: GoIconComponent;
  let fixture: ComponentFixture<GoIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoIconComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('builds an object with a modifier class key if iconModifier exists', () => {
      expect(component.classObject).toEqual({});

      component.iconModifier = 'positive';
      component.ngOnChanges();

      expect(component.classObject['go-icon--positive']).toBe(true);
    });

    it('builds an object with a additional classes key if iconClass exists', () => {
      expect(component.classObject).toEqual({});

      component.iconClass = 'odd multiple class use case';
      component.ngOnChanges();

      expect(component.classObject['odd multiple class use case']).toBe(true);
    });

    it('adds a disabled modifier if disabled is true', () => {
      expect(component.classObject['go-icon--disabled']).toBeFalsy();

      component.disabled = true;
      component.ngOnChanges();

      expect(component.classObject['go-icon--disabled']).toBe(true);
    });
  });

  describe('the template', () => {
    let goIconTemplate: HTMLElement;
    let iconElement: HTMLElement;

    beforeEach(() => {
      fixture.componentRef.setInput('icon', 'sentiment_very_satisfied');
      fixture.componentRef.setInput('iconClass', 'awesome test classes');
      fixture.componentRef.setInput('iconModifier', 'positive');
      fixture.detectChanges();

      goIconTemplate = fixture.nativeElement;
      iconElement = goIconTemplate.querySelector('i');
    });

    it('sets the text of the <i> element to the icon @input', () => {
      expect(iconElement.innerText).toBe(component.icon);
    });

    it('adds additional classes if the iconClass @input is set', () => {
      expect(iconElement.classList).toContain('awesome');
      expect(iconElement.classList).toContain('test');
      expect(iconElement.classList).toContain('classes');
    });

    it('adds an additional modifier class if the iconModifier @input is set', () => {
      expect(iconElement.classList).toContain('go-icon--positive');
    });
  });
});
