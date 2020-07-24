import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-docs',
  styleUrls: ['./copy-docs.component.scss'],
  templateUrl: './copy-docs.component.html'
})
export class CopyDocsComponent {
  componentBindings: string = `
  @Input() text: string;
  `;

  exampleCopy: string = `
  <a [href]="url">Click the button to copy the link!</a>
  <go-copy [text]="url"></go-copy>
  `;

  url: string = 'google.com';
  pageTitle: string = 'Copy';

  goCopyCardLinkDirectiveExample: string = `
  <go-card class="go-column go-column--100" id="go-copy-card-link-directive">
    <ng-container go-card-header>
      <h2 class="go-heading-2 go-heading--no-wrap">goCopyCardLink Directive</h2>
      <go-copy cardId="go-copy-card-link-directive" goCopyCardLink></go-copy>
    </ng-container>
    <ng-container go-card-content>
      <!-- card content here -->
    </ng-container>
  </go-card>
  `;
}
