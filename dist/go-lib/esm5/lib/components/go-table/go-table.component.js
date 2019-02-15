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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ28tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLXRhYmxlL2dvLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QztJQWVFO1FBSk8scUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELGtCQUFhLEdBQVcsU0FBUyxDQUFDO0lBRTFCLENBQUM7Ozs7SUFFaEIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxpQkFBaUI7SUFDakIsbURBQW1EOzs7Ozs7O0lBRTVDLHVDQUFZOzs7Ozs7O0lBQW5CLFVBQW9CLEdBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXBELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsOEJBQThCO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVB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Qjs7O0lBQzNCLGdDQUFxQjs7SUFDckIsbUNBQXdCOztJQUN4QiwyQ0FBZ0M7O0lBQ2hDLG1DQUEwQjs7SUFFMUIsNENBQWdFOztJQUNoRSx3Q0FBNEI7O0lBQzVCLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnby10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ28tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ28tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb1RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdO1xuICBASW5wdXQoKSBzb3J0YWJsZUNvbHVtbnM6IGFueVtdO1xuICBASW5wdXQoKSBhY3Rpb25zOiBBY3Rpb25zO1xuICBcbiAgcHVibGljIHRhYmxlRGF0YVNvdXJjZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueVtdPih0aGlzLmRhdGEpO1xuICBwdWJsaWMgYWN0aXZlQ29sdW1uOiBzdHJpbmc7XG4gIHB1YmxpYyBzb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnc29ydC11cCc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZlQ29sdW1uID0gdGhpcy5zb3J0YWJsZUNvbHVtbnNbMF07XG4gICAgdGhpcy5zb3J0QnlDb2x1bW4odGhpcy5hY3RpdmVDb2x1bW4pO1xuXG4gICAgaWYgKHRoaXMuYWN0aW9ucyAmJiB0aGlzLmNvbHVtbnMuaW5kZXhPZignYWN0aW9ucycpID09PSAtMSkge1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goJ2FjdGlvbnMnKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdWJsaWMgTWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwdWJsaWMgc29ydEJ5Q29sdW1uKGNvbDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnNvcnRhYmxlQ29sdW1ucy5pbmNsdWRlcyhjb2wpKSB7IHJldHVybjsgfVxuXG4gICAgLy8gVXBkYXRlIFNvcnQgQ2xhc3Nlc1xuICAgIHRoaXMuc2V0U29ydERpcmVjdGlvbihjb2wpO1xuXG4gICAgLy8gU29ydCBhc2NlbmRpbmcgaWYgU29ydCBkb3duXG4gICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ3NvcnQtdXAnKSB7XG4gICAgICB0aGlzLnNvcnRBc2NlbmRpbmcoY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTXVzdCBiZSBzb3J0IHVwLCBzb3J0IGRlc2NlbmRpbmcuXG4gICAgICB0aGlzLnNvcnREZXNjZW5kaW5nKGNvbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnRDbGFzcyhjb2w6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICAnc29ydC11cCc6ICh0aGlzLmFjdGl2ZUNvbHVtbiA9PT0gY29sICYmIHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ3NvcnQtdXAnKSxcbiAgICAgICdzb3J0LWRvd24nOiAodGhpcy5hY3RpdmVDb2x1bW4gPT09IGNvbCAmJiB0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdzb3J0LWRvd24nKVxuICAgIH07XG4gIH1cblxuICAvLyBQcml2YXRlIE1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBzb3J0RGVzY2VuZGluZyhjb2w6IHN0cmluZykge1xuICAgIGxldCBzb3J0ZWREYXRhID0gdGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhW2NvbF0gPCBiW2NvbF0pIHsgcmV0dXJuIC0xOyB9XG4gICAgICBpZiAoYVtjb2xdID4gYltjb2xdKSB7IHJldHVybiAxOyB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlVGFibGVEYXRhKHNvcnRlZERhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0QXNjZW5kaW5nKGNvbDogc3RyaW5nKSB7XG4gICAgbGV0IHNvcnRlZERhdGEgPSB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFbY29sXSA+IGJbY29sXSkgeyByZXR1cm4gLTE7IH1cbiAgICAgIGlmIChhW2NvbF0gPCBiW2NvbF0pIHsgcmV0dXJuIDE7IH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVUYWJsZURhdGEoc29ydGVkRGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRhYmxlRGF0YShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWVzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChrZXk6IGFueSkgPT4gZGF0YVtrZXldKTtcblxuICAgIHRoaXMudGFibGVEYXRhU291cmNlJC5uZXh0KHZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIHNldFNvcnREaXJlY3Rpb24oY29sOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudENvbHVtbiA9IHRoaXMuYWN0aXZlQ29sdW1uO1xuICAgIGxldCBzb3J0RGlyZWN0aW9uID0gdGhpcy5zb3J0RGlyZWN0aW9uO1xuXG4gICAgdGhpcy5hY3RpdmVDb2x1bW4gPSBjb2w7XG5cbiAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gJ3NvcnQtdXAnICYmIHRoaXMuYWN0aXZlQ29sdW1uID09PSBjdXJyZW50Q29sdW1uKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnc29ydC1kb3duJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ3NvcnQtdXAnO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=