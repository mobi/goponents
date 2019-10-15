import { Component } from '@angular/core';

import { NavGroup } from '../../../../../../../go-lib/src/public_api';

@Component({
  templateUrl: './form-docs.component.html'
})
export class FormDocsComponent {
  menuItems: Array<NavGroup> = [
    {
      routeTitle: 'Forms', subRoutes: [
        { route: './', routeTitle: 'Overview' },
        { route: './datepicker', routeTitle: 'Datepicker' },
        { route: './input', routeTitle: 'Input' },
        { route: './select', routeTitle: 'Select' },
        { route: './switch-toggle', routeTitle: 'Switch Toggle' },
        { route: './textarea', routeTitle: 'Text Area' }
      ]
    }
  ];
}
