import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { extractFieldData } from './go-table-utils';

@Component({
  selector: 'go-table-column',
  template: ''
})
export class GoTableColumnComponent {

  @Input() alignment: 'top' | 'middle' | 'bottom' = 'middle';
  @Input() field: string;
  @Input() searchable: boolean = true;
  @Input() sortable?: boolean;
  @Input() title: string;
  @Input() width: number;

  @ContentChild('goTableCell') goTableCell: TemplateRef<any>;
  @ContentChild('goTableHead') goTableHead: TemplateRef<any>;

  getFieldData(item: any): any {
    return extractFieldData(this.field, item);
  }
}
