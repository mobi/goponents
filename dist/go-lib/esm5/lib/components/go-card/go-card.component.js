/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var GoCardComponent = /** @class */ (function () {
    function GoCardComponent() {
        this.showHeader = true;
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
    return GoCardComponent;
}());
export { GoCardComponent };
if (false) {
    /** @type {?} */
    GoCardComponent.prototype.showHeader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGFuZ29lL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWNhcmQvZ28tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBQUE7UUFTVyxlQUFVLEdBQVksSUFBSSxDQUFDO0lBRXRDLENBQUM7O2dCQVhBLFNBQVMsU0FBQztvQkFDVixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLFNBQVM7b0JBRW5CLGdSQUF1Qzs7aUJBQ3ZDOzs7NkJBSUUsS0FBSzs7SUFFUixzQkFBQztDQUFBLEFBWEQsSUFXQztTQUpZLGVBQWU7OztJQUUxQixxQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuIHNlbGVjdG9yOiAnZ28tY2FyZCcsXG4gc3R5bGVVcmxzOiBbJy4vZ28tY2FyZC5jb21wb25lbnQuc2NzcyddLFxuIHRlbXBsYXRlVXJsOiAnLi9nby1jYXJkLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEdvQ2FyZENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbn1cbiJdfQ==