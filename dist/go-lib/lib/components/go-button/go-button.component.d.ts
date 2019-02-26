import { EventEmitter } from '@angular/core';
export declare class GoButtonComponent {
    buttonDisabled: boolean;
    buttonIcon: string;
    buttonType: string;
    useLoader: boolean;
    handleClick: EventEmitter<boolean>;
    isProcessing: boolean;
    constructor();
    clicked(): void;
    reset(): void;
    classList(): any;
}
