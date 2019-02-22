import { OnInit, AfterContentInit, QueryList } from '@angular/core';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';
export declare class GoAccordionComponent implements OnInit, AfterContentInit {
    expandAll: boolean;
    multiExpand: boolean;
    showIcons: boolean;
    theme: string;
    activeTheme: string;
    panels: QueryList<GoAccordionPanelComponent>;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    openPanelCloseOthers(panel: GoAccordionPanelComponent): void;
    openPanel(panel: GoAccordionPanelComponent): void;
    closePanel(panel: GoAccordionPanelComponent): void;
    setActiveTheme(): void;
}
