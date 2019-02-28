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
    GoModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'go-modal',
                    template: "<div class=\"go-modal\" [ngClass]=\"{ 'go-modal--visible': opened }\" (click)=\"closeModalContainer($event)\">\n  <div class=\"go-modal__container\" #goModalContainer>\n    <div class=\"go-modal__close\" (click)=\"closeModal()\">\n      <go-icon icon=\"close\"></go-icon>\n    </div>\n    <ng-template go-modal-host>\n    </ng-template>\n  </div>\n</div>",
                    styles: [".go-modal{align-items:center;background:rgba(49,53,54,.9);display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;visibility:hidden;width:100%;z-index:400;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal__container{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);color:#313536;max-height:80%;max-width:32.5rem;padding:2rem 1rem 1rem;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-transform:scale(1.1);transform:scale(1.1);transition:.25s cubic-bezier(.25,.8,.25,1)}.go-modal.go-modal--visible{visibility:visible;opacity:1}.go-modal.go-modal--visible .go-modal__container{-webkit-transform:scale(1);transform:scale(1)}.go-modal__close{color:#313536;cursor:pointer;padding:.5rem;position:absolute;right:0;top:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ29wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ28tbW9kYWwvZ28tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHdCQUF3QixFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQ7SUFhRSwwQkFDVSx3QkFBa0QsRUFDbEQsY0FBOEI7UUFEOUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQVN4QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDdkQsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFLO1lBQzVDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjtRQUFBLGlCQVVDOztZQVRLLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDOztZQUN6RyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQjtRQUN4RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFFckIsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ3JELFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQW1COzs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7O0lBRUQscUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsOFdBQXdDOztpQkFFekM7Ozs7Z0JBVDJCLHdCQUF3QjtnQkFHM0MsY0FBYzs7OzhCQVlwQixTQUFTLFNBQUMsZ0JBQWdCO21DQUMxQixTQUFTLFNBQUMsa0JBQWtCOztJQXdDL0IsdUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQTlDWSxnQkFBZ0I7OztJQUUzQiw0Q0FBc0I7O0lBQ3RCLGtDQUF3Qjs7SUFFeEIsdUNBQTJEOztJQUMzRCw0Q0FBcUQ7Ozs7O0lBR25ELG9EQUEwRDs7Ozs7SUFDMUQsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25DaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR29Nb2RhbERpcmVjdGl2ZSB9IGZyb20gJy4vZ28tbW9kYWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9nby1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ28tbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ28tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nby1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdvTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGN1cnJlbnRDb21wb25lbnQ6IGFueTtcbiAgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChHb01vZGFsRGlyZWN0aXZlKSBnb01vZGFsSG9zdDogR29Nb2RhbERpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnZ29Nb2RhbENvbnRhaW5lcicpIGdvTW9kYWxDb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgZ29Nb2RhbFNlcnZpY2U6IEdvTW9kYWxTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5hY3RpdmVNb2RhbENvbXBvbmVudC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMubG9hZENvbXBvbmVudCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nb01vZGFsU2VydmljZS5tb2RhbE9wZW4uc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5vcGVuZWQgPSB2YWx1ZTtcbiAgICB9KVxuICB9XG5cbiAgbG9hZENvbXBvbmVudCgpIHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY3VycmVudENvbXBvbmVudC5jb21wb25lbnQpO1xuICAgIGxldCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5nb01vZGFsSG9zdC52aWV3Q29udGFpbmVyUmVmO1xuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblxuICAgIGxldCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudENvbXBvbmVudC5iaW5kaW5ncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB0aGlzLmN1cnJlbnRDb21wb25lbnQuYmluZGluZ3Nba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWxDb250YWluZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZ29Nb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5nb01vZGFsU2VydmljZS50b2dnbGVNb2RhbChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==