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
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
        /** @type {?} */
        let viewContainerRef = this.goModalHost.viewContainerRef;
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
}
GoModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-modal',
                template: "<div class=\"go-modal\" [ngClass]=\"{ 'go-modal--visible': opened }\" (click)=\"closeModalContainer($event)\">\n  <div class=\"go-modal__container\" #goModalContainer>\n    <div class=\"go-modal__close\" (click)=\"closeModal()\">\n      <go-icon icon=\"close\"></go-icon>\n    </div>\n    <ng-template go-modal-host>\n    </ng-template>\n  </div>\n</div>",
                styles: [".go-modal{align-items:center;background:rgba(49,53,54,.9);display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:400;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal__container{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);color:#313536;max-height:80%;max-width:32.5rem;padding:2rem 1rem 1rem;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-transform:scale(1.1);transform:scale(1.1);transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal.go-modal--visible{visibility:visible;opacity:1}.go-modal.go-modal--visible .go-modal__container{-webkit-transform:scale(1);transform:scale(1)}.go-modal__close{color:#313536;cursor:pointer;padding:.5rem;position:absolute;right:0;top:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tbW9kYWwvZ28tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHdCQUF3QixFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPcEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFRM0IsWUFDVSx3QkFBa0QsRUFDbEQsY0FBOEI7UUFEOUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQVN4QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7SUFFRCxhQUFhOztZQUNQLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDOztZQUN6RyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQjtRQUN4RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFFckIsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4V0FBd0M7O2FBRXpDOzs7O1lBVDJCLHdCQUF3QjtZQUczQyxjQUFjOzs7MEJBWXBCLFNBQVMsU0FBQyxnQkFBZ0I7K0JBQzFCLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFKN0IsNENBQXNCOztJQUN0QixrQ0FBd0I7O0lBRXhCLHVDQUEyRDs7SUFDM0QsNENBQXFEOzs7OztJQUduRCxvREFBMEQ7Ozs7O0lBQzFELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdvTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL2dvLW1vZGFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHb01vZGFsU2VydmljZSB9IGZyb20gJy4vZ28tbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dvLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ28tbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjdXJyZW50Q29tcG9uZW50OiBhbnk7XG4gIG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoR29Nb2RhbERpcmVjdGl2ZSkgZ29Nb2RhbEhvc3Q6IEdvTW9kYWxEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ2dvTW9kYWxDb250YWluZXInKSBnb01vZGFsQ29udGFpbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGdvTW9kYWxTZXJ2aWNlOiBHb01vZGFsU2VydmljZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ29Nb2RhbFNlcnZpY2UuYWN0aXZlTW9kYWxDb21wb25lbnQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLmxvYWRDb21wb25lbnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ29Nb2RhbFNlcnZpY2UubW9kYWxPcGVuLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIHRoaXMub3BlbmVkID0gdmFsdWU7XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRDb21wb25lbnQoKSB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICBsZXQgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuZ29Nb2RhbEhvc3Qudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICBsZXQgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRDb21wb25lbnQuYmluZGluZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jdXJyZW50Q29tcG9uZW50LmJpbmRpbmdzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsQ29udGFpbmVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmdvTW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuZ29Nb2RhbFNlcnZpY2UudG9nZ2xlTW9kYWwoZmFsc2UpO1xuICB9XG59XG4iXX0=