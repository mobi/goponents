/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GoButtonComponent {
    constructor() {
        this.handleClick = new EventEmitter();
        this.isProcessing = false;
    }
    /**
     * @return {?}
     */
    clicked() {
        if (this.isProcessing || this.buttonDisabled) {
            return;
        }
        this.isProcessing = this.useLoader;
        this.handleClick.emit(this.isProcessing);
    }
    /**
     * @return {?}
     */
    reset() {
        this.isProcessing = false;
    }
    /**
     * @return {?}
     */
    classList() {
        return {
            'go-button__loading': this.isProcessing,
            'go-button__disabled': this.buttonDisabled,
            'go-button__alert': (this.buttonType === 'alert')
        };
    }
}
GoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-button',
                template: "<button class=\"go-button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\" class=\"go-button__icon\" *ngIf=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                styles: [".go-button{background-color:#65b360;border-radius:4px;border:none;color:#fff;cursor:pointer;font-size:.75rem;height:2.5rem;letter-spacing:1.25pt;overflow:hidden;outline:0;padding:.75rem 1rem;position:relative;text-transform:uppercase;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button::after{border-bottom-left-radius:4px;border-bottom-right-radius:4px;bottom:-5px;content:'';display:block;height:5px;left:0;opacity:0;position:absolute;width:100%;z-index:1;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button:hover{background-color:#52a24d}.go-button__icon{font-size:1rem;padding-right:.5rem;vertical-align:text-top}.go-button__loading{background-color:#65b360;cursor:not-allowed}.go-button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;bottom:0;opacity:1}.go-button__loading.go-button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.go-button__disabled{background-color:#b1b1b1;color:#313536}.go-button__disabled:hover{cursor:not-allowed;background-color:#b1b1b1}.go-button__alert{background-color:#ea5252}.go-button__alert:hover{background-color:#e63232}.go-button__alert.go-button__loading{background-color:#ea5252}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#4d9848 0)}5%{background:linear-gradient(to right,#3c7538 10%,#4d9848 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#4d9848 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#4d9848 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#4d9848 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#4d9848 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#4d9848 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#4d9848 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#4d9848 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#4d9848 90%)}50%{background:linear-gradient(to right,#4d9848 0,#3c7538 0)}55%{background:linear-gradient(to right,#4d9848 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#4d9848 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#4d9848 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#4d9848 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#4d9848 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#4d9848 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#4d9848 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#4d9848 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#4d9848 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#4d9848 100%,#3c7538 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#4d9848 0)}5%{background:linear-gradient(to right,#3c7538 10%,#4d9848 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#4d9848 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#4d9848 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#4d9848 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#4d9848 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#4d9848 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#4d9848 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#4d9848 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#4d9848 90%)}50%{background:linear-gradient(to right,#4d9848 0,#3c7538 0)}55%{background:linear-gradient(to right,#4d9848 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#4d9848 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#4d9848 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#4d9848 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#4d9848 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#4d9848 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#4d9848 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#4d9848 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#4d9848 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#4d9848 100%,#3c7538 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#bf1717 0,#e42525 0)}5%{background:linear-gradient(to right,#bf1717 10%,#e42525 10%)}10%{background:linear-gradient(to right,#bf1717 20%,#e42525 20%)}15%{background:linear-gradient(to right,#bf1717 30%,#e42525 30%)}20%{background:linear-gradient(to right,#bf1717 40%,#e42525 40%)}25%{background:linear-gradient(to right,#bf1717 50%,#e42525 50%)}30%{background:linear-gradient(to right,#bf1717 60%,#e42525 60%)}35%{background:linear-gradient(to right,#bf1717 70%,#e42525 70%)}40%{background:linear-gradient(to right,#bf1717 80%,#e42525 80%)}45%{background:linear-gradient(to right,#bf1717 90%,#e42525 90%)}50%{background:linear-gradient(to right,#e42525 0,#bf1717 0)}55%{background:linear-gradient(to right,#e42525 10%,#bf1717 10%)}60%{background:linear-gradient(to right,#e42525 20%,#bf1717 20%)}65%{background:linear-gradient(to right,#e42525 30%,#bf1717 30%)}70%{background:linear-gradient(to right,#e42525 40%,#bf1717 40%)}75%{background:linear-gradient(to right,#e42525 50%,#bf1717 50%)}80%{background:linear-gradient(to right,#e42525 60%,#bf1717 60%)}85%{background:linear-gradient(to right,#e42525 70%,#bf1717 70%)}90%{background:linear-gradient(to right,#e42525 80%,#bf1717 80%)}95%{background:linear-gradient(to right,#e42525 90%,#bf1717 90%)}100%{background:linear-gradient(to right,#e42525 100%,#bf1717 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#bf1717 0,#e42525 0)}5%{background:linear-gradient(to right,#bf1717 10%,#e42525 10%)}10%{background:linear-gradient(to right,#bf1717 20%,#e42525 20%)}15%{background:linear-gradient(to right,#bf1717 30%,#e42525 30%)}20%{background:linear-gradient(to right,#bf1717 40%,#e42525 40%)}25%{background:linear-gradient(to right,#bf1717 50%,#e42525 50%)}30%{background:linear-gradient(to right,#bf1717 60%,#e42525 60%)}35%{background:linear-gradient(to right,#bf1717 70%,#e42525 70%)}40%{background:linear-gradient(to right,#bf1717 80%,#e42525 80%)}45%{background:linear-gradient(to right,#bf1717 90%,#e42525 90%)}50%{background:linear-gradient(to right,#e42525 0,#bf1717 0)}55%{background:linear-gradient(to right,#e42525 10%,#bf1717 10%)}60%{background:linear-gradient(to right,#e42525 20%,#bf1717 20%)}65%{background:linear-gradient(to right,#e42525 30%,#bf1717 30%)}70%{background:linear-gradient(to right,#e42525 40%,#bf1717 40%)}75%{background:linear-gradient(to right,#e42525 50%,#bf1717 50%)}80%{background:linear-gradient(to right,#e42525 60%,#bf1717 60%)}85%{background:linear-gradient(to right,#e42525 70%,#bf1717 70%)}90%{background:linear-gradient(to right,#e42525 80%,#bf1717 80%)}95%{background:linear-gradient(to right,#e42525 90%,#bf1717 90%)}100%{background:linear-gradient(to right,#e42525 100%,#bf1717 100%)}}"]
            }] }
];
/** @nocollapse */
GoButtonComponent.ctorParameters = () => [];
GoButtonComponent.propDecorators = {
    buttonDisabled: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    buttonType: [{ type: Input }],
    useLoader: [{ type: Input }],
    handleClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWJ1dHRvbi9nby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxpQkFBaUI7SUFTNUI7UUFKVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFcEQsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRWhCLE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDdkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDMUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIscVJBQXlDOzthQUUxQzs7Ozs7NkJBRUUsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxNQUFNOzs7O0lBSlAsMkNBQWlDOztJQUNqQyx1Q0FBNEI7O0lBQzVCLHVDQUE0Qjs7SUFDNUIsc0NBQTRCOztJQUM1Qix3Q0FBb0Q7O0lBRXBELHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ28tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29CdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBidXR0b25EaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYnV0dG9uSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25UeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZUxvYWRlcjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGhhbmRsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGlzUHJvY2Vzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBjbGlja2VkKCkgOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Byb2Nlc3NpbmcgfHwgdGhpcy5idXR0b25EaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdGhpcy51c2VMb2FkZXI7XG4gICAgdGhpcy5oYW5kbGVDbGljay5lbWl0KHRoaXMuaXNQcm9jZXNzaW5nKTtcbiAgfVxuICBcbiAgcmVzZXQoKSA6IHZvaWQge1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gIH1cblxuICBjbGFzc0xpc3QoKSA6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdnby1idXR0b25fX2xvYWRpbmcnOiB0aGlzLmlzUHJvY2Vzc2luZyxcbiAgICAgICdnby1idXR0b25fX2Rpc2FibGVkJzogdGhpcy5idXR0b25EaXNhYmxlZCxcbiAgICAgICdnby1idXR0b25fX2FsZXJ0JzogKHRoaXMuYnV0dG9uVHlwZSA9PT0gJ2FsZXJ0JylcbiAgICB9O1xuICB9XG59XG4iXX0=