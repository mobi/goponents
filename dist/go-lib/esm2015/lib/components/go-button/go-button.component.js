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
    // Public Methods
    /**
     * @return {?}
     */
    clicked() {
        if (this.isProcessing) {
            return;
        }
        this.isProcessing = true;
        this.handleClick.emit(this.isProcessing);
    }
    /**
     * @return {?}
     */
    classList() {
        return {
            'button__loading': this.isProcessing,
            'button__disabled': (this.buttonType === 'disabled'),
            'button__alert': (this.buttonType === 'alert')
        };
    }
}
GoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-button',
                template: "<button class=\"button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                styles: [".button{background-color:#65b360;border-radius:2px;color:#fff;font-size:14px;height:44px;padding:14px;text-align:center;transition:.3s}.button:hover{background-color:#448640}.button__loading{background-color:#65b360;position:relative}.button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;border-bottom-left-radius:2px;border-bottom-right-radius:2px;bottom:0;content:'';display:block;height:5px;left:0;position:absolute;width:100%;z-index:1}.button__loading.button__alert{background-color:#ed232b}.button__loading.button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.button__disabled{background-color:#ccc;color:#000}.button__disabled:hover{background-color:#999}.button__alert{background-color:#db1f26}.button__alert:hover{background-color:#9d161b}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#488044 0,#579952 0)}5%{background:linear-gradient(to right,#488044 10%,#579952 10%)}10%{background:linear-gradient(to right,#488044 20%,#579952 20%)}15%{background:linear-gradient(to right,#488044 30%,#579952 30%)}20%{background:linear-gradient(to right,#488044 40%,#579952 40%)}25%{background:linear-gradient(to right,#488044 50%,#579952 50%)}30%{background:linear-gradient(to right,#488044 60%,#579952 60%)}35%{background:linear-gradient(to right,#488044 70%,#579952 70%)}40%{background:linear-gradient(to right,#488044 80%,#579952 80%)}45%{background:linear-gradient(to right,#488044 90%,#579952 90%)}50%{background:linear-gradient(to right,#579952 0,#488044 0)}55%{background:linear-gradient(to right,#579952 10%,#488044 10%)}60%{background:linear-gradient(to right,#579952 20%,#488044 20%)}65%{background:linear-gradient(to right,#579952 30%,#488044 30%)}70%{background:linear-gradient(to right,#579952 40%,#488044 40%)}75%{background:linear-gradient(to right,#579952 50%,#488044 50%)}80%{background:linear-gradient(to right,#579952 60%,#488044 60%)}85%{background:linear-gradient(to right,#579952 70%,#488044 70%)}90%{background:linear-gradient(to right,#579952 80%,#488044 80%)}95%{background:linear-gradient(to right,#579952 90%,#488044 90%)}100%{background:linear-gradient(to right,#579952 100%,#488044 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#6a0f12 0,#db1f26 0)}5%{background:linear-gradient(to right,#6a0f12 10%,#db1f26 10%)}10%{background:linear-gradient(to right,#6a0f12 20%,#db1f26 20%)}15%{background:linear-gradient(to right,#6a0f12 30%,#db1f26 30%)}20%{background:linear-gradient(to right,#6a0f12 40%,#db1f26 40%)}25%{background:linear-gradient(to right,#6a0f12 50%,#db1f26 50%)}30%{background:linear-gradient(to right,#6a0f12 60%,#db1f26 60%)}35%{background:linear-gradient(to right,#6a0f12 70%,#db1f26 70%)}40%{background:linear-gradient(to right,#6a0f12 80%,#db1f26 80%)}45%{background:linear-gradient(to right,#6a0f12 90%,#db1f26 90%)}50%{background:linear-gradient(to right,#db1f26 0,#6a0f12 0)}55%{background:linear-gradient(to right,#db1f26 10%,#6a0f12 10%)}60%{background:linear-gradient(to right,#db1f26 20%,#6a0f12 20%)}65%{background:linear-gradient(to right,#db1f26 30%,#6a0f12 30%)}70%{background:linear-gradient(to right,#db1f26 40%,#6a0f12 40%)}75%{background:linear-gradient(to right,#db1f26 50%,#6a0f12 50%)}80%{background:linear-gradient(to right,#db1f26 60%,#6a0f12 60%)}85%{background:linear-gradient(to right,#db1f26 70%,#6a0f12 70%)}90%{background:linear-gradient(to right,#db1f26 80%,#6a0f12 80%)}95%{background:linear-gradient(to right,#db1f26 90%,#6a0f12 90%)}100%{background:linear-gradient(to right,#db1f26 100%,#6a0f12 100%)}}"]
            }] }
];
/** @nocollapse */
GoButtonComponent.ctorParameters = () => [];
GoButtonComponent.propDecorators = {
    buttonIcon: [{ type: Input }],
    buttonType: [{ type: Input }],
    handleClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvLXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby1idXR0b24vZ28tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8saUJBQWlCO0lBTzVCO1FBSlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBS2xELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBSU0sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDcEMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQztZQUNwRCxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsbU9BQXlDOzthQUUxQzs7Ozs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLE1BQU07Ozs7SUFGUCx1Q0FBNEI7O0lBQzVCLHVDQUE0Qjs7SUFDNUIsd0NBQW9EOztJQUVwRCx5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnby1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ28tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnV0dG9uSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25UeXBlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgaXNQcm9jZXNzaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyBQdWJsaWMgTWV0aG9kc1xuXG4gIHB1YmxpYyBjbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZykgeyByZXR1cm47IH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrLmVtaXQodGhpcy5pc1Byb2Nlc3NpbmcpO1xuICB9XG5cbiAgcHVibGljIGNsYXNzTGlzdCgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnYnV0dG9uX19sb2FkaW5nJzogdGhpcy5pc1Byb2Nlc3NpbmcsXG4gICAgICAnYnV0dG9uX19kaXNhYmxlZCc6ICh0aGlzLmJ1dHRvblR5cGUgPT09ICdkaXNhYmxlZCcpLFxuICAgICAgJ2J1dHRvbl9fYWxlcnQnOiAodGhpcy5idXR0b25UeXBlID09PSAnYWxlcnQnKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==