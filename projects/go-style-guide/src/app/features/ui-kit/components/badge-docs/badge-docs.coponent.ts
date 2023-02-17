import { Component } from '@angular/core';
import { NavGroup } from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-badge-docs',
  templateUrl: './badge-docs.component.html'
})
export class BadgeDocsComponent {
  menuItems: Array<NavGroup> = [
    {
      routeTitle: 'Badges', subRoutes: [
        { route: './', routeTitle: 'Positioned' },
        { route: './pill', routeTitle: 'Pill Badge' },
      ]
    }
  ];
}
