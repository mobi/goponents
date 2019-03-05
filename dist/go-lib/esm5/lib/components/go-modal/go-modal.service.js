/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs/internal/Subject';
var GoModalService = /** @class */ (function () {
    function GoModalService() {
        this.activeModalComponent = new Subject();
        this.modalOpen = new Subject();
        this.modalOpen.next(false);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    GoModalService.prototype.openModal = /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    function (component, bindings) {
        this.setComponent(component, bindings);
        this.toggleModal(true);
    };
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    GoModalService.prototype.setComponent = /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    function (component, bindings) {
        this.activeModalComponent.next(new GoModalItem(component, bindings));
    };
    /**
     * @param {?=} open
     * @return {?}
     */
    GoModalService.prototype.toggleModal = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = true; }
        this.modalOpen.next(open);
    };
    GoModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoModalService.ctorParameters = function () { return []; };
    return GoModalService;
}());
export { GoModalService };
if (false) {
    /** @type {?} */
    GoModalService.prototype.activeModalComponent;
    /** @type {?} */
    GoModalService.prototype.modalOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tbW9kYWwvZ28tbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhEO0lBS0U7UUFIQSx5QkFBb0IsR0FBeUIsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN4RSxjQUFTLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFHbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsa0NBQVM7Ozs7O0lBQVQsVUFBVSxTQUFjLEVBQUUsUUFBWTtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELHFDQUFZOzs7OztJQUFaLFVBQWEsU0FBYyxFQUFFLFFBQVk7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxJQUFvQjtRQUFwQixxQkFBQSxFQUFBLFdBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXBCRixVQUFVOzs7O0lBcUJYLHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksY0FBYzs7O0lBQ3pCLDhDQUF3RTs7SUFDeEUsbUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHb01vZGFsSXRlbSB9IGZyb20gJy4vZ28tbW9kYWwuaXRlbSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvTW9kYWxTZXJ2aWNlIHtcbiAgYWN0aXZlTW9kYWxDb21wb25lbnQ6IFN1YmplY3Q8R29Nb2RhbEl0ZW0+ID0gbmV3IFN1YmplY3Q8R29Nb2RhbEl0ZW0+KCk7XG4gIG1vZGFsT3BlbjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tb2RhbE9wZW4ubmV4dChmYWxzZSk7XG4gIH1cblxuICBvcGVuTW9kYWwoY29tcG9uZW50OiBhbnksIGJpbmRpbmdzOiB7fSkgOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbXBvbmVudChjb21wb25lbnQsIGJpbmRpbmdzKTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKHRydWUpO1xuICB9XG5cbiAgc2V0Q29tcG9uZW50KGNvbXBvbmVudDogYW55LCBiaW5kaW5nczoge30pIDogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVNb2RhbENvbXBvbmVudC5uZXh0KG5ldyBHb01vZGFsSXRlbShjb21wb25lbnQsIGJpbmRpbmdzKSk7XG4gIH1cblxuICB0b2dnbGVNb2RhbChvcGVuOiBib29sZWFuID0gdHJ1ZSkgOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsT3Blbi5uZXh0KG9wZW4pO1xuICB9XG59XG4iXX0=