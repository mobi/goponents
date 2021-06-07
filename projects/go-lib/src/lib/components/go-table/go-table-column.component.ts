import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { GoTableChildColumnComponent } from './go-table-child-column.component';

@Component({
  selector: 'go-table-column',
  template: ''
})
export class GoTableColumnComponent extends GoTableChildColumnComponent {

  @Input() searchable: boolean = true;
  @Input() sortable?: boolean;
  @Input() title: string;
  @Input() width: number;

  @ContentChild('goTableHead') goTableHead: TemplateRef<any>;

}
