import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoTreeNodeConfig } from './go-tree-node-config.model';
import { treeAnimation } from '../../animations/tree.animation';

@Component({
    animations: [treeAnimation],
    selector: 'go-tree',
    templateUrl: './go-tree.component.html',
    styleUrls: ['./go-tree.component.scss'],
    imports: [CommonModule, GoIconModule],
})
export class GoTreeComponent {
  @Input() nodeConfig: GoTreeNodeConfig[];
}
