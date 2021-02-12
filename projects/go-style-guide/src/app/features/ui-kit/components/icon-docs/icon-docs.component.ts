import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-docs',
  templateUrl: './icon-docs.component.html',
  styleUrls: ['./icon-docs.component.scss']
})
export class IconDocsComponent {
  pageTitle: string = 'Icon';

  componentBindings: string = `
  @Input() icon: string;
  @Input() iconModifier: 'light' | 'dark' | 'positive' | 'negative' | 'neutral';
  @Input() iconClass: string;
  `;

  basicExample: string = `
  <go-icon icon="home"></go-icon>
  <go-icon icon="delete"></go-icon>
  <go-icon icon="info"></go-icon>
  <go-icon icon="done_all"></go-icon>
  `;

  modifiedExample: string = `
  <go-icon icon="home" iconModifier="light" class="dark-example-area"></go-icon>
  <go-icon icon="home" iconModifier="dark"></go-icon>
  <go-icon icon="check" iconModifier="positive"></go-icon>
  <go-icon icon="close" iconModifier="negative"></go-icon>
  <go-icon icon="help" iconModifier="neutral"></go-icon>
  `;

  overriddenStyles: string = `
  .list {
    line-height: 4rem;
    list-style: none;
  }

  :host ::ng-deep .list__icon {
    font-size: 4rem;
    vertical-align: middle;
  }
  `;

  overriddenExample: string = `
  <ul class="list">
    <li>
      <go-icon icon="face" iconClass="list__icon" iconModifier="positive"></go-icon>
      Face
    </li>
    <li>
      <go-icon icon="toys" iconClass="list__icon"></go-icon>
      Toys
    </li>
  </ul>
  `;

  iconOverrideWarning: string = `
  You most likely will never need to perform an override like the one shown below.
  This functionality goes against the guidelines Angular sets, but we've included it just in case this is absolutely necessary.
  If possible, apply a class directly to the <go-icon> element before performing this override.
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-icon';

  constructor() { }

}
