import { OnInit, EventEmitter } from '@angular/core';
export declare class GoAccordionPanelComponent implements OnInit {
    expanded: boolean;
    icon: string;
    title: string;
    toggle: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
