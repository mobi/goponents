import { Component } from '@angular/core';

@Component({
  templateUrl: './tab-docs.component.html'
})
export class TabDocsComponent {
  componentBindings: string = `
  @Input() theme: 'light' | 'dark' = 'light';
  `;

  defaultExample: string = `
  <go-tab-group>
    <go-tab heading="Tab 1">
      This is some content for <b>Test 1</b>.
    </go-tab>
    <go-tab heading="Tab 2">
      This is a second thing.
    </go-tab>
    <go-tab heading="Tab 3">
      This is a third thing.
    </go-tab>
  </go-tab-group>
  `;

  darkExample: string = `
  <go-tab-group theme="dark">
    <go-tab heading="Tab 1">
      This is some content for <b>Test 1</b>.
    </go-tab>
    <go-tab heading="Tab 2">
      This is a second thing.
    </go-tab>
    <go-tab heading="Tab 3">
      This is a third thing.
    </go-tab>
  </go-tab-group>
  `;

  lazyLoadExample: string = `
  <go-tab-group>
    <go-tab heading="Tab 1">
      <ng-template #tabContent>
        This is some content for <b>Test 1</b>.
      </ng-template>
    </go-tab>
    <go-tab heading="Tab 2">
      <ng-template #tabContent>
        This is a second thing.
      </ng-template>
    </go-tab>
    <go-tab heading="Tab 3">
      <ng-template #tabContent>
        This is a third thing.
      </ng-template>
    </go-tab>
  </go-tab-group>
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-tab';

}
