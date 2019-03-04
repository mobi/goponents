/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class GoCardComponent {
    constructor() {
        this.showHeader = true;
    }
}
GoCardComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'go-card',
                template: "<div class=\"card\">\n  <header class=\"card__header\" *ngIf=\"showHeader\">\n    <ng-content select=\"[go-card-header]\"></ng-content>\n  </header>\n  <div class=\"card_content\">\n    <ng-content select=\"[go-card-content]\"></ng-content>\n  </div>\n</div>\n",
                styles: [".card{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);display:flex;flex-direction:column;padding:1rem}.card__header{display:flex;justify-content:space-between;padding-bottom:1rem}.card__action-list{display:flex}.card__action-list li{cursor:pointer;padding:0 .4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.25s cubic-bezier(.25,.8,.25,1)}.card__action-list li:last-child{padding-right:0}.card__action-list li:hover{color:#65b360}"]
            }] }
];
GoCardComponent.propDecorators = {
    showHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GoCardComponent.prototype.showHeader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGFuZ29lL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWNhcmQvZ28tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3BFLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBU1csZUFBVSxHQUFZLElBQUksQ0FBQztJQUV0QyxDQUFDOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1YsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxTQUFTO2dCQUVuQixnUkFBdUM7O2FBQ3ZDOzs7eUJBSUUsS0FBSzs7OztJQUFOLHFDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gc2VsZWN0b3I6ICdnby1jYXJkJyxcbiBzdHlsZVVybHM6IFsnLi9nby1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gdGVtcGxhdGVVcmw6ICcuL2dvLWNhcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgR29DYXJkQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzaG93SGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcblxufVxuIl19