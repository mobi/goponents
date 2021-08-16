import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { generateId } from '../../utilities/form.utils';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent implements OnInit {
  id: string;

  @Input() appendTo: string;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() clearable: boolean = true;
  @Input() closeOnSelect: boolean = true;
  @Input() control: FormControl;
  /**
   * A property on each item to group by
   */
  @Input() groupBy: string = null;
  /**
   * If true, hides drop down arrow on select
   */
  @Input() hideDropDownArrow: boolean = false;
  @Input() hints: string[];
  @Input() items: any[];
  @Input() key: string;
  @Input() label: string;
  @Input() loading: boolean = false;
  @Input() multiple: boolean = false;
  @Input() placeholder: string;
  @Input() searchable: boolean = true;
  @Input() showSelectAll: boolean = true;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() typeahead?: Subject<string>;
  @Input() typeToSearchText: string = 'Type to Search';
  @Input() virtualScroll: boolean = false;

  @Output() scrollToEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() scroll: EventEmitter<{ start: number, end: number }> = new EventEmitter<{ start: number; end: number }>();

  @ContentChild('goSelectOption') goSelectOption: TemplateRef<any>;
  @ContentChild('goSelectOptionGroup') goSelectOptionGroup: TemplateRef<any>;
  @ContentChild('goSelectSelectedOption') goSelectSelectedOption: TemplateRef<any>;

  ngOnInit(): void {
    this.id = this.key || generateId(this.label, 'select');
    this.closeOnSelect = this.multiple ? false : this.closeOnSelect;
  }

  onSelectAll(): void {
    this.control.patchValue(this.items.map((item: any) => this.bindValue ? item[this.bindValue] : item));
  }

  onRemoveAll(): void {
    this.control.reset();
  }

  onScrollToEnd(): void {
    if (this.virtualScroll) {
      this.scrollToEnd.emit();
    }
  }

  onScroll($event: { start: number; end: number }): void {
    this.scroll.emit($event);
  }
}
