import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';

@Component({
  selector: 'go-accordion',
  templateUrl: './go-accordion.component.html',
  styleUrls: ['./go-accordion.component.scss']
})
export class GoAccordionComponent implements OnInit, AfterContentInit {

  @Input() expandAll: boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons: boolean = false;
  @Input() theme: string = 'light';

  activeTheme: string;

  @ContentChildren(GoAccordionPanelComponent) panels: QueryList<GoAccordionPanelComponent>;

  constructor() { }

  ngOnInit() {
    this.setActiveTheme();
    this.multiExpand = this.expandAll || this.multiExpand;
  }

  ngAfterContentInit() {
    this.panels.toArray().forEach((p) => {
      p.toggle.subscribe(() => {
        if (!p.expanded && this.multiExpand) {
          this.openPanel(p);
        } else if (!p.expanded && !this.multiExpand) {
          this.openPanelCloseOthers(p);
        } else {
          this.closePanel(p);
        }
      });

      p.expanded = this.expandAll || p.expanded;
      p.icon = !this.showIcons ? null : p.icon;
    });
  }

  openPanelCloseOthers(panel: GoAccordionPanelComponent) {
    this.panels.toArray().forEach((p) => {
      this.closePanel(p);
    });

    this.openPanel(panel);
  }

  openPanel(panel: GoAccordionPanelComponent) {
    panel.expanded = true;
  }

  closePanel(panel: GoAccordionPanelComponent) {
    panel.expanded = false;
  }

  setActiveTheme() {
    this.activeTheme = 'go-accordion--theme-' + this.theme;
  }

}
