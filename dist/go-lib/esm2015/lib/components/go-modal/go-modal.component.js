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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRhbmdvZS9nb3BvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nby1tb2RhbC9nby1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsd0JBQXdCLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQVEzQixZQUNVLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVB4QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBU3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7OztJQUVELGFBQWE7O1lBQ1AsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7O1lBQ3pHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO1FBQ3hELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUVyQixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDhXQUF3Qzs7YUFFekM7Ozs7WUFUMkIsd0JBQXdCO1lBRzNDLGNBQWM7OzswQkFZcEIsU0FBUyxTQUFDLGdCQUFnQjsrQkFDMUIsU0FBUyxTQUFDLGtCQUFrQjs7OztJQUo3Qiw0Q0FBc0I7O0lBQ3RCLGtDQUF3Qjs7SUFFeEIsdUNBQTJEOztJQUMzRCw0Q0FBcUQ7Ozs7O0lBR25ELG9EQUEwRDs7Ozs7SUFDMUQsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25DaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR29Nb2RhbERpcmVjdGl2ZSB9IGZyb20gJy4vZ28tbW9kYWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9nby1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ28tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nby1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGN1cnJlbnRDb21wb25lbnQ6IGFueTtcbiAgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChHb01vZGFsRGlyZWN0aXZlKSBnb01vZGFsSG9zdDogR29Nb2RhbERpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnZ29Nb2RhbENvbnRhaW5lcicpIGdvTW9kYWxDb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgZ29Nb2RhbFNlcnZpY2U6IEdvTW9kYWxTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5hY3RpdmVNb2RhbENvbXBvbmVudC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMubG9hZENvbXBvbmVudCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5tb2RhbE9wZW4uc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5vcGVuZWQgPSB2YWx1ZTtcbiAgICB9KVxuICB9XG5cbiAgbG9hZENvbXBvbmVudCgpIHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY3VycmVudENvbXBvbmVudC5jb21wb25lbnQpO1xuICAgIGxldCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5nb01vZGFsSG9zdC52aWV3Q29udGFpbmVyUmVmO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuICAgIGxldCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudENvbXBvbmVudC5iaW5kaW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB0aGlzLmN1cnJlbnRDb21wb25lbnQuYmluZGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWxDb250YWluZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZ29Nb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5nb01vZGFsU2VydmljZS50b2dnbGVNb2RhbChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==