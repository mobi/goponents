import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoTableChildColumnComponent } from './go-table-child-column.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoCheckboxModule } from '../go-checkbox/go-checkbox.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoSelectModule } from '../go-select/go-select.module';
@Component({
    selector: 'go-table-column',
    template: '',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoCheckboxModule, GoIconButtonModule, GoIconModule, GoLoaderModule, GoSelectModule],
})
export class GoTableColumnComponent extends GoTableChildColumnComponent {

  @Input() searchable: boolean = true;
  @Input() sortable?: boolean;
  @Input() title: string;
  @Input() width: number;
  @Input() wrapContent: boolean = null;

  @ContentChild('goTableHead') goTableHead: TemplateRef<any>;

}
