import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';

@Component({
  selector: 'go-accordion',
  template: '<ng-content></ng-content>'
})
export class GoAccordionComponent implements OnInit, AfterContentInit {
  @Input() borderless: boolean = false;
  @Input() expandAll: boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons: boolean = false;
  @Input() slim: boolean = false;
  @Input() theme: 'light' | 'dark' = 'light';

  @ContentChildren(GoAccordionPanelComponent) panels: QueryList<GoAccordionPanelComponent>;

  constructor() { }

  //#region Lifecycle Methods
  ///////////////////////////

  ngOnInit(): void {
    // Angular doesn't type check templates. This forces one of two options for theme.
    this.theme = this.theme === 'dark' ? 'dark' : 'light';
    this.multiExpand = this.expandAll || this.multiExpand;
  }

  ngAfterContentInit(): void {
    this.panels.toArray().forEach((panel: GoAccordionPanelComponent, index: number) => {
      this.subscribePanel(panel);

      panel.borderless = panel.borderless === undefined ? this.borderless : panel.borderless;
      panel.slim = panel.slim === undefined ? this.slim : panel.slim;
      panel.theme = panel.theme || this.theme;
      panel.isFirst = index === 0;
      panel.isLast = index === (this.panels.length - 1);
      panel.expanded = this.expandAll || panel.expanded;

      // NOTE: This feels a little destructive.
      // We lose track of the icon explicitly set by the child component.
      panel.icon = this.showIcons ? panel.icon : null;
    });
  }
  //#endregion

  //#region Private Methods
  /////////////////////////

  private subscribePanel(panel: GoAccordionPanelComponent): void {
    panel.toggle.subscribe(() => {
      if (!panel.expanded && this.multiExpand) {
        this.openPanel(panel);
      } else if (!panel.expanded && !this.multiExpand) {
        this.openPanelCloseOthers(panel);
      } else {
        this.closePanel(panel);
      }
    });
  }

  private openPanelCloseOthers(panel: GoAccordionPanelComponent): void {
    this.panels.toArray().forEach(this.closePanel);

    this.openPanel(panel);
  }

  private openPanel(panel: GoAccordionPanelComponent): void {
    panel.expanded = true;
  }

  private closePanel(panel: GoAccordionPanelComponent): void {
    panel.expanded = false;
  }
  //#endregion
}
