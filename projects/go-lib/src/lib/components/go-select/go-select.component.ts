import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent extends GoFormBaseComponent implements OnInit {

  @Input() appendTo: string;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() clearable: boolean = true;
  @Input() clearSearchOnAdd: boolean = true;
  @Input() closeOnSelect: boolean = true;
  /**
   * A property on each item to group by
   */
  @Input() groupBy: string = null;
  /**
   * If true, hides drop down arrow on select
   */
  @Input() hideDropDownArrow: boolean = false;
  @Input() items: any[];
  @Input() loading: boolean = false;
  @Input() multiple: boolean = false;
  @Input() searchable: boolean = true;
  @Input() showSelectAll: boolean = true;
  @Input() typeahead?: Subject<string>;
  @Input() typeToSearchText: string = 'Type to Search';
  @Input() virtualScroll: boolean = false;

  @Output() scrollToEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() scroll: EventEmitter<{ start: number, end: number }> = new EventEmitter<{ start: number; end: number }>();

  @ContentChild('goSelectOption') goSelectOption: TemplateRef<any>;
  @ContentChild('goSelectOptionGroup') goSelectOptionGroup: TemplateRef<any>;
  @ContentChild('goSelectSelectedOption') goSelectSelectedOption: TemplateRef<any>;

  ngOnInit(): void {
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
