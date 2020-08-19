import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-docs',
  templateUrl: './portal-docs.component.html'
})
export class PortalDocsComponent {
  noteMessage: string = `Please know that the source (goPortalAttachTo) and target (goPortalTarget) can either be in the same template file or different template files.`;

  goPortalAttachToExample: string = `
  <ng-template goPortalAttachTo="enterprise">
    <span id="kirk">Beam me up, Scotty!</span>
  </ng-template>
  `;

  goPortalTargetExample: string = `
  <!-- elsewhere in the UI... -->
  <div class="starship">
    <ng-container goPortalTarget="enterprise"></ng-container>
  </div>
  `;

  constructor(

  ) { }

}
