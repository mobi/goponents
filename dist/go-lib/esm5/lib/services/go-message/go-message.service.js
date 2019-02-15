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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dvLW1lc3NhZ2UvZ28tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUUzQztJQUtFLDBCQUNVLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDM0IsQ0FBQztJQUVMOzs7O09BSUc7Ozs7Ozs7SUFDSSxzQ0FBVzs7Ozs7O0lBQWxCLFVBQW1CLEdBQWdCLEVBQUUsS0FBMEI7UUFBNUMsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLHNCQUFBLEVBQUEsa0JBQTBCO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTSxtQ0FBUTs7Ozs7SUFBZixVQUFnQixHQUFnQixFQUFFLEtBQXVDO1FBQXpELG9CQUFBLEVBQUEsUUFBZ0I7UUFBRSxzQkFBQSxFQUFBLCtCQUF1QztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsYUFBYTs7OzJCQUR0QjtDQXdCQyxBQXJCRCxJQXFCQztTQWpCWSxnQkFBZ0I7Ozs7OztJQUV6QixrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgR29NZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBzdWNjZXNzIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBtc2cgXG4gICAqIEBwYXJhbSB0aXRsZSBcbiAgICovXG4gIHB1YmxpYyBzZW5kTWVzc2FnZShtc2c6IHN0cmluZyA9ICcnLCB0aXRsZTogc3RyaW5nID0gJ1N1Y2Nlc3MhJykge1xuICAgIHRoaXMudG9hc3RyLnN1Y2Nlc3MobXNnLCB0aXRsZSk7XG4gIH1cblxuICBwdWJsaWMgbG9nRXJyb3IobXNnOiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4nKSB7XG4gICAgdGhpcy50b2FzdHIuZXJyb3IobXNnLCB0aXRsZSk7XG4gIH1cbn1cbiJdfQ==