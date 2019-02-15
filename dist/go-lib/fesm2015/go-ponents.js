import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoLibService {
    constructor() { }
}
GoLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoLibService.ctorParameters = () => [];
/** @nocollapse */ GoLibService.ngInjectableDef = defineInjectable({ factory: function GoLibService_Factory() { return new GoLibService(); }, token: GoLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GoLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-go-lib',
                template: `
    <p>
      go-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
GoLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoLibModule {
}
GoLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GoLibComponent],
                imports: [],
                exports: [GoLibComponent]
            },] }
];

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