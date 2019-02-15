(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('go-ponents', ['exports', '@angular/core'], factory) :
    (factory((global['go-ponents'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoLibService = /** @class */ (function () {
        function GoLibService() {
        }
        GoLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ GoLibService.ngInjectableDef = i0.defineInjectable({ factory: function GoLibService_Factory() { return new GoLibService(); }, token: GoLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.GoLibService = GoLibService;
    exports.GoLibComponent = GoLibComponent;
    exports.GoLibModule = GoLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=go-ponents.umd.js.map