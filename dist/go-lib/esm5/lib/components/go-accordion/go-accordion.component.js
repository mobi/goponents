/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';
var GoAccordionComponent = /** @class */ (function () {
    function GoAccordionComponent() {
        this.expandAll = false;
        this.multiExpand = false;
        this.showIcons = false;
        this.theme = 'light';
    }
    /**
     * @return {?}
     */
    GoAccordionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setActiveTheme();
        this.multiExpand = this.expandAll || this.multiExpand;
    };
    /**
     * @return {?}
     */
    GoAccordionComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.panels.toArray().forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            p.toggle.subscribe((/**
             * @return {?}
             */
            function () {
                if (!p.expanded && _this.multiExpand) {
                    _this.openPanel(p);
                }
                else if (!p.expanded && !_this.multiExpand) {
                    _this.openPanelCloseOthers(p);
                }
                else {
                    _this.closePanel(p);
                }
            }));
            p.expanded = _this.expandAll || p.expanded;
            p.icon = !_this.showIcons ? null : p.icon;
        }));
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    GoAccordionComponent.prototype.openPanelCloseOthers = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        var _this = this;
        this.panels.toArray().forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            _this.closePanel(p);
        }));
        this.openPanel(panel);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    GoAccordionComponent.prototype.openPanel = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        panel.expanded = true;
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    GoAccordionComponent.prototype.closePanel = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        panel.expanded = false;
    };
    /**
     * @return {?}
     */
    GoAccordionComponent.prototype.setActiveTheme = /**
     * @return {?}
     */
    function () {
        this.activeTheme = 'go-accordion--theme-' + this.theme;
    };
    GoAccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-accordion',
                    template: "<div class=\"go-accordion\" [ngClass]=\"[activeTheme]\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".go-accordion{border-radius:4px;display:flex;flex-direction:column;min-width:200px}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}"]
                }] }
    ];
    /** @nocollapse */
    GoAccordionComponent.ctorParameters = function () { return []; };
    GoAccordionComponent.propDecorators = {
        expandAll: [{ type: Input }],
        multiExpand: [{ type: Input }],
        showIcons: [{ type: Input }],
        theme: [{ type: Input }],
        panels: [{ type: ContentChildren, args: [GoAccordionPanelComponent,] }]
    };
    return GoAccordionComponent;
}());
export { GoAccordionComponent };
if (false) {
    /** @type {?} */
    GoAccordionComponent.prototype.expandAll;
    /** @type {?} */
    GoAccordionComponent.prototype.multiExpand;
    /** @type {?} */
    GoAccordionComponent.prototype.showIcons;
    /** @type {?} */
    GoAccordionComponent.prototype.theme;
    /** @type {?} */
    GoAccordionComponent.prototype.activeTheme;
    /** @type {?} */
    GoAccordionComponent.prototype.panels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tYWNjb3JkaW9uL2dvLWFjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLEtBQUssRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNFO0lBZ0JFO1FBVFMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxPQUFPLENBQUM7SUFNakIsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELGlEQUFrQjs7O0lBQWxCO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7WUFBQztnQkFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFO29CQUMzQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFFSCxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBZ0M7UUFBckQsaUJBTUM7UUFMQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsS0FBZ0M7UUFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsS0FBZ0M7UUFDekMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDZDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RCxDQUFDOztnQkExREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QiwyR0FBNEM7O2lCQUU3Qzs7Ozs7NEJBR0UsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFJTCxlQUFlLFNBQUMseUJBQXlCOztJQThDNUMsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXZEWSxvQkFBb0I7OztJQUUvQix5Q0FBb0M7O0lBQ3BDLDJDQUFzQzs7SUFDdEMseUNBQW9DOztJQUNwQyxxQ0FBaUM7O0lBRWpDLDJDQUFvQjs7SUFFcEIsc0NBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZ28tYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nby1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nby1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb0FjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgZXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpRXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dJY29uczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJ2xpZ2h0JztcblxuICBhY3RpdmVUaGVtZTogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkgcGFuZWxzOiBRdWVyeUxpc3Q8R29BY2NvcmRpb25QYW5lbENvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKCk7XG4gICAgdGhpcy5tdWx0aUV4cGFuZCA9IHRoaXMuZXhwYW5kQWxsIHx8IHRoaXMubXVsdGlFeHBhbmQ7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5wYW5lbHMudG9BcnJheSgpLmZvckVhY2goKHApID0+IHtcbiAgICAgIHAudG9nZ2xlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghcC5leHBhbmRlZCAmJiB0aGlzLm11bHRpRXhwYW5kKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUGFuZWwocCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXAuZXhwYW5kZWQgJiYgIXRoaXMubXVsdGlFeHBhbmQpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QYW5lbENsb3NlT3RoZXJzKHApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbChwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHAuZXhwYW5kZWQgPSB0aGlzLmV4cGFuZEFsbCB8fCBwLmV4cGFuZGVkO1xuICAgICAgcC5pY29uID0gIXRoaXMuc2hvd0ljb25zID8gbnVsbCA6IHAuaWNvbjtcbiAgICB9KVxuICB9XG5cbiAgb3BlblBhbmVsQ2xvc2VPdGhlcnMocGFuZWw6IEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLnBhbmVscy50b0FycmF5KCkuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKHApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcGVuUGFuZWwocGFuZWwpO1xuICB9XG5cbiAgb3BlblBhbmVsKHBhbmVsOiBHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50KSB7XG4gICAgcGFuZWwuZXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VQYW5lbChwYW5lbDogR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkge1xuICAgIHBhbmVsLmV4cGFuZGVkID0gZmFsc2U7XG4gIH1cbiAgXG4gIHNldEFjdGl2ZVRoZW1lKCkge1xuICAgIHRoaXMuYWN0aXZlVGhlbWUgPSAnZ28tYWNjb3JkaW9uLS10aGVtZS0nICsgdGhpcy50aGVtZTtcbiAgfVxuXG59XG4iXX0=