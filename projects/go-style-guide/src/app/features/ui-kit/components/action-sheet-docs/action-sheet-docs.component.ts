import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';
import { Component } from '@angular/core';
import { NavGroup } from 'projects/go-lib/src/public_api';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-action-sheet-docs',
    templateUrl: './action-sheet-docs.component.html',
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
