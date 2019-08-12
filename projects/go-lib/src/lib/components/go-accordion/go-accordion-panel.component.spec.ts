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

  describe('containerClasses', () => {
    beforeEach(() => {
      expect(component.containerClasses()).toEqual({
        'go-accordion-panel--borderless': false,
        'go-accordion-panel--active': false,
        'go-accordion-panel--first': false,
        'go-accordion-panel--last': false
      });
    });

    it('sets the go-accordion-panel--borderless class if borderless is true', () => {
      component.borderless = true;

      expect(component.containerClasses()).toEqual({
        'go-accordion-panel--borderless': true,
        'go-accordion-panel--active': false,
        'go-accordion-panel--first': false,
        'go-accordion-panel--last': false
      });
    });

    it('sets the go-accordion-panel--active class if expanded is true', () => {
      component.expanded = true;

      expect(component.containerClasses()).toEqual({
        'go-accordion-panel--borderless': false,
        'go-accordion-panel--active': true,
        'go-accordion-panel--first': false,
        'go-accordion-panel--last': false
      });
    });

    it('sets the go-accordion-panel--first class if expanded is true', () => {
      component.isFirst = true;

      expect(component.containerClasses()).toEqual({
        'go-accordion-panel--borderless': false,
        'go-accordion-panel--active': false,
        'go-accordion-panel--first': true,
        'go-accordion-panel--last': false
      });
    });

    it('sets the go-accordion-panel--last class if expanded is true', () => {
      component.isLast = true;

      expect(component.containerClasses()).toEqual({
        'go-accordion-panel--borderless': false,
        'go-accordion-panel--active': false,
        'go-accordion-panel--first': false,
        'go-accordion-panel--last': true
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
