import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { extractFieldData } from './go-table-utils';

@Component({
  selector: 'go-table-column',
  template: ''
})
export class GoTableColumnComponent {
  @Input() field: string;
  @Input() title: string;
  @Input() width: number;
  @Input() sortable?: boolean;

  @ContentChild('goTableCell') goTableCell: TemplateRef<any>;
  @ContentChild('goTableHead') goTableHead: TemplateRef<any>;

  constructor() { }

  getFieldData(item: any) {
    return extractFieldData(this.field, item);
  }
}
