import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoLibService = /** @class */ (function () {
    function GoLibService() {
    }
    GoLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ GoLibService.ngInjectableDef = defineInjectable({ factory: function GoLibService_Factory() { return new GoLibService(); }, token: GoLibService, providedIn: "root" });
    return GoLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoLibComponent = /** @class */ (function () {
    function GoLibComponent() {
    }
    /**
     * @return {?}
     */
    GoLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GoLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-go-lib',
                    template: "\n    <p>\n      go-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    GoLibComponent.ctorParameters = function () { return []; };
    return GoLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoLibModule = /** @class */ (function () {
    function GoLibModule() {
    }
    GoLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GoLibComponent],
                    imports: [],
                    exports: [GoLibComponent]
                },] }
    ];
    return GoLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GoLibService, GoLibComponent, GoLibModule };

//# sourceMappingURL=go-ponents.js.map