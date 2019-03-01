/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var GoTableComponent = /** @class */ (function () {
    function GoTableComponent() {
        this.tableDataSource$ = new BehaviorSubject(this.data);
        this.sortDirection = 'sort-up';
    }
    /**
     * @return {?}
     */
    GoTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activeColumn = this.sortableColumns[0];
        this.sortByColumn(this.activeColumn);
        if (this.actions && this.columns.indexOf('actions') === -1) {
            this.columns.push('actions');
        }
    };
    // Public Methods
    // ================================================
    // Public Methods
    // ================================================
    /**
     * @param {?} col
     * @return {?}
     */
    GoTableComponent.prototype.sortByColumn = 
    // Public Methods
    // ================================================
    /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
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
    };
    /**
     * @param {?} col
     * @return {?}
     */
    GoTableComponent.prototype.sortClass = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        return {
            'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
            'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
        };
    };
    // Private Methods
    // ================================================
    // Private Methods
    // ================================================
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    GoTableComponent.prototype.sortDescending = 
    // Private Methods
    // ================================================
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    };
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    GoTableComponent.prototype.sortAscending = /**
     * @private
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a[col] > b[col]) {
                return -1;
            }
            if (a[col] < b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    GoTableComponent.prototype.updateTableData = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var values = Object.keys(data).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return data[key]; }));
        this.tableDataSource$.next(values);
    };
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    GoTableComponent.prototype.setSortDirection = /**
     * @private
     * @param {?} col
     * @return {?}
     */
    function (col) {
        /** @type {?} */
        var currentColumn = this.activeColumn;
        /** @type {?} */
        var sortDirection = this.sortDirection;
        this.activeColumn = col;
        if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
            this.sortDirection = 'sort-down';
        }
        else {
            this.sortDirection = 'sort-up';
        }
    };
    GoTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-table',
                    template: "<table cdk-table\n       class=\"tablesaw tablesaw-sortable tablesaw-swipe\"\n       [dataSource]=\"tableDataSource$\">\n\n  <ng-container *ngFor=\"let col of columns\" cdkColumnDef=\"{{col}}\">\n    <ng-container *ngIf=\"col !== 'actions'; else renderActions\">\n      <th cdk-header-cell\n          *cdkHeaderCellDef\n          [ngClass]=\"sortClass(col)\"\n          (click)=\"sortByColumn(col)\">{{col | titlecase}}</th>\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col]}}</td>\n    </ng-container>\n\n    <ng-template #renderActions>\n      <th cdk-header-cell *cdkHeaderCellDef>Actions</th>\n      <td cdk-cell *cdkCellDef=\"let row\">\n        <a *ngIf=\"actions.edit\" (click)=\"actions.edit(row.id)\">\n          <go-icon icon=\"edit\" class=\"mr2\"></go-icon>\n        </a>\n        <a *ngIf=\"actions.delete\" class=\"false\">\n          <go-icon icon=\"delete\" (click)=\"actions.delete(row.id)\"></go-icon>\n        </a>\n      </td>\n    </ng-template>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\n</table>\n",
                    styles: ["th{cursor:pointer;position:relative}th.sort-down::after,th.sort-up::after{border-left:5px solid transparent;border-right:5px solid transparent;content:'';height:0;position:absolute;right:5px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:0}th.sort-up::after{border-top:5px solid #fff}th.sort-down::after{border-bottom:5px solid #fff}"]
                }] }
    ];
    /** @nocollapse */
    GoTableComponent.ctorParameters = function () { return []; };
    GoTableComponent.propDecorators = {
        data: [{ type: Input }],
        columns: [{ type: Input }],
        sortableColumns: [{ type: Input }],
        actions: [{ type: Input }]
    };
    return GoTableComponent;
}());
export { GoTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby10YWJsZS9nby10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkM7SUFlRTtRQUpPLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6RCxrQkFBYSxHQUFXLFNBQVMsQ0FBQztJQUUxQixDQUFDOzs7O0lBRWhCLG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLG1EQUFtRDs7Ozs7OztJQUU1Qyx1Q0FBWTs7Ozs7OztJQUFuQixVQUFvQixHQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVwRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUss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WSxnQkFBZ0I7OztJQUMzQixnQ0FBcUI7O0lBQ3JCLG1DQUF3Qjs7SUFDeEIsMkNBQWdDOztJQUNoQyxtQ0FBMEI7O0lBRTFCLDRDQUFnRTs7SUFDaEUsd0NBQTRCOztJQUM1Qix5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2dvLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dvLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcbiAgQElucHV0KCkgc29ydGFibGVDb2x1bW5zOiBhbnlbXTtcbiAgQElucHV0KCkgYWN0aW9uczogQWN0aW9ucztcbiAgXG4gIHB1YmxpYyB0YWJsZURhdGFTb3VyY2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4odGhpcy5kYXRhKTtcbiAgcHVibGljIGFjdGl2ZUNvbHVtbjogc3RyaW5nO1xuICBwdWJsaWMgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJ3NvcnQtdXAnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbHVtbiA9IHRoaXMuc29ydGFibGVDb2x1bW5zWzBdO1xuICAgIHRoaXMuc29ydEJ5Q29sdW1uKHRoaXMuYWN0aXZlQ29sdW1uKTtcblxuICAgIGlmICh0aGlzLmFjdGlvbnMgJiYgdGhpcy5jb2x1bW5zLmluZGV4T2YoJ2FjdGlvbnMnKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKCdhY3Rpb25zJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHVibGljIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHVibGljIHNvcnRCeUNvbHVtbihjb2w6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zb3J0YWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sKSkgeyByZXR1cm47IH1cblxuICAgIC8vIFVwZGF0ZSBTb3J0IENsYXNzZXNcbiAgICB0aGlzLnNldFNvcnREaXJlY3Rpb24oY29sKTtcblxuICAgIC8vIFNvcnQgYXNjZW5kaW5nIGlmIFNvcnQgZG93blxuICAgIGlmICh0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJykge1xuICAgICAgdGhpcy5zb3J0QXNjZW5kaW5nKGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE11c3QgYmUgc29ydCB1cCwgc29ydCBkZXNjZW5kaW5nLlxuICAgICAgdGhpcy5zb3J0RGVzY2VuZGluZyhjb2wpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0Q2xhc3MoY29sOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3NvcnQtdXAnOiAodGhpcy5hY3RpdmVDb2x1bW4gPT09IGNvbCAmJiB0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJyksXG4gICAgICAnc29ydC1kb3duJzogKHRoaXMuYWN0aXZlQ29sdW1uID09PSBjb2wgJiYgdGhpcy5zb3J0RGlyZWN0aW9uID09PSAnc29ydC1kb3duJylcbiAgICB9O1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgc29ydERlc2NlbmRpbmcoY29sOiBzdHJpbmcpIHtcbiAgICBsZXQgc29ydGVkRGF0YSA9IHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSB7IHJldHVybiAtMTsgfVxuICAgICAgaWYgKGFbY29sXSA+IGJbY29sXSkgeyByZXR1cm4gMTsgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZVRhYmxlRGF0YShzb3J0ZWREYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEFzY2VuZGluZyhjb2w6IHN0cmluZykge1xuICAgIGxldCBzb3J0ZWREYXRhID0gdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhW2NvbF0gPiBiW2NvbF0pIHsgcmV0dXJuIC0xOyB9XG4gICAgICBpZiAoYVtjb2xdIDwgYltjb2xdKSB7IHJldHVybiAxOyB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlVGFibGVEYXRhKHNvcnRlZERhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUYWJsZURhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgbGV0IHZhbHVlcyA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcCgoa2V5OiBhbnkpID0+IGRhdGFba2V5XSk7XG5cbiAgICB0aGlzLnRhYmxlRGF0YVNvdXJjZSQubmV4dCh2YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTb3J0RGlyZWN0aW9uKGNvbDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmFjdGl2ZUNvbHVtbjtcbiAgICBsZXQgc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbjtcblxuICAgIHRoaXMuYWN0aXZlQ29sdW1uID0gY29sO1xuXG4gICAgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdzb3J0LXVwJyAmJiB0aGlzLmFjdGl2ZUNvbHVtbiA9PT0gY3VycmVudENvbHVtbikge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ3NvcnQtZG93bic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdzb3J0LXVwJztcbiAgICB9XG4gIH1cblxufVxuIl19