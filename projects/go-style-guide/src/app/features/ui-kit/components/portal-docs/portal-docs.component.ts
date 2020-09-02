import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-docs',
  templateUrl: './portal-docs.component.html'
})
export class PortalDocsComponent {
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

  linkToSource(): void {
    window.open('https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-portal','_blank')
  }
}
