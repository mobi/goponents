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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWFjY29yZGlvbi9nby1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRTtJQWdCRTtRQVRTLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFLLEdBQVcsT0FBTyxDQUFDO0lBTWpCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxpREFBa0I7OztJQUFsQjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1lBQUM7Z0JBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25CO3FCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRTtvQkFDM0MsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwQjtZQUNILENBQUMsRUFBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsbURBQW9COzs7O0lBQXBCLFVBQXFCLEtBQWdDO1FBQXJELGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQWdDO1FBQ3hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLEtBQWdDO1FBQ3pDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekQsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMkdBQTRDOztpQkFFN0M7Ozs7OzRCQUdFLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBSUwsZUFBZSxTQUFDLHlCQUF5Qjs7SUE4QzVDLDJCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F2RFksb0JBQW9COzs7SUFFL0IseUNBQW9DOztJQUNwQywyQ0FBc0M7O0lBQ3RDLHlDQUFvQzs7SUFDcEMscUNBQWlDOztJQUVqQywyQ0FBb0I7O0lBRXBCLHNDQUF5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBJbnB1dCwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2dvLWFjY29yZGlvbi1wYW5lbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnby1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29BY2NvcmRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIGV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aUV4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93SWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9ICdsaWdodCc7XG5cbiAgYWN0aXZlVGhlbWU6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkcmVuKEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpIHBhbmVsczogUXVlcnlMaXN0PEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZSgpO1xuICAgIHRoaXMubXVsdGlFeHBhbmQgPSB0aGlzLmV4cGFuZEFsbCB8fCB0aGlzLm11bHRpRXhwYW5kO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMucGFuZWxzLnRvQXJyYXkoKS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBwLnRvZ2dsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoIXAuZXhwYW5kZWQgJiYgdGhpcy5tdWx0aUV4cGFuZCkge1xuICAgICAgICAgIHRoaXMub3BlblBhbmVsKHApO1xuICAgICAgICB9IGVsc2UgaWYgKCFwLmV4cGFuZGVkICYmICF0aGlzLm11bHRpRXhwYW5kKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUGFuZWxDbG9zZU90aGVycyhwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGFuZWwocCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwLmV4cGFuZGVkID0gdGhpcy5leHBhbmRBbGwgfHwgcC5leHBhbmRlZDtcbiAgICAgIHAuaWNvbiA9ICF0aGlzLnNob3dJY29ucyA/IG51bGwgOiBwLmljb247XG4gICAgfSlcbiAgfVxuXG4gIG9wZW5QYW5lbENsb3NlT3RoZXJzKHBhbmVsOiBHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50KSB7XG4gICAgdGhpcy5wYW5lbHMudG9BcnJheSgpLmZvckVhY2goKHApID0+IHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbChwKTtcbiAgICB9KTtcblxuICAgIHRoaXMub3BlblBhbmVsKHBhbmVsKTtcbiAgfVxuXG4gIG9wZW5QYW5lbChwYW5lbDogR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkge1xuICAgIHBhbmVsLmV4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlUGFuZWwocGFuZWw6IEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpIHtcbiAgICBwYW5lbC5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG4gIFxuICBzZXRBY3RpdmVUaGVtZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVRoZW1lID0gJ2dvLWFjY29yZGlvbi0tdGhlbWUtJyArIHRoaXMudGhlbWU7XG4gIH1cblxufVxuIl19