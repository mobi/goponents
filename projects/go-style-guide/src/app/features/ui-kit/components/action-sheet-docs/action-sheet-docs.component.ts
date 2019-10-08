import { Component } from '@angular/core';
import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
  selector: 'app-action-sheet-docs',
  templateUrl: './action-sheet-docs.component.html'
})
export class ActionSheetDocsComponent {
  menuItems: Array<NavGroup> = [
    {
      routeTitle: 'Action Sheet', subRoutes: [
        { route: './', routeTitle: 'Overview' },
        { route: './panel', routeTitle: 'Panel' }
      ]
    }
  ];

}
