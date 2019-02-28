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
    /**
     * @return {?}
     */
    GoButtonComponent.prototype.clicked = /**
     * @return {?}
     */
    function () {
        if (this.isProcessing || this.buttonDisabled) {
            return;
        }
        this.isProcessing = this.useLoader;
        this.handleClick.emit(this.isProcessing);
    };
    /**
     * @return {?}
     */
    GoButtonComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.isProcessing = false;
    };
    /**
     * @return {?}
     */
    GoButtonComponent.prototype.classList = /**
     * @return {?}
     */
    function () {
        return {
            'go-button__loading': this.isProcessing,
            'go-button__disabled': this.buttonDisabled,
            'go-button__alert': (this.buttonType === 'alert')
        };
    };
    GoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-button',
                    template: "<button class=\"go-button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\" class=\"go-button__icon\" *ngIf=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                    styles: [".go-button{background-color:#65b360;border-radius:4px;border:none;color:#fff;cursor:pointer;font-size:.75rem;height:2.5rem;letter-spacing:1.25pt;overflow:hidden;outline:0;padding:.75rem 1rem;position:relative;text-transform:uppercase;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button::after{border-bottom-left-radius:4px;border-bottom-right-radius:4px;bottom:-5px;content:'';display:block;height:5px;left:0;opacity:0;position:absolute;width:100%;z-index:1;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button:hover{background-color:#52a24d}.go-button__icon{font-size:1rem;padding-right:.5rem;vertical-align:text-top}.go-button__loading{background-color:#65b360;cursor:not-allowed}.go-button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;bottom:0;opacity:1}.go-button__loading.go-button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.go-button__disabled{background-color:#b1b1b1;color:#313536}.go-button__disabled:hover{cursor:not-allowed;background-color:#b1b1b1}.go-button__alert{background-color:#ea5252}.go-button__alert:hover{background-color:#e63232}.go-button__alert.go-button__loading{background-color:#ea5252}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#4d9848 0)}5%{background:linear-gradient(to right,#3c7538 10%,#4d9848 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#4d9848 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#4d9848 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#4d9848 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#4d9848 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#4d9848 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#4d9848 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#4d9848 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#4d9848 90%)}50%{background:linear-gradient(to right,#4d9848 0,#3c7538 0)}55%{background:linear-gradient(to right,#4d9848 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#4d9848 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#4d9848 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#4d9848 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#4d9848 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#4d9848 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#4d9848 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#4d9848 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#4d9848 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#4d9848 100%,#3c7538 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#4d9848 0)}5%{background:linear-gradient(to right,#3c7538 10%,#4d9848 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#4d9848 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#4d9848 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#4d9848 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#4d9848 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#4d9848 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#4d9848 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#4d9848 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#4d9848 90%)}50%{background:linear-gradient(to right,#4d9848 0,#3c7538 0)}55%{background:linear-gradient(to right,#4d9848 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#4d9848 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#4d9848 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#4d9848 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#4d9848 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#4d9848 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#4d9848 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#4d9848 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#4d9848 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#4d9848 100%,#3c7538 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#bf1717 0,#e42525 0)}5%{background:linear-gradient(to right,#bf1717 10%,#e42525 10%)}10%{background:linear-gradient(to right,#bf1717 20%,#e42525 20%)}15%{background:linear-gradient(to right,#bf1717 30%,#e42525 30%)}20%{background:linear-gradient(to right,#bf1717 40%,#e42525 40%)}25%{background:linear-gradient(to right,#bf1717 50%,#e42525 50%)}30%{background:linear-gradient(to right,#bf1717 60%,#e42525 60%)}35%{background:linear-gradient(to right,#bf1717 70%,#e42525 70%)}40%{background:linear-gradient(to right,#bf1717 80%,#e42525 80%)}45%{background:linear-gradient(to right,#bf1717 90%,#e42525 90%)}50%{background:linear-gradient(to right,#e42525 0,#bf1717 0)}55%{background:linear-gradient(to right,#e42525 10%,#bf1717 10%)}60%{background:linear-gradient(to right,#e42525 20%,#bf1717 20%)}65%{background:linear-gradient(to right,#e42525 30%,#bf1717 30%)}70%{background:linear-gradient(to right,#e42525 40%,#bf1717 40%)}75%{background:linear-gradient(to right,#e42525 50%,#bf1717 50%)}80%{background:linear-gradient(to right,#e42525 60%,#bf1717 60%)}85%{background:linear-gradient(to right,#e42525 70%,#bf1717 70%)}90%{background:linear-gradient(to right,#e42525 80%,#bf1717 80%)}95%{background:linear-gradient(to right,#e42525 90%,#bf1717 90%)}100%{background:linear-gradient(to right,#e42525 100%,#bf1717 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#bf1717 0,#e42525 0)}5%{background:linear-gradient(to right,#bf1717 10%,#e42525 10%)}10%{background:linear-gradient(to right,#bf1717 20%,#e42525 20%)}15%{background:linear-gradient(to right,#bf1717 30%,#e42525 30%)}20%{background:linear-gradient(to right,#bf1717 40%,#e42525 40%)}25%{background:linear-gradient(to right,#bf1717 50%,#e42525 50%)}30%{background:linear-gradient(to right,#bf1717 60%,#e42525 60%)}35%{background:linear-gradient(to right,#bf1717 70%,#e42525 70%)}40%{background:linear-gradient(to right,#bf1717 80%,#e42525 80%)}45%{background:linear-gradient(to right,#bf1717 90%,#e42525 90%)}50%{background:linear-gradient(to right,#e42525 0,#bf1717 0)}55%{background:linear-gradient(to right,#e42525 10%,#bf1717 10%)}60%{background:linear-gradient(to right,#e42525 20%,#bf1717 20%)}65%{background:linear-gradient(to right,#e42525 30%,#bf1717 30%)}70%{background:linear-gradient(to right,#e42525 40%,#bf1717 40%)}75%{background:linear-gradient(to right,#e42525 50%,#bf1717 50%)}80%{background:linear-gradient(to right,#e42525 60%,#bf1717 60%)}85%{background:linear-gradient(to right,#e42525 70%,#bf1717 70%)}90%{background:linear-gradient(to right,#e42525 80%,#bf1717 80%)}95%{background:linear-gradient(to right,#e42525 90%,#bf1717 90%)}100%{background:linear-gradient(to right,#e42525 100%,#bf1717 100%)}}"]
                }] }
    ];
    /** @nocollapse */
    GoButtonComponent.ctorParameters = function () { return []; };
    GoButtonComponent.propDecorators = {
        buttonDisabled: [{ type: Input }],
        buttonIcon: [{ type: Input }],
        buttonType: [{ type: Input }],
        useLoader: [{ type: Input }],
        handleClick: [{ type: Output }]
    };
    return GoButtonComponent;
}());
export { GoButtonComponent };
if (false) {
    /** @type {?} */
    GoButtonComponent.prototype.buttonDisabled;
    /** @type {?} */
    GoButtonComponent.prototype.buttonIcon;
    /** @type {?} */
    GoButtonComponent.prototype.buttonType;
    /** @type {?} */
    GoButtonComponent.prototype.useLoader;
    /** @type {?} */
    GoButtonComponent.prototype.handleClick;
    /** @type {?} */
    GoButtonComponent.prototype.isProcessing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWJ1dHRvbi9nby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBY0U7UUFKVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFcEQsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRVQsbUNBQU87OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRU0saUNBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLHFDQUFTOzs7SUFBaEI7UUFDRSxPQUFPO1lBQ0wsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDdkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDMUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIscVJBQXlDOztpQkFFMUM7Ozs7O2lDQUVFLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUF3QlQsd0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTdCWSxpQkFBaUI7OztJQUM1QiwyQ0FBaUM7O0lBQ2pDLHVDQUE0Qjs7SUFDNUIsdUNBQTRCOztJQUM1QixzQ0FBNEI7O0lBQzVCLHdDQUFvRDs7SUFFcEQseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydnby1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb0J1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJ1dHRvbkRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBidXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1dHRvblR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgdXNlTG9hZGVyOiBib29sZWFuO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgaXNQcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBjbGlja2VkKCkgOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcgfHwgdGhpcy5idXR0b25EaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdGhpcy51c2VMb2FkZXI7XG4gICAgdGhpcy5oYW5kbGVDbGljay5lbWl0KHRoaXMuaXNQcm9jZXNzaW5nKTtcbiAgfVxuICBcbiAgcHVibGljIHJlc2V0KCkgOiB2b2lkIHtcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNsYXNzTGlzdCgpIDogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2dvLWJ1dHRvbl9fbG9hZGluZyc6IHRoaXMuaXNQcm9jZXNzaW5nLFxuICAgICAgJ2dvLWJ1dHRvbl9fZGlzYWJsZWQnOiB0aGlzLmJ1dHRvbkRpc2FibGVkLFxuICAgICAgJ2dvLWJ1dHRvbl9fYWxlcnQnOiAodGhpcy5idXR0b25UeXBlID09PSAnYWxlcnQnKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==