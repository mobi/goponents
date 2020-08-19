import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-docs',
  templateUrl: './portal-docs.component.html'
})
export class PortalDocsComponent {
  noteMessage: string = `Please know that the source (goPortalAttachTo) and target (goPortalTarget) can either be in the same template file or different template files.`;

  goPortalAttachToExample: string = `
  <ng-template goPortalAttachTo="targetName">
    <ng-content></ng-content>
  </ng-template>
  `;

  goPortalTargetExample: string = `
  <ng-container goPortalTarget="targetName"></ng-container>
  `;

  constructor(

  ) { }

  public openOffCanvas(): void {
  
  }
}
