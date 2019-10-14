import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-accordion-overview',
  templateUrl: './accordion-overview.component.html'
})
export class AccordionOverviewComponent {

  defaultExample: string = `
  <go-accordion>
    <go-accordion-panel heading="Test 1" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  expandAllExample: string = `
  <go-accordion [expandAll]="true">
    <go-accordion-panel heading="Test 1">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  multiExpandExample: string = `
  <go-accordion [multiExpand]="true">
    <go-accordion-panel heading="Test 1" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2" [expanded]="true">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  showIconsExample: string = `
  <go-accordion [showIcons]="true">
    <go-accordion-panel heading="Test 1" icon="home" [expanded]="true">
      This is some content for Test 1.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2" icon="settings">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3" icon="landscape">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  slimExample: string = `
  <go-accordion [slim]="true">
    <go-accordion-panel heading="Test 1">
      This is some content for <b>Test 1</b>.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  themeExample: string = `
  <go-accordion theme="dark">
    <go-accordion-panel heading="Test 1">
      This is some content for <b>Test 1</b>.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 2">
      This is a second thing.
    </go-accordion-panel>
    <go-accordion-panel heading="Test 3">
      This is a third thing.
    </go-accordion-panel>
  </go-accordion>
  `;

  componentBindings: string = `
  @Input() expandAll:   boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons:   boolean = false;
  @Input() slim:        boolean = false;
  @Input() theme:       string  = 'light';
  `;

  themeOptions: string = `
  // valid options
  - 'light'
  - 'dark'
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Accordion Overview';
  }
}
