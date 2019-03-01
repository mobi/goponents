/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs/internal/Subject';
export class GoModalService {
    constructor() {
        this.activeModalComponent = new Subject();
        this.modalOpen = new Subject();
        this.modalOpen.next(false);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    openModal(component, bindings) {
        this.setComponent(component, bindings);
        this.toggleModal(true);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    setComponent(component, bindings) {
        this.activeModalComponent.next(new GoModalItem(component, bindings));
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    toggleModal(open = true) {
        this.modalOpen.next(open);
    }
}
GoModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoModalService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GoModalService.prototype.activeModalComponent;
    /** @type {?} */
    GoModalService.prototype.modalOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tbW9kYWwvZ28tbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hELE1BQU0sT0FBTyxjQUFjO0lBS3pCO1FBSEEseUJBQW9CLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFDeEUsY0FBUyxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBR25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxTQUFjLEVBQUUsUUFBWTtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxTQUFjLEVBQUUsUUFBWTtRQUN2QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWdCLElBQUk7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBckJGLFVBQVU7Ozs7OztJQUdULDhDQUF3RTs7SUFDeEUsbUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHb01vZGFsSXRlbSB9IGZyb20gJy4vZ28tbW9kYWwuaXRlbSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvTW9kYWxTZXJ2aWNlIHtcblxuICBhY3RpdmVNb2RhbENvbXBvbmVudDogU3ViamVjdDxHb01vZGFsSXRlbT4gPSBuZXcgU3ViamVjdDxHb01vZGFsSXRlbT4oKTtcbiAgbW9kYWxPcGVuOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1vZGFsT3Blbi5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChjb21wb25lbnQ6IGFueSwgYmluZGluZ3M6IHt9KSA6IHZvaWQge1xuICAgIHRoaXMuc2V0Q29tcG9uZW50KGNvbXBvbmVudCwgYmluZGluZ3MpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwodHJ1ZSk7XG4gIH1cblxuICBzZXRDb21wb25lbnQoY29tcG9uZW50OiBhbnksIGJpbmRpbmdzOiB7fSkgOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsQ29tcG9uZW50Lm5leHQobmV3IEdvTW9kYWxJdGVtKGNvbXBvbmVudCwgYmluZGluZ3MpKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKG9wZW46IGJvb2xlYW4gPSB0cnVlKSA6IHZvaWQge1xuICAgIHRoaXMubW9kYWxPcGVuLm5leHQob3Blbik7XG4gIH1cbn1cbiJdfQ==