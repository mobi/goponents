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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ28tbWVzc2FnZS9nby1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRTNDO0lBS0UsMEJBQ1UsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUMzQixDQUFDO0lBRUw7Ozs7T0FJRzs7Ozs7OztJQUNJLHNDQUFXOzs7Ozs7SUFBbEIsVUFBbUIsR0FBZ0IsRUFBRSxLQUEwQjtRQUE1QyxvQkFBQSxFQUFBLFFBQWdCO1FBQUUsc0JBQUEsRUFBQSxrQkFBMEI7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVNLG1DQUFROzs7OztJQUFmLFVBQWdCLEdBQWdCLEVBQUUsS0FBdUM7UUFBekQsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLHNCQUFBLEVBQUEsK0JBQXVDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxhQUFhOzs7MkJBRHRCO0NBd0JDLEFBckJELElBcUJDO1NBakJZLGdCQUFnQjs7Ozs7O0lBRXpCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBHb01lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2VcbiAgKSB7IH1cblxuICAvKipcbiAgICogU2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1zZyBcbiAgICogQHBhcmFtIHRpdGxlIFxuICAgKi9cbiAgcHVibGljIHNlbmRNZXNzYWdlKG1zZzogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnU3VjY2VzcyEnKSB7XG4gICAgdGhpcy50b2FzdHIuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dFcnJvcihtc2c6IHN0cmluZyA9ICcnLCB0aXRsZTogc3RyaW5nID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpIHtcbiAgICB0aGlzLnRvYXN0ci5lcnJvcihtc2csIHRpdGxlKTtcbiAgfVxufVxuIl19