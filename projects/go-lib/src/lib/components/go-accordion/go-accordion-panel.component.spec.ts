import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoAccordionPanelComponent } from './go-accordion-panel.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('GoAccordionPanelComponent', () => {
  let component: GoAccordionPanelComponent;
  let fixture: ComponentFixture<GoAccordionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoAccordionPanelComponent ],
      imports: [
        BrowserAnimationsModule,
        GoIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('sets title to heading to avoid html attribute conflicts', () => {
      component.title = 'test';
      expect(component.heading).toBeUndefined();

      component.ngOnInit();

      expect(component.heading).toBe(component.title);
    });
  });

  describe('ngOnChanges', () => {
    it('calls updateClasses()', () => {
      spyOn(component, 'updateClasses');

      component.ngOnChanges();

      expect(component.updateClasses).toHaveBeenCalled();
    });
  });

  describe('expanded', () => {
    it('sets _expanded', () => {
      expect(component._expanded).toBe(false);

      component.expanded = true;

      expect(component._expanded).toBe(true);
    });

    it('gets _expanded', () => {
      expect(component.expanded).toBe(component._expanded);
    });

    it('sets modifier classes', () => {
      expect(component.containerClasses['go-accordion-panel--active']).toBeFalsy();
      expect(component.headerClasses['go-accordion-panel__header--active']).toBeFalsy();

      component.expanded = true;

      expect(component.containerClasses['go-accordion-panel--active']).toBe(true);
      expect(component.headerClasses['go-accordion-panel__header--active']).toBe(true);
    });
  });

  describe('updateClasses()', () => {
    beforeEach(() => {
      expect(component.containerClasses).toEqual({});
      expect(component.headerClasses).toEqual({});
    });

    describe('containerClasses', () => {
      it('sets the go-accordion-panel--borderless class if borderless is true', () => {
        component.borderless = true;

        component.updateClasses();

        expect(component.containerClasses['go-accordion-panel--borderless']).toBe(true);
      });

      it('sets the go-accordion-panel--active class if expanded is true', () => {
        component._expanded = true;

        component.updateClasses();

        expect(component.containerClasses['go-accordion-panel--active']).toBe(true);
      });

      it('sets the go-accordion-panel--dark class if theme is "dark"', () => {
        component.theme = 'dark';

        component.updateClasses();

        expect(component.containerClasses['go-accordion-panel--dark']).toBe(true);
      });

      it('sets the go-accordion-panel--first class if expanded is true', () => {
        component.isFirst = true;

        component.updateClasses();

        expect(component.containerClasses['go-accordion-panel--first']).toBe(true);
      });

      it('sets the go-accordion-panel--last class if expanded is true', () => {
        component.isLast = true;

        component.updateClasses();

        expect(component.containerClasses['go-accordion-panel--last']).toBe(true);
      });
    });

    describe('headerClasses', () => {
      it('sets the go-accordion-panel__header--active class if expanded is true', () => {
        component._expanded = true;

        component.updateClasses();

        expect(component.headerClasses['go-accordion-panel__header--active']).toBe(true);
      });

      it('sets the go-accordion-panel__header--dark class if theme is dark', () => {
        component.theme = 'dark';

        component.updateClasses();

        expect(component.headerClasses['go-accordion-panel__header--dark']).toBe(true);
      });

      it('sets the go-accordion-panel__header--slim class if slim is true', () => {
        component.slim = true;

        component.updateClasses();

        expect(component.headerClasses['go-accordion-panel__header--slim']).toBe(true);
      });
    });
  });

  describe('the template', () => {
    it('emits the toggle event when it is clicked', () => {
      spyOn(component.toggle, 'emit');

      const panelTemplate: HTMLElement = fixture.nativeElement;
      const headerElement: HTMLElement = panelTemplate.querySelector('header');

      headerElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.toggle.emit).toHaveBeenCalled();
    });
  });
});
