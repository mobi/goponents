/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
var GoMessageService = /** @class */ (function () {
    function GoMessageService(toastr) {
        this.toastr = toastr;
    }
    /**
     * Show a success message.
     * @param msg
     * @param title
     */
    /**
     * Show a success message.
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    GoMessageService.prototype.sendMessage = /**
     * Show a success message.
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    function (msg, title) {
        if (msg === void 0) { msg = ''; }
        if (title === void 0) { title = 'Success!'; }
        this.toastr.success(msg, title);
    };
    /**
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    GoMessageService.prototype.logError = /**
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    function (msg, title) {
        if (msg === void 0) { msg = ''; }
        if (title === void 0) { title = 'Something went wrong.'; }
        this.toastr.error(msg, title);
    };
    GoMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoMessageService.ctorParameters = function () { return [
        { type: ToastrService }
    ]; };
    /** @nocollapse */ GoMessageService.ngInjectableDef = i0.defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(i0.inject(i1.ToastrService)); }, token: GoMessageService, providedIn: "root" });
    return GoMessageService;
}());
export { GoMessageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoMessageService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ28tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nby1tZXNzYWdlL2dvLW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFFM0M7SUFLRSwwQkFDVSxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzNCLENBQUM7SUFFTDs7OztPQUlHOzs7Ozs7O0lBQ0ksc0NBQVc7Ozs7OztJQUFsQixVQUFtQixHQUFnQixFQUFFLEtBQTBCO1FBQTVDLG9CQUFBLEVBQUEsUUFBZ0I7UUFBRSxzQkFBQSxFQUFBLGtCQUEwQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRU0sbUNBQVE7Ozs7O0lBQWYsVUFBZ0IsR0FBZ0IsRUFBRSxLQUF1QztRQUF6RCxvQkFBQSxFQUFBLFFBQWdCO1FBQUUsc0JBQUEsRUFBQSwrQkFBdUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLGFBQWE7OzsyQkFEdEI7Q0F3QkMsQUFyQkQsSUFxQkM7U0FqQlksZ0JBQWdCOzs7Ozs7SUFFekIsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEdvTWVzc2FnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0cjogVG9hc3RyU2VydmljZVxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbXNnIFxuICAgKiBAcGFyYW0gdGl0bGUgXG4gICAqL1xuICBwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9ICdTdWNjZXNzIScpIHtcbiAgICB0aGlzLnRvYXN0ci5zdWNjZXNzKG1zZywgdGl0bGUpO1xuICB9XG5cbiAgcHVibGljIGxvZ0Vycm9yKG1zZzogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJykge1xuICAgIHRoaXMudG9hc3RyLmVycm9yKG1zZywgdGl0bGUpO1xuICB9XG59XG4iXX0=