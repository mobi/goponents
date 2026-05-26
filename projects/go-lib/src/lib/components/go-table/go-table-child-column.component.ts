import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

import { extractFieldData } from './go-table-utils';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoCheckboxModule } from '../go-checkbox/go-checkbox.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoSelectModule } from '../go-select/go-select.module';
@Component({
    selector: 'go-table-child-column',
    template: '',
  imports: [FormsModule, ReactiveFormsModule, GoCheckboxModule, GoIconButtonModule, GoIconModule, GoLoaderModule, GoSelectModule],
})
export class GoTableChildColumnComponent {

  @Input() alignment: 'top' | 'middle' | 'bottom' = 'middle';
  @Input() field: string;

  @ContentChild('goTableCell') goTableCell: TemplateRef<any>;

  getFieldData(item: any): any {
    return extractFieldData(this.field, item);
  }
}
