/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';
export class GoModalComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} goModalService
     */
    constructor(componentFactoryResolver, goModalService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.goModalService = goModalService;
        this.opened = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.goModalService.activeModalComponent.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.currentComponent = value;
            this.loadComponent();
        }));
        this.goModalService.modalOpen.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.opened = value;
        }));
    }
    /**
     * @return {?}
     */
    loadComponent() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
        /** @type {?} */
        const viewContainerRef = this.goModalHost.viewContainerRef;
        viewContainerRef.clear();
        /** @type {?} */
        let componentRef = viewContainerRef.createComponent(componentFactory);
        Object.keys(this.currentComponent.bindings).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            componentRef.instance[key] = this.currentComponent.bindings[key];
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeModalContainer(event) {
        if (!this.goModalContainer.nativeElement.contains(event.target)) {
            this.closeModal();
        }
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.goModalService.toggleModal(false);
    }
    /**
     * @return {?}
     */
    goModalClasses() {
        return { 'go-modal--visible': this.opened };
    }
}
GoModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-modal',
                template: "<div class=\"go-modal\" [ngClass]=\"goModalClasses()\" (click)=\"closeModalContainer($event)\">\n  <div class=\"go-modal__container\" #goModalContainer>\n    <div class=\"go-modal__close\" (click)=\"closeModal()\">\n      <go-icon icon=\"close\"></go-icon>\n    </div>\n    <ng-template go-modal-host>\n    </ng-template>\n  </div>\n</div>",
                styles: [".go-modal{align-items:center;background:rgba(49,53,54,.9);display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:400;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal__container{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);color:#313536;max-height:80%;max-width:32.5rem;padding:2rem 1rem 1rem;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-transform:scale(1.1);transform:scale(1.1);transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal.go-modal--visible{opacity:1;visibility:visible}.go-modal.go-modal--visible .go-modal__container{-webkit-transform:scale(1);transform:scale(1)}.go-modal__close{color:#313536;cursor:pointer;padding:.5rem;position:absolute;right:0;top:0}"]
            }] }
];
/** @nocollapse */
GoModalComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: GoModalService }
];
GoModalComponent.propDecorators = {
    goModalHost: [{ type: ViewChild, args: [GoModalDirective,] }],
    goModalContainer: [{ type: ViewChild, args: ['goModalContainer',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby1tb2RhbC9nby1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsd0JBQXdCLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQU8zQixZQUNVLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBU3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ0wsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7O2NBQ3pHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO1FBQzFELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUVyQixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwrVkFBd0M7O2FBRXpDOzs7O1lBVDJCLHdCQUF3QjtZQUczQyxjQUFjOzs7MEJBV3BCLFNBQVMsU0FBQyxnQkFBZ0I7K0JBQzFCLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFKN0IsNENBQXNCOztJQUN0QixrQ0FBd0I7O0lBRXhCLHVDQUEyRDs7SUFDM0QsNENBQXFEOzs7OztJQUduRCxvREFBMEQ7Ozs7O0lBQzFELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdvTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL2dvLW1vZGFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHb01vZGFsU2VydmljZSB9IGZyb20gJy4vZ28tbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ28tbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3VycmVudENvbXBvbmVudDogYW55O1xuICBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKEdvTW9kYWxEaXJlY3RpdmUpIGdvTW9kYWxIb3N0OiBHb01vZGFsRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdnb01vZGFsQ29udGFpbmVyJykgZ29Nb2RhbENvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBnb01vZGFsU2VydmljZTogR29Nb2RhbFNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdvTW9kYWxTZXJ2aWNlLmFjdGl2ZU1vZGFsQ29tcG9uZW50LnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudENvbXBvbmVudCA9IHZhbHVlO1xuICAgICAgdGhpcy5sb2FkQ29tcG9uZW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdvTW9kYWxTZXJ2aWNlLm1vZGFsT3Blbi5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudCk7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZ29Nb2RhbEhvc3Qudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICBsZXQgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRDb21wb25lbnQuYmluZGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jdXJyZW50Q29tcG9uZW50LmJpbmRpbmdzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsQ29udGFpbmVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmdvTW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuZ29Nb2RhbFNlcnZpY2UudG9nZ2xlTW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgZ29Nb2RhbENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHsgJ2dvLW1vZGFsLS12aXNpYmxlJzogdGhpcy5vcGVuZWQgfVxuICB9XG59XG4iXX0=