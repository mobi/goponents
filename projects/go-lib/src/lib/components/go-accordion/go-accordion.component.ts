import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';

@Component({
  selector: 'go-accordion',
  template: '<ng-content></ng-content>'
})
export class GoAccordionComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() borderless: boolean = false;
  @Input() boxShadow: boolean = false;
  @Input() expandAll: boolean = false;
  @Input() forActionSheet: boolean = false;
  @Input() multiExpand: boolean = false;
  @Input() showIcons: boolean = false;
  @Input() slim: boolean = false;
  @Input() theme: 'light' | 'dark' = 'light';

  @ContentChildren(GoAccordionPanelComponent, { descendants: true }) panels: QueryList<GoAccordionPanelComponent>;

  private destroy$: Subject<void> = new Subject();
  private panelsDestroy$: Subject<void> = new Subject();

  constructor() { }

  //#region Lifecycle Methods
  ///////////////////////////

  ngOnInit(): void {
    // Angular doesn't type check templates. This forces one of two options for theme.
    this.theme = this.theme === 'dark' ? 'dark' : 'light';
    this.multiExpand = this.expandAll || this.multiExpand;
  }

  ngAfterContentInit(): void {
    this.updateChildPanels();

    this.panels.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cleanupSubscriptions();
      this.updateChildPanels();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.panelsDestroy$.next();
    this.panelsDestroy$.complete();
  }
  //#endregion

  //#region Private Methods
  /////////////////////////

  private subscribePanel(panel: GoAccordionPanelComponent): void {
    panel.toggle.pipe(takeUntil(this.panelsDestroy$)).subscribe(() => {
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
    panel.boxShadow = panel.boxShadow === undefined ? this.boxShadow : panel.boxShadow;
    panel.forActionSheet = this.forActionSheet;
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

  private updateChildPanels(): void {
    this.panels.toArray().forEach((panel: GoAccordionPanelComponent, index: number) => {
      this.updatePanelState(panel, index);
      this.subscribePanel(panel);
      panel.detectChanges();
    });
  }

  private cleanupSubscriptions(): void {
    this.panelsDestroy$.next();
  }
  //#endregion
}
