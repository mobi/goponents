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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tYWNjb3JkaW9uL2dvLWFjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRCLEtBQUssRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzNFLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0I7UUFUUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsVUFBSyxHQUFXLE9BQU8sQ0FBQztJQU1qQixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUVILENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLEtBQWdDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBZ0M7UUFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBZ0M7UUFDekMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekQsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsMkdBQTRDOzthQUU3Qzs7Ozs7d0JBR0UsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFJTCxlQUFlLFNBQUMseUJBQXlCOzs7O0lBUDFDLHlDQUFvQzs7SUFDcEMsMkNBQXNDOztJQUN0Qyx5Q0FBb0M7O0lBQ3BDLHFDQUFpQzs7SUFFakMsMkNBQW9COztJQUVwQixzQ0FBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9nby1hY2NvcmRpb24tcGFuZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvLWFjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dvLWFjY29yZGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBleHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlFeHBhbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0ljb25zOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSAnbGlnaHQnO1xuXG4gIGFjdGl2ZVRoZW1lOiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50KSBwYW5lbHM6IFF1ZXJ5TGlzdDxHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoKTtcbiAgICB0aGlzLm11bHRpRXhwYW5kID0gdGhpcy5leHBhbmRBbGwgfHwgdGhpcy5tdWx0aUV4cGFuZDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnBhbmVscy50b0FycmF5KCkuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgcC50b2dnbGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKCFwLmV4cGFuZGVkICYmIHRoaXMubXVsdGlFeHBhbmQpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QYW5lbChwKTtcbiAgICAgICAgfSBlbHNlIGlmICghcC5leHBhbmRlZCAmJiAhdGhpcy5tdWx0aUV4cGFuZCkge1xuICAgICAgICAgIHRoaXMub3BlblBhbmVsQ2xvc2VPdGhlcnMocCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBhbmVsKHApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcC5leHBhbmRlZCA9IHRoaXMuZXhwYW5kQWxsIHx8IHAuZXhwYW5kZWQ7XG4gICAgICBwLmljb24gPSAhdGhpcy5zaG93SWNvbnMgPyBudWxsIDogcC5pY29uO1xuICAgIH0pXG4gIH1cblxuICBvcGVuUGFuZWxDbG9zZU90aGVycyhwYW5lbDogR29BY2NvcmRpb25QYW5lbENvbXBvbmVudCkge1xuICAgIHRoaXMucGFuZWxzLnRvQXJyYXkoKS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwocCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZW5QYW5lbChwYW5lbCk7XG4gIH1cblxuICBvcGVuUGFuZWwocGFuZWw6IEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpIHtcbiAgICBwYW5lbC5leHBhbmRlZCA9IHRydWU7XG4gIH1cblxuICBjbG9zZVBhbmVsKHBhbmVsOiBHb0FjY29yZGlvblBhbmVsQ29tcG9uZW50KSB7XG4gICAgcGFuZWwuZXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuICBcbiAgc2V0QWN0aXZlVGhlbWUoKSB7XG4gICAgdGhpcy5hY3RpdmVUaGVtZSA9ICdnby1hY2NvcmRpb24tLXRoZW1lLScgKyB0aGlzLnRoZW1lO1xuICB9XG5cbn1cbiJdfQ==