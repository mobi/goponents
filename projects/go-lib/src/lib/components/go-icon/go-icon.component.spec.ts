import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIconComponent } from './go-icon.component';

describe('GoIconComponent', () => {
  let component: GoIconComponent;
  let fixture: ComponentFixture<GoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoIconComponent ]
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

  describe('classObject()', () => {
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
  });

  describe('the template', () => {
    let goIconTemplate: HTMLElement;
    let iconElement: HTMLElement;

    beforeEach(() => {
      component.icon = 'sentiment_very_satisfied';
      component.iconClass = 'awesome test classes';
      component.iconModifier = 'positive';

      component.ngOnChanges();
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
