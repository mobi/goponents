import { Component } from '@angular/core';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-accordion-panel-docs',
  templateUrl: './accordion-panel-docs.component.html'
})
export class AccordionPanelDocsComponent {

  pageTitle: string;

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

  componentBindings: string = `
  @Input() expanded:  boolean = false;
  @Input() icon:      string  = null;
  @Input() heading:     string;
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Accordion Panel';
  }
}
