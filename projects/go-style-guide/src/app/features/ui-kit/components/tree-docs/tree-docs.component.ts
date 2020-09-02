import { Component } from '@angular/core';

import { GoTreeNodeConfig } from 'projects/go-lib/src/public_api';

@Component({
  templateUrl: './tree-docs.component.html'
})
export class TreeDocsComponent {

  readonly componentBindings: string = `
  @Input() nodeConfig: GoTreeNodeConfig[];
  `;

  readonly goTreeNodeConfig: string = `
  interface GoTreeNodeConfig {
    name: string;
    children?: GoTreeNodeConfig[];
    expanded?: boolean;
  }
  `;

  exampleDefaultTreeDataHtml: string = `
  exampleTreeData: GoTreeNodeConfig[] = [
    {
      name: 'Fruit',
      children: [{ name: 'Apple' }, { name: 'Banana' }],
      expanded: true
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussel sprouts' }]
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }]
        }
      ]
    }
  ];

  <go-tree [nodeConfig]="exampleDefaultTreeData"></go-tree>
  `;

  exampleDefaultTreeData: GoTreeNodeConfig[] = [
    {
      name: 'Fruit',
      children: [{ name: 'Apple' }, { name: 'Banana' }],
      expanded: true
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussel sprouts' }]
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }]
        }
      ]
    }
  ];

  linkToSource(): void {
    window.open('https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-tree','_blank')
  }
}
