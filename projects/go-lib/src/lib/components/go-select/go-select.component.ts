import { Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent
  extends GoFormBaseComponent
  implements OnInit, OnDestroy
{
  @ViewChild(NgSelectComponent) ngSelect: NgSelectComponent;

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
  @Output() scroll: EventEmitter<{ start: number; end: number }> = new EventEmitter<{ start: number, end: number }>();

  @ContentChild('goSelectOption') goSelectOption: TemplateRef<any>;
  @ContentChild('goSelectOptionGroup') goSelectOptionGroup: TemplateRef<any>;
  @ContentChild('goSelectSelectedOption') goSelectSelectedOption: TemplateRef<any>;

  private controlSubscription: Subscription;
  // store refined items after search
  private refinedItems: any[] = [];
  // stores previous selected items when typeahead is enabled only in case of selectAll.
  private previousSelectedItems: any[] = [];

  ngOnInit(): void {
    this.closeOnSelect = this.multiple ? false : this.closeOnSelect;
    this.handleControlInitialValue();
    this.controlSubscription = this.control.valueChanges.subscribe((value) => {
      if (this.multiple && this.showSelectAll) {
        this.emptyRefinedItems();
        if (!value?.length) {
          this.resetTypeaheadItems();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.controlSubscription.unsubscribe();
  }

  onSelectAll(): void {
    if (this.typeahead) {
      this.handleTypeaheadSelectAll();
      return;
    }
    const items = this.refinedItems.length ? this.refinedItems : this.items;
    this.processSelectAll(items);
  }

  private handleControlInitialValue() {
    if((!this.typeahead && !this.multiple) || !Array.isArray(this.control.value)){
      return
    }

    const selected = this.control.value;
    for(let value of selected) {
      const exist = this.items.find(item => item[this.bindValue] === value);
      if(exist) {
        this.previousSelectedItems.push(exist)
      }
    }
  }

  private processSelectAll(items: any[]) {
    const refinedArr = items.map((item: any) =>
      this.bindValue ? item[this.bindValue] : item
    );


    const existing = Array.isArray(this.control.value) ? this.control.value : [];
    this.control.patchValue(existing.concat(refinedArr));
    this.ngSelect.searchTerm = '';
    this.ngSelect.itemsList.resetFilteredItems();
  }

  private handleTypeaheadSelectAll() {
    // because spread operator is not supported due to tslib version
    const items = JSON.parse(JSON.stringify(this.items));
    for (let previousItem of this.previousSelectedItems) {
      const exists = items.find(
        (item) => item[this.bindValue] === previousItem[this.bindValue]
      );
      if (!exists) {
        items.unshift(previousItem);
      }
    }
    this.previousSelectedItems = items
    this.items = items;
    this.control.reset([], { emitEvent: false });
    this.processSelectAll(items);
  }

  private resetTypeaheadItems() {
    if (this.typeahead) {
      this.items = [];
      this.previousSelectedItems = [];
    }
  }

  private emptyRefinedItems(): void {
    if(!this.ngSelect.searchTerm) {
      this.refinedItems = [];
    }
  }

  handleInput(search: { term: string; items: any[] }) {
    this.refinedItems = search.items;
  }

  onRemoveAll(): void {
    this.control.reset();
    this.resetTypeaheadItems();
  }

  onScrollToEnd(): void {
    if (this.virtualScroll) {
      this.scrollToEnd.emit();
    }
  }

  onScroll($event: { start: number; end: number }): void {
    this.scroll.emit($event);
  }

  onClose() {
    this.emptyRefinedItems();
  }

  // store previous selected items incase of multiple and typeahead.
  handleItemAdd(item) {
    if(!this.multiple || !this.typeahead) return;
    this.previousSelectedItems.push(item)
  }

  // remove item from previous selected items incase of multiple and typeahead.
  handleItemRemove(item) {
    if(!this.multiple || !this.typeahead) return;
    const index = this.previousSelectedItems.findIndex(prev => prev[this.bindValue] === item.value[this.bindValue]);
    this.previousSelectedItems.splice(index, 1)
  }

}
