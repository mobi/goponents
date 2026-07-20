import { Component, Input } from '@angular/core';

import { GoTreeNodeConfig } from './go-tree-node-config.model';
import { treeAnimation } from '../../animations/tree.animation';

@Component({
  standalone: false,
  animations: [ treeAnimation ],
  selector: 'go-tree',
  templateUrl: './go-tree.component.html',
  styleUrls: ['./go-tree.component.scss']
})
export class GoTreeComponent {
  @Input() nodeConfig: GoTreeNodeConfig[];
}
