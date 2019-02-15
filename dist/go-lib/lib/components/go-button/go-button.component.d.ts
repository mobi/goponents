import { EventEmitter } from '@angular/core';
export declare class GoButtonComponent {
    buttonIcon: string;
    buttonType: string;
    handleClick: EventEmitter<boolean>;
    isProcessing: boolean;
    constructor();
    clicked(): void;
    classList(): any;
}
