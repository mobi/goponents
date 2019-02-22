/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';
export class GoAccordionComponent {
    constructor() {
        this.expandAll = false;
        this.multiExpand = false;
        this.showIcons = false;
        this.theme = 'light';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setActiveTheme();
        this.multiExpand = this.expandAll || this.multiExpand;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.panels.toArray().forEach((/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
            p.toggle.subscribe((/**
             * @return {?}
             */
            () => {
                if (!p.expanded && this.multiExpand) {
                    this.openPanel(p);
                }
                else if (!p.expanded && !this.multiExpand) {
                    this.openPanelCloseOthers(p);
                }
                else {
                    this.closePanel(p);
                }
            }));
            p.expanded = this.expandAll || p.expanded;
            p.icon = !this.showIcons ? null : p.icon;
        }));
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    openPanelCloseOthers(panel) {
        this.panels.toArray().forEach((/**
         * @param {?} p
         * @return {?}
         */
        (p) => {
            this.closePanel(p);
        }));
        this.openPanel(panel);
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    openPanel(panel) {
        panel.expanded = true;
    }
    /**
     * @param {?} panel
     * @return {?}
     */
    closePanel(panel) {
        panel.expanded = false;
    }
    /**
     * @return {?}
     */
    setActiveTheme() {
        this.activeTheme = 'go-accordion--theme-' + this.theme;
    }
}
GoAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-accordion',
                template: "<div class=\"go-accordion\" [ngClass]=\"[activeTheme]\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".go-accordion{border-radius:4px;display:flex;flex-direction:column;min-width:200px}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}"]
            }] }
];
/** @nocollapse */
GoAccordionComponent.ctorParameters = () => [];
GoAccordionComponent.propDecorators = {
    expandAll: [{ type: Input }],
    multiExpand: [{ type: Input }],
    showIcons: [{ type: Input }],
    theme: [{ type: Input }],
    panels: [{ type: ContentChildren, args: [GoAccordionPanelComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dvcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dvLWFjY29yZGlvbi9nby1hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU8zRSxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CO1FBVFMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxPQUFPLENBQUM7SUFNakIsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFFSCxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxLQUFnQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWdDO1FBQ3hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWdDO1FBQ3pDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pELENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDJHQUE0Qzs7YUFFN0M7Ozs7O3dCQUdFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBSUwsZUFBZSxTQUFDLHlCQUF5Qjs7OztJQVAxQyx5Q0FBb0M7O0lBQ3BDLDJDQUFzQzs7SUFDdEMseUNBQW9DOztJQUNwQyxxQ0FBaUM7O0lBRWpDLDJDQUFvQjs7SUFFcEIsc0NBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZ28tYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nby1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nby1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb0FjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgZXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpRXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dJY29uczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJ2xpZ2h0JztcblxuICBhY3RpdmVUaGVtZTogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkgcGFuZWxzOiBRdWVyeUxpc3Q8R29BY2NvcmRpb25QYW5lbENvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKCk7XG4gICAgdGhpcy5tdWx0aUV4cGFuZCA9IHRoaXMuZXhwYW5kQWxsIHx8IHRoaXMubXVsdGlFeHBhbmQ7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5wYW5lbHMudG9BcnJheSgpLmZvckVhY2goKHApID0+IHtcbiAgICAgIHAudG9nZ2xlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghcC5leHBhbmRlZCAmJiB0aGlzLm11bHRpRXhwYW5kKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUGFuZWwocCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXAuZXhwYW5kZWQgJiYgIXRoaXMubXVsdGlFeHBhbmQpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QYW5lbENsb3NlT3RoZXJzKHApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbChwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHAuZXhwYW5kZWQgPSB0aGlzLmV4cGFuZEFsbCB8fCBwLmV4cGFuZGVkO1xuICAgICAgcC5pY29uID0gIXRoaXMuc2hvd0ljb25zID8gbnVsbCA6IHAuaWNvbjtcbiAgICB9KVxuICB9XG5cbiAgb3BlblBhbmVsQ2xvc2VPdGhlcnMocGFuZWw6IEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLnBhbmVscy50b0FycmF5KCkuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKHApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcGVuUGFuZWwocGFuZWwpO1xuICB9XG5cbiAgb3BlblBhbmVsKHBhbmVsOiBHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50KSB7XG4gICAgcGFuZWwuZXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VQYW5lbChwYW5lbDogR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkge1xuICAgIHBhbmVsLmV4cGFuZGVkID0gZmFsc2U7XG4gIH1cbiAgXG4gIHNldEFjdGl2ZVRoZW1lKCkge1xuICAgIHRoaXMuYWN0aXZlVGhlbWUgPSAnZ28tYWNjb3JkaW9uLS10aGVtZS0nICsgdGhpcy50aGVtZTtcbiAgfVxuXG59XG4iXX0=