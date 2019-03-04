/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class GoTableComponent {
    constructor() {
        this.tableDataSource$ = new BehaviorSubject(this.data);
        this.sortDirection = 'sort-up';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeColumn = this.sortableColumns[0];
        this.sortByColumn(this.activeColumn);
        if (this.actions && this.columns.indexOf('actions') === -1) {
            this.columns.push('actions');
        }
    }
    // Public Methods
    // ================================================
    /**
     * @param {?} col
     * @return {?}
     */
    sortByColumn(col) {
        if (!this.sortableColumns.includes(col)) {
            return;
        }
        // Update Sort Classes
        this.setSortDirection(col);
        // Sort ascending if Sort down
        if (this.sortDirection === 'sort-up') {
            this.sortAscending(col);
        }
        else {
            // Must be sort up, sort descending.
            this.sortDescending(col);
        }
    }
    /**
     * @param {?} col
     * @return {?}
     */
    sortClass(col) {
        return {
            'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
            'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
        };
    }
    // Private Methods
    // ================================================
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    sortDescending(col) {
        /** @type {?} */
        let sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    }
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    sortAscending(col) {
        /** @type {?} */
        let sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a[col] > b[col]) {
                return -1;
            }
            if (a[col] < b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    updateTableData(data) {
        /** @type {?} */
        let values = Object.keys(data).map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => data[key]));
        this.tableDataSource$.next(values);
    }
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    setSortDirection(col) {
        /** @type {?} */
        let currentColumn = this.activeColumn;
        /** @type {?} */
        let sortDirection = this.sortDirection;
        this.activeColumn = col;
        if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
            this.sortDirection = 'sort-down';
        }
        else {
            this.sortDirection = 'sort-up';
        }
    }
}
GoTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-table',
                template: "<table cdk-table\n       class=\"tablesaw tablesaw-sortable tablesaw-swipe\"\n       [dataSource]=\"tableDataSource$\">\n\n  <ng-container *ngFor=\"let col of columns\" cdkColumnDef=\"{{col}}\">\n    <ng-container *ngIf=\"col !== 'actions'; else renderActions\">\n      <th cdk-header-cell\n          *cdkHeaderCellDef\n          [ngClass]=\"sortClass(col)\"\n          (click)=\"sortByColumn(col)\">{{col | titlecase}}</th>\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col]}}</td>\n    </ng-container>\n\n    <ng-template #renderActions>\n      <th cdk-header-cell *cdkHeaderCellDef>Actions</th>\n      <td cdk-cell *cdkCellDef=\"let row\">\n        <a *ngIf=\"actions.edit\" (click)=\"actions.edit(row.id)\">\n          <go-icon icon=\"edit\" class=\"mr2\"></go-icon>\n        </a>\n        <a *ngIf=\"actions.delete\" class=\"false\">\n          <go-icon icon=\"delete\" (click)=\"actions.delete(row.id)\"></go-icon>\n        </a>\n      </td>\n    </ng-template>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\n</table>\n",
                styles: ["th{cursor:pointer;position:relative}th.sort-down::after,th.sort-up::after{border-left:5px solid transparent;border-right:5px solid transparent;content:'';height:0;position:absolute;right:5px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:0}th.sort-up::after{border-top:5px solid #fff}th.sort-down::after{border-bottom:5px solid #fff}"]
            }] }
];
/** @nocollapse */
GoTableComponent.ctorParameters = () => [];
GoTableComponent.propDecorators = {
    data: [{ type: Input }],
    columns: [{ type: Input }],
    sortableColumns: [{ type: Input }],
    actions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GoTableComponent.prototype.data;
    /** @type {?} */
    GoTableComponent.prototype.columns;
    /** @type {?} */
    GoTableComponent.prototype.sortableColumns;
    /** @type {?} */
    GoTableComponent.prototype.actions;
    /** @type {?} */
    GoTableComponent.prototype.tableDataSource$;
    /** @type {?} */
    GoTableComponent.prototype.activeColumn;
    /** @type {?} */
    GoTableComponent.prototype.sortDirection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby10YWJsZS9nby10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTdkMsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQjtRQUpPLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RCxrQkFBYSxHQUFXLFNBQVMsQ0FBQztJQUUxQixDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7OztJQUtNLFlBQVksQ0FBQyxHQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVwRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFh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LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICdnby10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydnby10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCkgY29sdW1uczogYW55W107XG4gIEBJbnB1dCgpIHNvcnRhYmxlQ29sdW1uczogYW55W107XG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFjdGlvbnM7XG4gIFxuICBwdWJsaWMgdGFibGVEYXRhU291cmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55W10+KHRoaXMuZGF0YSk7XG4gIHB1YmxpYyBhY3RpdmVDb2x1bW46IHN0cmluZztcbiAgcHVibGljIHNvcnREaXJlY3Rpb246IHN0cmluZyA9ICdzb3J0LXVwJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmVDb2x1bW4gPSB0aGlzLnNvcnRhYmxlQ29sdW1uc1swXTtcbiAgICB0aGlzLnNvcnRCeUNvbHVtbih0aGlzLmFjdGl2ZUNvbHVtbik7XG5cbiAgICBpZiAodGhpcy5hY3Rpb25zICYmIHRoaXMuY29sdW1ucy5pbmRleE9mKCdhY3Rpb25zJykgPT09IC0xKSB7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCgnYWN0aW9ucycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1YmxpYyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHB1YmxpYyBzb3J0QnlDb2x1bW4oY29sOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc29ydGFibGVDb2x1bW5zLmluY2x1ZGVzKGNvbCkpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBVcGRhdGUgU29ydCBDbGFzc2VzXG4gICAgdGhpcy5zZXRTb3J0RGlyZWN0aW9uKGNvbCk7XG5cbiAgICAvLyBTb3J0IGFzY2VuZGluZyBpZiBTb3J0IGRvd25cbiAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uID09PSAnc29ydC11cCcpIHtcbiAgICAgIHRoaXMuc29ydEFzY2VuZGluZyhjb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNdXN0IGJlIHNvcnQgdXAsIHNvcnQgZGVzY2VuZGluZy5cbiAgICAgIHRoaXMuc29ydERlc2NlbmRpbmcoY29sKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydENsYXNzKGNvbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzb3J0LXVwJzogKHRoaXMuYWN0aXZlQ29sdW1uID09PSBjb2wgJiYgdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnc29ydC11cCcpLFxuICAgICAgJ3NvcnQtZG93bic6ICh0aGlzLmFjdGl2ZUNvbHVtbiA9PT0gY29sICYmIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ3NvcnQtZG93bicpXG4gICAgfTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIHNvcnREZXNjZW5kaW5nKGNvbDogc3RyaW5nKSB7XG4gICAgbGV0IHNvcnRlZERhdGEgPSB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFbY29sXSA8IGJbY29sXSkgeyByZXR1cm4gLTE7IH1cbiAgICAgIGlmIChhW2NvbF0gPiBiW2NvbF0pIHsgcmV0dXJuIDE7IH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVUYWJsZURhdGEoc29ydGVkRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRBc2NlbmRpbmcoY29sOiBzdHJpbmcpIHtcbiAgICBsZXQgc29ydGVkRGF0YSA9IHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYVtjb2xdID4gYltjb2xdKSB7IHJldHVybiAtMTsgfVxuICAgICAgaWYgKGFbY29sXSA8IGJbY29sXSkgeyByZXR1cm4gMTsgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZVRhYmxlRGF0YShzb3J0ZWREYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGFibGVEYXRhKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGxldCB2YWx1ZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleTogYW55KSA9PiBkYXRhW2tleV0pO1xuXG4gICAgdGhpcy50YWJsZURhdGFTb3VyY2UkLm5leHQodmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U29ydERpcmVjdGlvbihjb2w6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjdXJyZW50Q29sdW1uID0gdGhpcy5hY3RpdmVDb2x1bW47XG4gICAgbGV0IHNvcnREaXJlY3Rpb24gPSB0aGlzLnNvcnREaXJlY3Rpb247XG5cbiAgICB0aGlzLmFjdGl2ZUNvbHVtbiA9IGNvbDtcblxuICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSAnc29ydC11cCcgJiYgdGhpcy5hY3RpdmVDb2x1bW4gPT09IGN1cnJlbnRDb2x1bW4pIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdzb3J0LWRvd24nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnc29ydC11cCc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==