/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class GoMessageService {
    /**
     * @param {?} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
    }
    /**
     * Show a success message.
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    sendMessage(msg = '', title = 'Success!') {
        this.toastr.success(msg, title);
    }
    /**
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    logError(msg = '', title = 'Something went wrong.') {
        this.toastr.error(msg, title);
    }
}
GoMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoMessageService.ctorParameters = () => [
    { type: ToastrService }
];
/** @nocollapse */ GoMessageService.ngInjectableDef = i0.defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(i0.inject(i1.ToastrService)); }, token: GoMessageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoMessageService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dvLW1lc3NhZ2UvZ28tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQ1UsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUMzQixDQUFDOzs7Ozs7O0lBT0UsV0FBVyxDQUFDLE1BQWMsRUFBRSxFQUFFLFFBQWdCLFVBQVU7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVNLFFBQVEsQ0FBQyxNQUFjLEVBQUUsRUFBRSxRQUFnQix1QkFBdUI7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxhQUFhOzs7Ozs7OztJQVFsQixrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgR29NZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RyOiBUb2FzdHJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBzdWNjZXNzIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBtc2cgXG4gICAqIEBwYXJhbSB0aXRsZSBcbiAgICovXG4gIHB1YmxpYyBzZW5kTWVzc2FnZShtc2c6IHN0cmluZyA9ICcnLCB0aXRsZTogc3RyaW5nID0gJ1N1Y2Nlc3MhJykge1xuICAgIHRoaXMudG9hc3RyLnN1Y2Nlc3MobXNnLCB0aXRsZSk7XG4gIH1cblxuICBwdWJsaWMgbG9nRXJyb3IobXNnOiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9ICdTb21ldGhpbmcgd2VudCB3cm9uZy4nKSB7XG4gICAgdGhpcy50b2FzdHIuZXJyb3IobXNnLCB0aXRsZSk7XG4gIH1cbn1cbiJdfQ==