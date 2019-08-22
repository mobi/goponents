import { Component, QueryList } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoAccordionComponent } from './go-accordion.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';

@Component({
  selector: 'go-test',
  template: `
    <go-accordion [showIcons]="true">
      <go-accordion-panel title="Test 1" icon="home">
        This is some content for Test 1.
      </go-accordion-panel>
      <go-accordion-panel title="Test 2" icon="settings">
        This is a second thing.
      </go-accordion-panel>
    </go-accordion>
  `
})
class GoTestAccordionComponent {}

describe('AccordionComponent', () => {
  let component: GoAccordionComponent;
  let panelOne: GoAccordionPanelComponent;
  let panelTwo: GoAccordionPanelComponent;
  let fixture: ComponentFixture<GoTestAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoAccordionComponent,
        GoAccordionPanelComponent,
        GoTestAccordionComponent
      ],
      imports: [
        BrowserAnimationsModule,
        GoIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestAccordionComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();

    // NOTE: We have to wait until after detectChanges to get the panels
    const panelArray: GoAccordionPanelComponent[] = component.panels.toArray();
    panelOne = panelArray[0];
    panelTwo = panelArray[1];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('overrides multiExpand with expandAll if set', () => {
      expect(component.multiExpand).toBe(false);
      expect(component.expandAll).toBe(false);

      component.expandAll = true;
      component.ngOnInit();

      expect(component.multiExpand).toBe(true);
      expect(component.expandAll).toBe(true);
    });
  });

  describe('ngAfterContentInit', () => {
    beforeEach(() => {
      panelOne.theme = undefined;
      panelTwo.theme = undefined;
      panelOne.slim = undefined;
      panelTwo.slim = undefined;
      panelOne.borderless = undefined;
      panelTwo.borderless = undefined;

      spyOn(panelOne, 'updateClasses');
      spyOn(panelTwo, 'updateClasses');
    });

    afterEach(() => {
      expect(panelOne.updateClasses).toHaveBeenCalled();
      expect(panelTwo.updateClasses).toHaveBeenCalled();
    });

    it('subscribes to each panels toggle event', () => {
      spyOn(panelOne.toggle, 'subscribe').and.callThrough();
      spyOn(panelTwo.toggle, 'subscribe').and.callThrough();

      component.ngAfterContentInit();

      expect(panelOne.toggle.subscribe).toHaveBeenCalled();
      expect(panelTwo.toggle.subscribe).toHaveBeenCalled();
    });

    it('sets the slim property on the panel', () => {
      expect(component.slim).toBe(false);
      expect(panelOne.slim).toBe(undefined);
      expect(panelTwo.slim).toBe(undefined);

      component.slim = true;
      component.ngAfterContentInit();

      expect(component.slim).toBe(true);
      expect(panelOne.slim).toBe(component.slim);
      expect(panelTwo.slim).toBe(component.slim);
    });

    it('does NOT override the slim property if explicitly set on the panel', () => {
      expect(component.slim).toBe(false);
      expect(panelOne.slim).toBe(undefined);
      expect(panelTwo.slim).toBe(undefined);

      component.slim = false;
      panelOne.slim = true;
      component.ngAfterContentInit();

      expect(component.slim).toBe(false);
      expect(panelOne.slim).toBe(true);
      expect(panelTwo.slim).toBe(false);
    });

    it('sets the borderless property on the panel', () => {
      expect(component.borderless).toBe(false);
      expect(panelOne.borderless).toBeUndefined();
      expect(panelTwo.borderless).toBeUndefined();

      component.ngAfterContentInit();

      expect(component.borderless).toBe(false);
      expect(panelOne.borderless).toBe(false);
      expect(panelTwo.borderless).toBe(false);
    });

    it('does NOT override theme borderless if explicitly set on the panel', () => {
      expect(component.borderless).toBe(false);
      expect(panelOne.borderless).toBeUndefined();
      expect(panelTwo.borderless).toBeUndefined();

      panelOne.borderless = true;
      component.ngAfterContentInit();

      expect(component.borderless).toBe(false);
      expect(panelOne.borderless).toBe(true);
      expect(panelTwo.borderless).toBe(false);
    });

    it('sets the theme property on the panel', () => {
      expect(component.theme).toBe('light');
      expect(panelOne.theme).toBeUndefined();
      expect(panelTwo.theme).toBeUndefined();

      component.theme = 'dark';
      component.ngAfterContentInit();

      expect(component.theme).toBe('dark');
      expect(panelOne.theme).toBe('dark');
      expect(panelTwo.theme).toBe('dark');
    });

    it('does NOT override theme property if explicitly set on the panel', () => {
      expect(component.theme).toBe('light');
      expect(panelOne.theme).toBeUndefined();
      expect(panelTwo.theme).toBeUndefined();

      component.theme = 'dark';
      panelOne.theme = 'light';
      component.ngAfterContentInit();

      expect(component.theme).toBe('dark');
      expect(panelOne.theme).toBe('light');
      expect(panelTwo.theme).toBe('dark');
    });

    it('sets isFirst to true and isLast to false on the first panel in the accordion', () => {
      expect(component.panels.length).toBe(2);
      component.ngAfterContentInit();
      expect(panelOne.isFirst).toBe(true);
      expect(panelOne.isLast).toBe(false);
    });

    it('sets isFirst to false and isLast to true on the last panel in the accordion', () => {
      expect(component.panels.length).toBe(2);
      component.ngAfterContentInit();
      expect(panelTwo.isFirst).toBe(false);
      expect(panelTwo.isLast).toBe(true);
    });

    it('expands all the panels if expandAll is set on the accordion', () => {
      expect(panelOne.expanded).toBe(false);
      expect(panelTwo.expanded).toBe(false);

      component.expandAll = true;
      component.ngAfterContentInit();

      expect(panelOne.expanded).toBe(true);
      expect(panelTwo.expanded).toBe(true);
    });

    it('sets the panel icon to null if showIcons is false', () => {
      expect(panelOne.icon).not.toBeNull();
      expect(panelTwo.icon).not.toBeNull();

      component.showIcons = false;
      component.ngAfterContentInit();

      expect(panelOne.icon).toBeNull();
      expect(panelTwo.icon).toBeNull();
    });
  });

  describe('when a panel inside of an accordion is clicked', () => {
    beforeEach(() => {
      if (!('emit' in panelOne.toggle)) {
        fail(`
          Oh snap! None of these tests work if there
          isn't a toggle event emitter on the panel.
        `);
      }

      spyOn(panelOne, 'updateClasses');
      spyOn(panelTwo, 'updateClasses');
    });

    it('closes if it is open', () => {
      expect(panelOne.expanded).toBe(false);

      panelOne.toggle.emit();

      expect(panelOne.expanded).toBe(true);
      expect(panelOne.updateClasses).toHaveBeenCalled();
      expect(panelTwo.updateClasses).toHaveBeenCalled();
    });

    it('opens if it is closed', () => {
      panelOne.expanded = true;

      panelOne.toggle.emit();

      expect(panelOne.expanded).toBe(false);
      expect(panelOne.updateClasses).toHaveBeenCalled();
    });

    describe('if multiExpand is false', () => {
      beforeEach(() => {
        component.multiExpand = false;
        panelOne.expanded = true;
      });

      it('only allows one panel to be open', () => {
        expect(panelOne.expanded).toBe(true);
        expect(panelTwo.expanded).toBe(false);

        panelTwo.toggle.emit();

        expect(panelOne.expanded).toBe(false);
        expect(panelTwo.expanded).toBe(true);
        expect(panelOne.updateClasses).toHaveBeenCalled();
        expect(panelTwo.updateClasses).toHaveBeenCalled();
      });
    });

    describe('if multiExpand is true', () => {
      beforeEach(() => {
        component.multiExpand = true;
        panelOne.expanded = true;
      });

      it('allows more than one panel to be open', () => {
        expect(panelOne.expanded).toBe(true);
        expect(panelTwo.expanded).toBe(false);

        panelTwo.toggle.emit();

        expect(panelOne.expanded).toBe(true);
        expect(panelTwo.expanded).toBe(true);
        expect(panelTwo.updateClasses).toHaveBeenCalled();
      });
    });
  });
});
