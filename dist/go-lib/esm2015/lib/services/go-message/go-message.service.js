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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ28tbWVzc2FnZS9nby1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFDVSxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQzNCLENBQUM7Ozs7Ozs7SUFPRSxXQUFXLENBQUMsTUFBYyxFQUFFLEVBQUUsUUFBZ0IsVUFBVTtRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRU0sUUFBUSxDQUFDLE1BQWMsRUFBRSxFQUFFLFFBQWdCLHVCQUF1QjtRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGFBQWE7Ozs7Ozs7O0lBUWxCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBHb01lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2VcbiAgKSB7IH1cblxuICAvKipcbiAgICogU2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1zZyBcbiAgICogQHBhcmFtIHRpdGxlIFxuICAgKi9cbiAgcHVibGljIHNlbmRNZXNzYWdlKG1zZzogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnU3VjY2VzcyEnKSB7XG4gICAgdGhpcy50b2FzdHIuc3VjY2Vzcyhtc2csIHRpdGxlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dFcnJvcihtc2c6IHN0cmluZyA9ICcnLCB0aXRsZTogc3RyaW5nID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpIHtcbiAgICB0aGlzLnRvYXN0ci5lcnJvcihtc2csIHRpdGxlKTtcbiAgfVxufVxuIl19