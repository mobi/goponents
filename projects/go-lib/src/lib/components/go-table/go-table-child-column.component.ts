import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { extractFieldData } from './go-table-utils';

@Component({
  selector: 'go-table-child-column',
  template: ''
})
export class GoTableChildColumnComponent {

  @Input() alignment: 'top' | 'middle' | 'bottom' = 'middle';
  @Input() field: string;

  @ContentChild('goTableCell', { static: false }) goTableCell: TemplateRef<any>;

  getFieldData(item: any): any {
    return extractFieldData(this.field, item);
  }
}
