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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ28tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLXRhYmxlL2dvLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVN2QyxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCO1FBSk8scUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELGtCQUFhLEdBQVcsU0FBUyxDQUFDO0lBRTFCLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7O0lBS00sWUFBWSxDQUFDLEdBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXBELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsOEJBQThCO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxH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dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2dvLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dvLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcbiAgQElucHV0KCkgc29ydGFibGVDb2x1bW5zOiBhbnlbXTtcbiAgQElucHV0KCkgYWN0aW9uczogQWN0aW9ucztcbiAgXG4gIHB1YmxpYyB0YWJsZURhdGFTb3VyY2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4odGhpcy5kYXRhKTtcbiAgcHVibGljIGFjdGl2ZUNvbHVtbjogc3RyaW5nO1xuICBwdWJsaWMgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJ3NvcnQtdXAnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbHVtbiA9IHRoaXMuc29ydGFibGVDb2x1bW5zWzBdO1xuICAgIHRoaXMuc29ydEJ5Q29sdW1uKHRoaXMuYWN0aXZlQ29sdW1uKTtcblxuICAgIGlmICh0aGlzLmFjdGlvbnMgJiYgdGhpcy5jb2x1bW5zLmluZGV4T2YoJ2FjdGlvbnMnKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKCdhY3Rpb25zJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHVibGljIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2w6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zb3J0YWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sKSkgeyByZXR1cm47IH1cblxuICAgIC8vIFVwZGF0ZSBTb3J0IENsYXNzZXNcbiAgICB0aGlzLnNldFNvcnREaXJlY3Rpb24oY29sKTtcblxuICAgIC8vIFNvcnQgYXNjZW5kaW5nIGlmIFNvcnQgZG93blxuICAgIGlmICh0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJykge1xuICAgICAgdGhpcy5zb3J0QXNjZW5kaW5nKGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE11c3QgYmUgc29ydCB1cCwgc29ydCBkZXNjZW5kaW5nLlxuICAgICAgdGhpcy5zb3J0RGVzY2VuZGluZyhjb2wpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0Q2xhc3MoY29sOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3NvcnQtdXAnOiAodGhpcy5hY3RpdmVDb2x1bW4gPT09IGNvbCAmJiB0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJyksXG4gICAgICAnc29ydC1kb3duJzogKHRoaXMuYWN0aXZlQ29sdW1uID09PSBjb2wgJiYgdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnc29ydC1kb3duJylcbiAgICB9O1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgc29ydERlc2NlbmRpbmcoY29sOiBzdHJpbmcpIHtcbiAgICBsZXQgc29ydGVkRGF0YSA9IHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSB7IHJldHVybiAtMTsgfVxuICAgICAgaWYgKGFbY29sXSA+IGJbY29sXSkgeyByZXR1cm4gMTsgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZVRhYmxlRGF0YShzb3J0ZWREYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEFzY2VuZGluZyhjb2w6IHN0cmluZykge1xuICAgIGxldCBzb3J0ZWREYXRhID0gdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhW2NvbF0gPiBiW2NvbF0pIHsgcmV0dXJuIC0xOyB9XG4gICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSB7IHJldHVybiAxOyB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlVGFibGVEYXRhKHNvcnRlZERhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUYWJsZURhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgbGV0IHZhbHVlcyA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5OiBhbnkpID0+IGRhdGFba2V5XSk7XG5cbiAgICB0aGlzLnRhYmxlRGF0YVNvdXJjZSQubmV4dCh2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTb3J0RGlyZWN0aW9uKGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmFjdGl2ZUNvbHVtbjtcbiAgICBsZXQgc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbjtcblxuICAgIHRoaXMuYWN0aXZlQ29sdW1uID0gY29sO1xuXG4gICAgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJyAmJiB0aGlzLmFjdGl2ZUNvbHVtbiA9PT0gY3VycmVudENvbHVtbikge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ3NvcnQtZG93bic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdzb3J0LXVwJztcbiAgICB9XG4gIH1cblxufVxuIl19