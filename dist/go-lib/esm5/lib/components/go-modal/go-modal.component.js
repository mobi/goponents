/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';
var GoModalComponent = /** @class */ (function () {
    function GoModalComponent(componentFactoryResolver, goModalService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.goModalService = goModalService;
        this.opened = false;
    }
    /**
     * @return {?}
     */
    GoModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.goModalService.activeModalComponent.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.currentComponent = value;
            _this.loadComponent();
        }));
        this.goModalService.modalOpen.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.opened = value;
        }));
    };
    /**
     * @return {?}
     */
    GoModalComponent.prototype.loadComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
        /** @type {?} */
        var viewContainerRef = this.goModalHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        var componentRef = viewContainerRef.createComponent(componentFactory);
        Object.keys(this.currentComponent.bindings).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            componentRef.instance[key] = _this.currentComponent.bindings[key];
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GoModalComponent.prototype.closeModalContainer = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.goModalContainer.nativeElement.contains(event.target)) {
            this.closeModal();
        }
    };
    /**
     * @return {?}
     */
    GoModalComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.goModalService.toggleModal(false);
    };
    /**
     * @return {?}
     */
    GoModalComponent.prototype.goModalClasses = /**
     * @return {?}
     */
    function () {
        return { 'go-modal--visible': this.opened };
    };
    GoModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-modal',
                    template: "<div class=\"go-modal\" [ngClass]=\"goModalClasses()\" (click)=\"closeModalContainer($event)\">\n  <div class=\"go-modal__container\" #goModalContainer>\n    <div class=\"go-modal__close\" (click)=\"closeModal()\">\n      <go-icon icon=\"close\"></go-icon>\n    </div>\n    <ng-template go-modal-host>\n    </ng-template>\n  </div>\n</div>",
                    styles: [".go-modal{align-items:center;background:rgba(49,53,54,.9);display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:400;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal__container{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);color:#313536;max-height:80%;max-width:32.5rem;padding:2rem 1rem 1rem;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-transform:scale(1.1);transform:scale(1.1);transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal.go-modal--visible{opacity:1;visibility:visible}.go-modal.go-modal--visible .go-modal__container{-webkit-transform:scale(1);transform:scale(1)}.go-modal__close{color:#313536;cursor:pointer;padding:.5rem;position:absolute;right:0;top:0}"]
                }] }
    ];
    /** @nocollapse */
    GoModalComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: GoModalService }
    ]; };
    GoModalComponent.propDecorators = {
        goModalHost: [{ type: ViewChild, args: [GoModalDirective,] }],
        goModalContainer: [{ type: ViewChild, args: ['goModalContainer',] }]
    };
    return GoModalComponent;
}());
export { GoModalComponent };
if (false) {
    /** @type {?} */
    GoModalComponent.prototype.currentComponent;
    /** @type {?} */
    GoModalComponent.prototype.opened;
    /** @type {?} */
    GoModalComponent.prototype.goModalHost;
    /** @type {?} */
    GoModalComponent.prototype.goModalContainer;
    /**
     * @type {?}
     * @private
     */
    GoModalComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    GoModalComponent.prototype.goModalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby1tb2RhbC9nby1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsd0JBQXdCLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQVlFLDBCQUNVLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBU3hCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBSztZQUN2RCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQUEsaUJBVUM7O1lBVE8sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7O1lBQ3pHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO1FBQzFELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUVyQixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDckQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw4Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQseUNBQWM7OztJQUFkO1FBQ0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwrVkFBd0M7O2lCQUV6Qzs7OztnQkFUMkIsd0JBQXdCO2dCQUczQyxjQUFjOzs7OEJBV3BCLFNBQVMsU0FBQyxnQkFBZ0I7bUNBQzFCLFNBQVMsU0FBQyxrQkFBa0I7O0lBNEMvQix1QkFBQztDQUFBLEFBdERELElBc0RDO1NBakRZLGdCQUFnQjs7O0lBQzNCLDRDQUFzQjs7SUFDdEIsa0NBQXdCOztJQUV4Qix1Q0FBMkQ7O0lBQzNELDRDQUFxRDs7Ozs7SUFHbkQsb0RBQTBEOzs7OztJQUMxRCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHb01vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9nby1tb2RhbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR29Nb2RhbFNlcnZpY2UgfSBmcm9tICcuL2dvLW1vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnby1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nby1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dvLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR29Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGN1cnJlbnRDb21wb25lbnQ6IGFueTtcbiAgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChHb01vZGFsRGlyZWN0aXZlKSBnb01vZGFsSG9zdDogR29Nb2RhbERpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnZ29Nb2RhbENvbnRhaW5lcicpIGdvTW9kYWxDb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgZ29Nb2RhbFNlcnZpY2U6IEdvTW9kYWxTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5hY3RpdmVNb2RhbENvbXBvbmVudC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMubG9hZENvbXBvbmVudCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5tb2RhbE9wZW4uc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5vcGVuZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRDb21wb25lbnQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY3VycmVudENvbXBvbmVudC5jb21wb25lbnQpO1xuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmdvTW9kYWxIb3N0LnZpZXdDb250YWluZXJSZWY7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgbGV0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50Q29tcG9uZW50LmJpbmRpbmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9IHRoaXMuY3VycmVudENvbXBvbmVudC5iaW5kaW5nc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbENvbnRhaW5lcihldmVudCkge1xuICAgIGlmICghdGhpcy5nb01vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmdvTW9kYWxTZXJ2aWNlLnRvZ2dsZU1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIGdvTW9kYWxDbGFzc2VzKCkge1xuICAgIHJldHVybiB7ICdnby1tb2RhbC0tdmlzaWJsZSc6IHRoaXMub3BlbmVkIH1cbiAgfVxufVxuIl19