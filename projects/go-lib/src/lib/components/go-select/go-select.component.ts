import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent extends GoFormBaseComponent implements OnInit, OnDestroy {
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
  @Output() scroll: EventEmitter<{ start: number, end: number }> = new EventEmitter<{ start: number, end: number }>();

  @ContentChild('goSelectOption') goSelectOption: TemplateRef<any>;
  @ContentChild('goSelectOptionGroup') goSelectOptionGroup: TemplateRef<any>;
  @ContentChild('goSelectSelectedOption') goSelectSelectedOption: TemplateRef<any>;

  // store refined items after search
  refinedItems: any[] = [];
  // stores previous selected items when typeahead is enabled only in case of selectAll.
  private previousSelectedItems: any[] = [];
  private controlSubscription: Subscription;

  ngOnInit(): void {
    this.closeOnSelect = this.multiple ? false : this.closeOnSelect;
    this.handleControlInitialValue();
    this.subscribeToControlChanges();
  }

  ngOnDestroy(): void {
    this.controlSubscription?.unsubscribe();
  }

  onSelectAll(): void {
    if (this.typeahead) {
      this.handleTypeAheadSelectAll();
      return;
    }

    const items: any[] = this.ngSelect.searchTerm ? this.refinedItems : this.items;
    this.processSelectAll(items);
  }

  handleInput(search: { term: string; items: any[] }): void {
    if (this.multiple) {
      this.refinedItems = search.items;
    }
  }

  onRemoveAll(): void {
    this.control.reset();
    this.resetTypeAheadItems();
  }

  onScrollToEnd(): void {
    if (this.virtualScroll) {
      this.scrollToEnd.emit();
    }
  }

  onScroll($event: { start: number; end: number }): void {
    this.scroll.emit($event);
  }

  onClose(): void {
    this.emptyRefinedItems();
  }

  // store previous selected items incase of multiple and typeahead.
  handleItemAdd(item: any): void {
    if (!this.multiple || !this.typeahead) {
      return;
    }
    this.previousSelectedItems.push(item);
  }

  // remove item from previous selected items incase of multiple and typeahead.
  handleItemRemove(item: any): void {
    if (!this.multiple || !this.typeahead ) {
      return;
    }

    const index: number = this.previousSelectedItems.findIndex((prev: any) => prev[this.bindValue] === item.value[this.bindValue]);
    this.previousSelectedItems.splice(index, 1);
  }

  private subscribeToControlChanges(): void {
    if (this.multiple && this.showSelectAll) {
      this.controlSubscription = this.control.valueChanges.subscribe((value: any) => {
        this.handleMultipleControlChanges(value);
      });
    }
  }

  private handleMultipleControlChanges(value: any): void {
    this.emptyRefinedItems();
    if (!value?.length) {
      this.resetTypeAheadItems();
    }
  }

  private handleTypeAheadSelectAll(): void {
    // because spread operator is not supported due to tslib version
    const items: any[] = JSON.parse(JSON.stringify(this.items));
    for (const previousItem of this.previousSelectedItems) {
      const exists: boolean = items.some(
        (item: any) => item[this.bindValue] === previousItem[this.bindValue]
      );
      if (!exists) {
        items.unshift(previousItem);
      }
    }
    this.previousSelectedItems = items;
    this.items = items;
    this.control.reset([], { emitEvent: false });
    this.processSelectAll(items);
  }

  private resetTypeAheadItems(): void {
    if (this.typeahead) {
      this.items = [];
      this.previousSelectedItems = [];
    }
  }

  private emptyRefinedItems(): void {
    if (!this.ngSelect.searchTerm) {
      this.refinedItems = [];
    }
  }

  private processSelectAll(items: any[]): void {
    const refinedArr: any[] = items.map((item: any) =>
      this.bindValue ? item[this.bindValue] : item
    );

    const existing: any[] = Array.isArray(this.control.value) ? this.control.value : [];
    const uniq: any[] = Array.from(new Set(existing.concat(refinedArr)));
    this.control.patchValue(uniq);
    this.ngSelect.searchTerm = '';
    this.ngSelect.itemsList.resetFilteredItems();
  }

  private shouldHandleControlInitialValue(): boolean {
    return (this.typeahead || this.multiple) && Array.isArray(this.control.value);
  }

  private findItemByValue(value: any): any {
    return this.items.find((item: any) => item[this.bindValue] === value);
  }

  private handleControlInitialValue(): void {
    if (!this.shouldHandleControlInitialValue()) {
      return;
    }

    const selected: any[] = this.control.value;

    for (const value of selected) {
      const exist: any = this.findItemByValue(value);
      if (exist) {
        this.previousSelectedItems.push(exist);
      }
    }
  }

}
