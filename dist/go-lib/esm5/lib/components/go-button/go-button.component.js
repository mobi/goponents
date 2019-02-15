/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var GoButtonComponent = /** @class */ (function () {
    function GoButtonComponent() {
        this.handleClick = new EventEmitter();
        this.isProcessing = false;
    }
    // Public Methods
    // Public Methods
    /**
     * @return {?}
     */
    GoButtonComponent.prototype.clicked = 
    // Public Methods
    /**
     * @return {?}
     */
    function () {
        if (this.isProcessing) {
            return;
        }
        this.isProcessing = true;
        this.handleClick.emit(this.isProcessing);
    };
    /**
     * @return {?}
     */
    GoButtonComponent.prototype.classList = /**
     * @return {?}
     */
    function () {
        return {
            'button__loading': this.isProcessing,
            'button__disabled': (this.buttonType === 'disabled'),
            'button__alert': (this.buttonType === 'alert')
        };
    };
    GoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-button',
                    template: "<button class=\"button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                    styles: [".button{background-color:#65b360;border-radius:2px;color:#fff;font-size:14px;height:44px;padding:14px;text-align:center;transition:.3s}.button:hover{background-color:#448640}.button__loading{background-color:#65b360;position:relative}.button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;border-bottom-left-radius:2px;border-bottom-right-radius:2px;bottom:0;content:'';display:block;height:5px;left:0;position:absolute;width:100%;z-index:1}.button__loading.button__alert{background-color:#ed232b}.button__loading.button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.button__disabled{background-color:#ccc;color:#000}.button__disabled:hover{background-color:#999}.button__alert{background-color:#db1f26}.button__alert:hover{background-color:#9d161b}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}"]
                }] }
    ];
    /** @nocollapse */
    GoButtonComponent.ctorParameters = function () { return []; };
    GoButtonComponent.propDecorators = {
        buttonIcon: [{ type: Input }],
        buttonType: [{ type: Input }],
        handleClick: [{ type: Output }]
    };
    return GoButtonComponent;
}());
export { GoButtonComponent };
if (false) {
    /** @type {?} */
    GoButtonComponent.prototype.buttonIcon;
    /** @type {?} */
    GoButtonComponent.prototype.buttonType;
    /** @type {?} */
    GoButtonComponent.prototype.handleClick;
    /** @type {?} */
    GoButtonComponent.prototype.isProcessing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWJ1dHRvbi9nby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBWUU7UUFKVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFLbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQjs7Ozs7SUFFVixtQ0FBTzs7Ozs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVNLHFDQUFTOzs7SUFBaEI7UUFDRSxPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDcEMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQztZQUNwRCxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsbU9BQXlDOztpQkFFMUM7Ozs7OzZCQUVFLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxNQUFNOztJQXdCVCx3QkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLGlCQUFpQjs7O0lBQzVCLHVDQUE0Qjs7SUFDNUIsdUNBQTRCOztJQUM1Qix3Q0FBb0Q7O0lBRXBELHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ28tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29CdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBidXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1dHRvblR5cGU6IHN0cmluZztcbiAgQE91dHB1dCgpIGhhbmRsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBpc1Byb2Nlc3Npbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFB1YmxpYyBNZXRob2RzXG5cbiAgcHVibGljIGNsaWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2suZW1pdCh0aGlzLmlzUHJvY2Vzc2luZyk7XG4gIH1cblxuICBwdWJsaWMgY2xhc3NMaXN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidXR0b25fX2xvYWRpbmcnOiB0aGlzLmlzUHJvY2Vzc2luZyxcbiAgICAgICdidXR0b25fX2Rpc2FibGVkJzogKHRoaXMuYnV0dG9uVHlwZSA9PT0gJ2Rpc2FibGVkJyksXG4gICAgICAnYnV0dG9uX19hbGVydCc6ICh0aGlzLmJ1dHRvblR5cGUgPT09ICdhbGVydCcpXG4gICAgfTtcbiAgfVxufVxuIl19