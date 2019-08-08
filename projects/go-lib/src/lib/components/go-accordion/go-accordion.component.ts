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
  @Input() expandAll: boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons: boolean = false;
  @Input() slim: boolean = false;
  @Input() theme: string = 'light';

  @ContentChildren(GoAccordionPanelComponent) panels: QueryList<GoAccordionPanelComponent>;

  constructor() { }

  ngOnInit(): void {
    this.multiExpand = this.expandAll || this.multiExpand;
  }

  ngAfterContentInit(): void {
    this.panels.toArray().forEach((panel: GoAccordionPanelComponent, index: number) => {
      this.subscribePanel(panel);

      panel.slim = this.slim;
      panel.isFirst = index === 0;
      panel.isLast = index === (this.panels.length - 1);
      panel.expanded = this.expandAll || panel.expanded;
      panel.icon = !this.showIcons ? null : panel.icon;
    });
  }

  private openPanelCloseOthers(panel: GoAccordionPanelComponent): void {
    this.panels.toArray().forEach((p: GoAccordionPanelComponent) => {
      this.closePanel(p);
    });

    this.openPanel(panel);
  }

  private openPanel(panel: GoAccordionPanelComponent): void {
    panel.expanded = true;
  }

  private closePanel(panel: GoAccordionPanelComponent): void {
    panel.expanded = false;
  }

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
}
