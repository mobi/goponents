import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';
import { Component } from '@angular/core';
import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
    imports: [DemoImportsModule],
    templateUrl: './accordion-docs.component.html',
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
