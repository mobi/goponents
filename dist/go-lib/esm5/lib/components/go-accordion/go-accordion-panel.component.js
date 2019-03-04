/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var GoAccordionPanelComponent = /** @class */ (function () {
    function GoAccordionPanelComponent() {
        this.expanded = false;
        this.icon = null;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    GoAccordionPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.expanded = this.expanded || false;
    };
    GoAccordionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-accordion-panel',
                    template: "<div class=\"go-accordion-panel\" [ngClass]=\"{ 'go-accordion-panel--active': expanded, 'go-accordion-panel--inactive': !expanded }\">\n  <header class=\"go-accordion-panel__title-bar\" (click)=\"toggle.emit()\" aria-expanded=\"expanded\">\n    <span class=\"go-accordion-panel__title\">\n      <span *ngIf=\"icon\" class=\"material-icons go-accordion-panel__title-icon\">{{ icon }}</span>\n      <span class=\"go-accordion-panel__title-text\" [innerHtml]=\"title\"></span>\n    </span>\n    <span class=\"go-accordion-panel__control\">\n      <span class=\"material-icons go-accordion-panel__control-icon\">expand_more</span>\n    </span>\n  </header>\n  <div class=\"go-accordion-panel__content-container\">\n    <div class=\"go-accordion-panel__content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".go-accordion-panel__title-bar{cursor:pointer;display:flex;font-size:1.2rem;padding:1.2rem 0;position:relative;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__title{align-items:center;display:flex;flex-grow:1}.go-accordion-panel__title-icon{display:flex;flex-direction:column;justify-content:center;padding-left:1rem;text-align:center}.go-accordion-panel__title-text{padding-left:1rem}.go-accordion-panel__control{display:flex;flex-direction:column;justify-content:center;padding:0 1rem;text-align:center}.go-accordion-panel__control-icon{transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__content-container{max-height:0;opacity:0;overflow:hidden;visibility:hidden}.go-accordion-panel__content{display:block;padding:0 1rem;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}.go-accordion--theme-light .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #b1b1b1}.go-accordion--theme-light .go-accordion-panel--active .go-accordion-panel__title-bar{background:#f5f5f5}.go-accordion--theme-light .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#fff}.go-accordion--theme-light .go-accordion-panel__title-bar:hover{background:#ededed}.go-accordion--theme-light .go-accordion-panel__content{color:#313536}.go-accordion--theme-dark{background:#313536;border:1px solid #202626;color:#fff;font-weight:300}.go-accordion--theme-dark .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #202626}.go-accordion--theme-dark .go-accordion-panel--active .go-accordion-panel__title-bar{background:#272b2b}.go-accordion--theme-dark .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#313536}.go-accordion--theme-dark .go-accordion-panel__title-bar:hover{background:#202323}.go-accordion--theme-dark .go-accordion-panel__content{color:#fff;font-weight:300}go-accordion-panel:last-of-type .go-accordion-panel::before{border-bottom-left-radius:calc(4px - 1px)}go-accordion-panel:last-of-type .go-accordion-panel__title-bar{border-radius:0 0 4px 4px;overflow:hidden}go-accordion-panel:first-of-type .go-accordion-panel::before{border-top-left-radius:calc(4px - 1px)}go-accordion-panel:first-of-type .go-accordion-panel__title-bar{border-radius:4px 4px 0 0;overflow:hidden}.go-accordion-panel{position:relative}.go-accordion-panel::before{background:linear-gradient(to right,#65b360,#4d9848);background-color:#65b360;content:\" \";height:100%;left:0;opacity:0;position:absolute;transition:.25s ease-in;width:4px;z-index:1}.go-accordion-panel.go-accordion-panel--active::before{opacity:1}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__control .material-icons{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content-container{max-height:1000000px;opacity:1;visibility:visible}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content{padding:1.5rem 1rem}.go-accordion-panel.go-accordion-panel--inactive::before{opacity:0}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__control .material-icons{-webkit-transform:rotate(0);transform:rotate(0)}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__content-container{max-height:0;opacity:0;visibility:hidden}.go-accordion--slim .go-accordion-panel__title-bar{font-size:1rem}"]
                }] }
    ];
    /** @nocollapse */
    GoAccordionPanelComponent.ctorParameters = function () { return []; };
    GoAccordionPanelComponent.propDecorators = {
        expanded: [{ type: Input }],
        icon: [{ type: Input }],
        title: [{ type: Input }],
        toggle: [{ type: Output }]
    };
    return GoAccordionPanelComponent;
}());
export { GoAccordionPanelComponent };
if (false) {
    /** @type {?} */
    GoAccordionPanelComponent.prototype.expanded;
    /** @type {?} */
    GoAccordionPanelComponent.prototype.icon;
    /** @type {?} */
    GoAccordionPanelComponent.prototype.title;
    /** @type {?} */
    GoAccordionPanelComponent.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0YW5nb2UvZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tYWNjb3JkaW9uL2dvLWFjY29yZGlvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEc7SUFjRTtRQU5TLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUduQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFOUMsQ0FBQzs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO0lBQ3pDLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsaTBCQUFrRDtvQkFFbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7MkJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsTUFBTTs7SUFRVCxnQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBZFkseUJBQXlCOzs7SUFFcEMsNkNBQW1DOztJQUNuQyx5Q0FBNkI7O0lBQzdCLDBDQUF1Qjs7SUFFdkIsMkNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tYWNjb3JkaW9uLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvLWFjY29yZGlvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dvLWFjY29yZGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEdvQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIFxuICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZXhwYW5kZWQgfHwgZmFsc2U7XG4gIH1cblxufVxuIl19