import { OnInit, ComponentFactoryResolver } from '@angular/core';
import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';
export declare class GoModalComponent implements OnInit {
    private componentFactoryResolver;
    private goModalService;
    currentComponent: any;
    opened: boolean;
    goModalHost: GoModalDirective;
    goModalContainer: any;
    constructor(componentFactoryResolver: ComponentFactoryResolver, goModalService: GoModalService);
    ngOnInit(): void;
    loadComponent(): void;
    closeModalContainer(event: any): void;
    closeModal(): void;
    goModalClasses(): {
        'go-modal--visible': boolean;
    };
}
