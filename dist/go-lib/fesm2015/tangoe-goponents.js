import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ContentChildren, NgModule, Injectable, Directive, ViewContainerRef, ComponentFactoryResolver, ViewChild, defineInjectable, inject } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoAccordionPanelComponent {
    constructor() {
        this.expanded = false;
        this.icon = null;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.expanded = this.expanded || false;
    }
}
GoAccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-accordion-panel',
                template: "<div class=\"go-accordion-panel\" [ngClass]=\"{ 'go-accordion-panel--active': expanded, 'go-accordion-panel--inactive': !expanded }\">\n  <header class=\"go-accordion-panel__title-bar\" (click)=\"toggle.emit()\" aria-expanded=\"expanded\">\n    <span class=\"go-accordion-panel__title\">\n      <span *ngIf=\"icon\" class=\"material-icons go-accordion-panel__title-icon\">{{ icon }}</span>\n      <span class=\"go-accordion-panel__title-text\" [innerHtml]=\"title\"></span>\n    </span>\n    <span class=\"go-accordion-panel__control\">\n      <span class=\"material-icons go-accordion-panel__control-icon\">expand_more</span>\n    </span>\n  </header>\n  <div class=\"go-accordion-panel__content-container\">\n    <div class=\"go-accordion-panel__content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".go-accordion-panel__title-bar{cursor:pointer;display:flex;font-size:1.2rem;padding:1.2rem 0;position:relative;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__title{align-items:center;display:flex;flex-grow:1}.go-accordion-panel__title-icon{display:flex;flex-direction:column;justify-content:center;padding-left:1rem;text-align:center}.go-accordion-panel__title-text{padding-left:1rem}.go-accordion-panel__control{display:flex;flex-direction:column;justify-content:center;padding:0 1rem;text-align:center}.go-accordion-panel__control-icon{transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion-panel__content-container{max-height:0;opacity:0;overflow:hidden;visibility:hidden}.go-accordion-panel__content{display:block;padding:0 1rem;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-accordion--theme-light{background:#fff;border:1px solid #b1b1b1;color:#313536}.go-accordion--theme-light .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-light go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #b1b1b1}.go-accordion--theme-light .go-accordion-panel--active .go-accordion-panel__title-bar{background:#f5f5f5}.go-accordion--theme-light .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#fff}.go-accordion--theme-light .go-accordion-panel__title-bar:hover{background:#ededed}.go-accordion--theme-light .go-accordion-panel__content{color:#313536}.go-accordion--theme-dark{background:#313536;border:1px solid #202626;color:#fff;font-weight:300}.go-accordion--theme-dark .go-accordion-panel--border-top .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:last-of-type .go-accordion-panel__title-bar,.go-accordion--theme-dark go-accordion-panel:not(:first-of-type) .go-accordion-panel__title-bar{border-top:1px solid #202626}.go-accordion--theme-dark .go-accordion-panel--active .go-accordion-panel__title-bar{background:#272b2b}.go-accordion--theme-dark .go-accordion-panel--inactive .go-accordion-panel__title-bar{background:#313536}.go-accordion--theme-dark .go-accordion-panel__title-bar:hover{background:#202323}.go-accordion--theme-dark .go-accordion-panel__content{color:#fff;font-weight:300}go-accordion-panel:last-of-type .go-accordion-panel::before{border-bottom-left-radius:calc(4px - 1px)}go-accordion-panel:last-of-type .go-accordion-panel__title-bar{border-radius:0 0 4px 4px;overflow:hidden}go-accordion-panel:first-of-type .go-accordion-panel::before{border-top-left-radius:calc(4px - 1px)}go-accordion-panel:first-of-type .go-accordion-panel__title-bar{border-radius:4px 4px 0 0;overflow:hidden}.go-accordion-panel{position:relative}.go-accordion-panel::before{background:linear-gradient(to right,#65b360,#4d9848);background-color:#65b360;content:\" \";height:100%;left:0;opacity:0;position:absolute;transition:.25s ease-in;width:4px;z-index:1}.go-accordion-panel.go-accordion-panel--active::before{opacity:1}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__control .material-icons{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content-container{max-height:1000000px;opacity:1;visibility:visible}.go-accordion-panel.go-accordion-panel--active .go-accordion-panel__content{padding:1.5rem 1rem}.go-accordion-panel.go-accordion-panel--inactive::before{opacity:0}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__control .material-icons{-webkit-transform:rotate(0);transform:rotate(0)}.go-accordion-panel.go-accordion-panel--inactive .go-accordion-panel__content-container{max-height:0;opacity:0;visibility:hidden}.go-accordion--slim .go-accordion-panel__title-bar{font-size:1rem}"]
            }] }
];
/** @nocollapse */
GoAccordionPanelComponent.ctorParameters = () => [];
GoAccordionPanelComponent.propDecorators = {
    expanded: [{ type: Input }],
    icon: [{ type: Input }],
    title: [{ type: Input }],
    toggle: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoAccordionComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoAccordionModule {
}
GoAccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GoAccordionComponent,
                    GoAccordionPanelComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    GoAccordionComponent,
                    GoAccordionPanelComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoButtonComponent {
    constructor() {
        this.handleClick = new EventEmitter();
        this.isProcessing = false;
    }
    /**
     * @return {?}
     */
    clicked() {
        if (this.isProcessing || this.buttonDisabled) {
            return;
        }
        this.isProcessing = this.useLoader;
        this.handleClick.emit(this.isProcessing);
    }
    /**
     * @return {?}
     */
    reset() {
        this.isProcessing = false;
    }
    /**
     * @return {?}
     */
    classList() {
        return {
            'go-button__loading': this.isProcessing,
            'go-button__disabled': this.buttonDisabled,
            'go-button__alert': (this.buttonType === 'alert')
        };
    }
}
GoButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-button',
                template: "<button class=\"go-button\"\n        (click)=\"clicked()\"\n        [disabled]=\"isProcessing\"\n        [ngClass]=\"classList()\">\n  <go-icon [icon]=\"buttonIcon\" class=\"go-button__icon\" *ngIf=\"buttonIcon\"></go-icon>\n  <ng-content></ng-content>\n</button>\n",
                styles: [".go-button{background-color:#65b360;border-radius:4px;border:none;color:#fff;cursor:pointer;font-size:.75rem;height:2.5rem;letter-spacing:1.25pt;overflow:hidden;outline:0;padding:.75rem 1rem;position:relative;text-transform:uppercase;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button::after{border-bottom-left-radius:4px;border-bottom-right-radius:4px;bottom:-5px;content:'';display:block;height:5px;left:0;opacity:0;position:absolute;width:100%;z-index:1;transition:.25s cubic-bezier(.25,.8,.25,1)}.go-button:hover{background-color:#4d9848}.go-button__icon{font-size:1rem;padding-right:.5rem;vertical-align:text-top}.go-button__loading{background-color:#65b360;cursor:not-allowed}.go-button__loading::after{-webkit-animation:.8s ease-in-out infinite loading;animation:.8s ease-in-out infinite loading;bottom:0;opacity:1}.go-button__loading.go-button__alert::after{-webkit-animation:.8s infinite loading-red;animation:.8s infinite loading-red}.go-button__disabled{background-color:#b1b1b1;color:#313536}.go-button__disabled:hover{cursor:not-allowed;background-color:#b1b1b1}.go-button__alert{background-color:#dd4c4c}.go-button__alert:hover{background-color:#a83939}.go-button__alert.go-button__loading{background-color:#dd4c4c}@-webkit-keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#448640 0)}5%{background:linear-gradient(to right,#3c7538 10%,#448640 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#448640 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#448640 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#448640 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#448640 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#448640 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#448640 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#448640 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#448640 90%)}50%{background:linear-gradient(to right,#448640 0,#3c7538 0)}55%{background:linear-gradient(to right,#448640 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#448640 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#448640 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#448640 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#448640 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#448640 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#448640 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#448640 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#448640 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#448640 100%,#3c7538 100%)}}@keyframes loading{0%{background:linear-gradient(to right,#3c7538 0,#448640 0)}5%{background:linear-gradient(to right,#3c7538 10%,#448640 10%)}10%{background:linear-gradient(to right,#3c7538 20%,#448640 20%)}15%{background:linear-gradient(to right,#3c7538 30%,#448640 30%)}20%{background:linear-gradient(to right,#3c7538 40%,#448640 40%)}25%{background:linear-gradient(to right,#3c7538 50%,#448640 50%)}30%{background:linear-gradient(to right,#3c7538 60%,#448640 60%)}35%{background:linear-gradient(to right,#3c7538 70%,#448640 70%)}40%{background:linear-gradient(to right,#3c7538 80%,#448640 80%)}45%{background:linear-gradient(to right,#3c7538 90%,#448640 90%)}50%{background:linear-gradient(to right,#448640 0,#3c7538 0)}55%{background:linear-gradient(to right,#448640 10%,#3c7538 10%)}60%{background:linear-gradient(to right,#448640 20%,#3c7538 20%)}65%{background:linear-gradient(to right,#448640 30%,#3c7538 30%)}70%{background:linear-gradient(to right,#448640 40%,#3c7538 40%)}75%{background:linear-gradient(to right,#448640 50%,#3c7538 50%)}80%{background:linear-gradient(to right,#448640 60%,#3c7538 60%)}85%{background:linear-gradient(to right,#448640 70%,#3c7538 70%)}90%{background:linear-gradient(to right,#448640 80%,#3c7538 80%)}95%{background:linear-gradient(to right,#448640 90%,#3c7538 90%)}100%{background:linear-gradient(to right,#448640 100%,#3c7538 100%)}}@-webkit-keyframes loading-red{0%{background:linear-gradient(to right,#6f2626 0,#822c2c 0)}5%{background:linear-gradient(to right,#6f2626 10%,#822c2c 10%)}10%{background:linear-gradient(to right,#6f2626 20%,#822c2c 20%)}15%{background:linear-gradient(to right,#6f2626 30%,#822c2c 30%)}20%{background:linear-gradient(to right,#6f2626 40%,#822c2c 40%)}25%{background:linear-gradient(to right,#6f2626 50%,#822c2c 50%)}30%{background:linear-gradient(to right,#6f2626 60%,#822c2c 60%)}35%{background:linear-gradient(to right,#6f2626 70%,#822c2c 70%)}40%{background:linear-gradient(to right,#6f2626 80%,#822c2c 80%)}45%{background:linear-gradient(to right,#6f2626 90%,#822c2c 90%)}50%{background:linear-gradient(to right,#822c2c 0,#6f2626 0)}55%{background:linear-gradient(to right,#822c2c 10%,#6f2626 10%)}60%{background:linear-gradient(to right,#822c2c 20%,#6f2626 20%)}65%{background:linear-gradient(to right,#822c2c 30%,#6f2626 30%)}70%{background:linear-gradient(to right,#822c2c 40%,#6f2626 40%)}75%{background:linear-gradient(to right,#822c2c 50%,#6f2626 50%)}80%{background:linear-gradient(to right,#822c2c 60%,#6f2626 60%)}85%{background:linear-gradient(to right,#822c2c 70%,#6f2626 70%)}90%{background:linear-gradient(to right,#822c2c 80%,#6f2626 80%)}95%{background:linear-gradient(to right,#822c2c 90%,#6f2626 90%)}100%{background:linear-gradient(to right,#822c2c 100%,#6f2626 100%)}}@keyframes loading-red{0%{background:linear-gradient(to right,#6f2626 0,#822c2c 0)}5%{background:linear-gradient(to right,#6f2626 10%,#822c2c 10%)}10%{background:linear-gradient(to right,#6f2626 20%,#822c2c 20%)}15%{background:linear-gradient(to right,#6f2626 30%,#822c2c 30%)}20%{background:linear-gradient(to right,#6f2626 40%,#822c2c 40%)}25%{background:linear-gradient(to right,#6f2626 50%,#822c2c 50%)}30%{background:linear-gradient(to right,#6f2626 60%,#822c2c 60%)}35%{background:linear-gradient(to right,#6f2626 70%,#822c2c 70%)}40%{background:linear-gradient(to right,#6f2626 80%,#822c2c 80%)}45%{background:linear-gradient(to right,#6f2626 90%,#822c2c 90%)}50%{background:linear-gradient(to right,#822c2c 0,#6f2626 0)}55%{background:linear-gradient(to right,#822c2c 10%,#6f2626 10%)}60%{background:linear-gradient(to right,#822c2c 20%,#6f2626 20%)}65%{background:linear-gradient(to right,#822c2c 30%,#6f2626 30%)}70%{background:linear-gradient(to right,#822c2c 40%,#6f2626 40%)}75%{background:linear-gradient(to right,#822c2c 50%,#6f2626 50%)}80%{background:linear-gradient(to right,#822c2c 60%,#6f2626 60%)}85%{background:linear-gradient(to right,#822c2c 70%,#6f2626 70%)}90%{background:linear-gradient(to right,#822c2c 80%,#6f2626 80%)}95%{background:linear-gradient(to right,#822c2c 90%,#6f2626 90%)}100%{background:linear-gradient(to right,#822c2c 100%,#6f2626 100%)}}"]
            }] }
];
/** @nocollapse */
GoButtonComponent.ctorParameters = () => [];
GoButtonComponent.propDecorators = {
    buttonDisabled: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    buttonType: [{ type: Input }],
    useLoader: [{ type: Input }],
    handleClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoIconComponent {
}
GoIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-icon',
                template: "<i class=\"material-icons\">{{icon}}</i>\n",
                styles: [".material-icons{font-size:100%}"]
            }] }
];
GoIconComponent.propDecorators = {
    icon: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoIconModule {
}
GoIconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GoIconComponent],
                imports: [
                    CommonModule
                ],
                exports: [GoIconComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoButtonModule {
}
GoButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GoButtonComponent],
                imports: [
                    CommonModule,
                    GoIconModule
                ],
                exports: [GoButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoCardComponent {
    constructor() {
        this.showHeader = true;
    }
}
GoCardComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'go-card',
                template: "<div class=\"card\">\n  <header class=\"card__header\" *ngIf=\"showHeader\">\n    <ng-content select=\"[go-card-header]\"></ng-content>\n  </header>\n  <div class=\"card_content\">\n    <ng-content select=\"[go-card-content]\"></ng-content>\n  </div>\n</div>\n",
                styles: [".card{background:#fff;border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,.2);display:flex;flex-direction:column;padding:1rem}.card__header{display:flex;justify-content:space-between;padding-bottom:1rem}.card__action-list{display:flex}.card__action-list li{cursor:pointer;padding:0 .4rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.25s cubic-bezier(.25,.8,.25,1)}.card__action-list li:last-child{padding-right:0}.card__action-list li:hover{color:#65b360}"]
            }] }
];
GoCardComponent.propDecorators = {
    showHeader: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoCardModule {
}
GoCardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GoCardComponent],
                imports: [
                    CommonModule
                ],
                exports: [GoCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoTableComponent {
    constructor() {
        this.tableDataSource$ = new BehaviorSubject(this.data);
        this.sortDirection = 'sort-up';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeColumn = this.sortableColumns[0];
        this.sortByColumn(this.activeColumn);
        if (this.actions && this.columns.indexOf('actions') === -1) {
            this.columns.push('actions');
        }
    }
    // Public Methods
    // ================================================
    /**
     * @param {?} col
     * @return {?}
     */
    sortByColumn(col) {
        if (!this.sortableColumns.includes(col)) {
            return;
        }
        // Update Sort Classes
        this.setSortDirection(col);
        // Sort ascending if Sort down
        if (this.sortDirection === 'sort-up') {
            this.sortAscending(col);
        }
        else {
            // Must be sort up, sort descending.
            this.sortDescending(col);
        }
    }
    /**
     * @param {?} col
     * @return {?}
     */
    sortClass(col) {
        return {
            'sort-up': (this.activeColumn === col && this.sortDirection === 'sort-up'),
            'sort-down': (this.activeColumn === col && this.sortDirection === 'sort-down')
        };
    }
    // Private Methods
    // ================================================
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    sortDescending(col) {
        /** @type {?} */
        let sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    }
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    sortAscending(col) {
        /** @type {?} */
        let sortedData = this.data.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a[col] > b[col]) {
                return -1;
            }
            if (a[col] < b[col]) {
                return 1;
            }
            return 0;
        }));
        this.updateTableData(sortedData);
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    updateTableData(data) {
        /** @type {?} */
        let values = Object.keys(data).map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => data[key]));
        this.tableDataSource$.next(values);
    }
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    setSortDirection(col) {
        /** @type {?} */
        let currentColumn = this.activeColumn;
        /** @type {?} */
        let sortDirection = this.sortDirection;
        this.activeColumn = col;
        if (sortDirection === 'sort-up' && this.activeColumn === currentColumn) {
            this.sortDirection = 'sort-down';
        }
        else {
            this.sortDirection = 'sort-up';
        }
    }
}
GoTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'go-table',
                template: "<table cdk-table\n       class=\"tablesaw tablesaw-sortable tablesaw-swipe\"\n       [dataSource]=\"tableDataSource$\">\n\n  <ng-container *ngFor=\"let col of columns\" cdkColumnDef=\"{{col}}\">\n    <ng-container *ngIf=\"col !== 'actions'; else renderActions\">\n      <th cdk-header-cell\n          *cdkHeaderCellDef\n          [ngClass]=\"sortClass(col)\"\n          (click)=\"sortByColumn(col)\">{{col | titlecase}}</th>\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col]}}</td>\n    </ng-container>\n\n    <ng-template #renderActions>\n      <th cdk-header-cell *cdkHeaderCellDef>Actions</th>\n      <td cdk-cell *cdkCellDef=\"let row\">\n        <a *ngIf=\"actions.edit\" (click)=\"actions.edit(row.id)\">\n          <go-icon icon=\"edit\" class=\"mr2\"></go-icon>\n        </a>\n        <a *ngIf=\"actions.delete\" class=\"false\">\n          <go-icon icon=\"delete\" (click)=\"actions.delete(row.id)\"></go-icon>\n        </a>\n      </td>\n    </ng-template>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\n</table>\n",
                styles: ["th{cursor:pointer;position:relative}th.sort-down::after,th.sort-up::after{border-left:5px solid transparent;border-right:5px solid transparent;content:'';height:0;position:absolute;right:5px;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:0}th.sort-up::after{border-top:5px solid #fff}th.sort-down::after{border-bottom:5px solid #fff}"]
            }] }
];
/** @nocollapse */
GoTableComponent.ctorParameters = () => [];
GoTableComponent.propDecorators = {
    data: [{ type: Input }],
    columns: [{ type: Input }],
    sortableColumns: [{ type: Input }],
    actions: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoTableModule {
}
GoTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GoTableComponent],
                imports: [
                    CdkTableModule,
                    CommonModule,
                    GoIconModule
                ],
                exports: [GoTableComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoMessageService {
    /**
     * @param {?} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
    }
    /**
     * Show a success message.
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    sendMessage(msg = '', title = 'Success!') {
        this.toastr.success(msg, title);
    }
    /**
     * @param {?=} msg
     * @param {?=} title
     * @return {?}
     */
    logError(msg = '', title = 'Something went wrong.') {
        this.toastr.error(msg, title);
    }
}
GoMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoMessageService.ctorParameters = () => [
    { type: ToastrService }
];
/** @nocollapse */ GoMessageService.ngInjectableDef = defineInjectable({ factory: function GoMessageService_Factory() { return new GoMessageService(inject(ToastrService)); }, token: GoMessageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoMessageModule {
}
GoMessageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                providers: [GoMessageService],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoModalDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
GoModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[go-modal-host]',
            },] }
];
/** @nocollapse */
GoModalDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoModalItem {
    /**
     * @param {?} component
     * @param {?} bindings
     */
    constructor(component, bindings) {
        this.component = component;
        this.bindings = bindings;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoModalService {
    constructor() {
        this.activeModalComponent = new Subject();
        this.modalOpen = new Subject();
        this.modalOpen.next(false);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    openModal(component, bindings) {
        this.setComponent(component, bindings);
        this.toggleModal(true);
    }
    /**
     * @param {?} component
     * @param {?} bindings
     * @return {?}
     */
    setComponent(component, bindings) {
        this.activeModalComponent.next(new GoModalItem(component, bindings));
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    toggleModal(open = true) {
        this.modalOpen.next(open);
    }
}
GoModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoModalService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoModalComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoModalModule {
}
GoModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GoModalComponent,
                    GoModalDirective
                ],
                imports: [
                    CommonModule,
                    GoIconModule
                ],
                exports: [GoModalComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoSharedModule {
}
GoSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    GoAccordionModule,
                    GoButtonModule,
                    GoCardModule,
                    GoIconModule,
                    GoTableModule,
                    GoMessageModule,
                    GoModalModule
                ],
                exports: [
                    GoAccordionModule,
                    GoButtonModule,
                    GoCardModule,
                    GoIconModule,
                    GoTableModule,
                    GoMessageModule,
                    GoModalModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GoSharedModule, GoAccordionPanelComponent, GoAccordionComponent, GoAccordionModule, GoButtonComponent, GoButtonModule, GoCardComponent, GoCardModule, GoIconComponent, GoIconModule, GoModalComponent, GoModalModule, GoModalService, GoTableComponent, GoTableModule, GoMessageService, GoMessageModule, GoModalDirective as ɵa };

//# sourceMappingURL=tangoe-goponents.js.map