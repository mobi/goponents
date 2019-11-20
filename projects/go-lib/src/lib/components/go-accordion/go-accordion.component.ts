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
      this.updatePanelState(panel, index);
      this.subscribePanel(panel);
      panel.detectChanges();
    });
  }
  //#endregion

  //#region Private Methods
  /////////////////////////

  private subscribePanel(panel: GoAccordionPanelComponent): void {
    panel.toggle.subscribe(() => {
      if (!panel.expanded && this.multiExpand) {
        panel.expanded = true;
      } else if (!panel.expanded && !this.multiExpand) {
        this.panels.toArray().forEach((thePanel: GoAccordionPanelComponent) => {
          thePanel.expanded = false;
        });
        panel.expanded = true;
      } else {
        panel.expanded = false;
      }
    });
  }

  private updatePanelState(panel: GoAccordionPanelComponent, index: number): void {
    panel.borderless = panel.borderless === undefined ? this.borderless : panel.borderless;
    panel.slim = panel.slim === undefined ? this.slim : panel.slim;
    panel.theme = panel.theme || this.theme;
    panel.isFirst = index === 0;
    panel.isLast = index === (this.panels.length - 1);
    panel.expanded = this.expandAll || panel.expanded;

    // NOTE: This feels a little destructive.
    // We lose track of the icon explicitly set by the child component.
    panel.icon = this.showIcons ? panel.icon : null;
    panel.updateClasses();
  }
  //#endregion
}
