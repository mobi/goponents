import { Component } from '@angular/core';
import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
  templateUrl: './accordion-docs.component.html'
})
export class AccordionDocsComponent {

  menuItems: Array<NavGroup> = [
    {
      routeTitle: 'Accordion', subRoutes: [
        { route: './', routeTitle: 'Overview' },
        { route: './panel', routeTitle: 'Panel' }
      ]
    }
  ];
}
