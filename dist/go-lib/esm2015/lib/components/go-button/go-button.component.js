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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tYnV0dG9uL2dvLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QjtRQUpVLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVwRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztJQUVmLENBQUM7Ozs7SUFFVCxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsT0FBTztZQUNMLG9CQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3ZDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUM7U0FDbEQsQ0FBQztJQUNKLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHFSQUF5Qzs7YUFFMUM7Ozs7OzZCQUVFLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7OztJQUpQLDJDQUFpQzs7SUFDakMsdUNBQTRCOztJQUM1Qix1Q0FBNEI7O0lBQzVCLHNDQUE0Qjs7SUFDNUIsd0NBQW9EOztJQUVwRCx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnby1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ28tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnV0dG9uRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCkgYnV0dG9uVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VMb2FkZXI6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBpc1Byb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGNsaWNrZWQoKSA6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZyB8fCB0aGlzLmJ1dHRvbkRpc2FibGVkKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0aGlzLnVzZUxvYWRlcjtcbiAgICB0aGlzLmhhbmRsZUNsaWNrLmVtaXQodGhpcy5pc1Byb2Nlc3NpbmcpO1xuICB9XG4gIFxuICBwdWJsaWMgcmVzZXQoKSA6IHZvaWQge1xuICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgY2xhc3NMaXN0KCkgOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnZ28tYnV0dG9uX19sb2FkaW5nJzogdGhpcy5pc1Byb2Nlc3NpbmcsXG4gICAgICAnZ28tYnV0dG9uX19kaXNhYmxlZCc6IHRoaXMuYnV0dG9uRGlzYWJsZWQsXG4gICAgICAnZ28tYnV0dG9uX19hbGVydCc6ICh0aGlzLmJ1dHRvblR5cGUgPT09ICdhbGVydCcpXG4gICAgfTtcbiAgfVxufVxuIl19