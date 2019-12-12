import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GoTabComponent } from './go-tab.component';

@Component({
  selector: 'go-tab-group',
  styleUrls: ['./go-tab-group.component.scss'],
  templateUrl: './go-tab-group.component.html'
})
export class GoTabGroupComponent implements AfterViewInit {
  activeTab: number = 0;
  tabArray: GoTabComponent[];

  @Input() theme: 'light' | 'dark' = 'light';

  @ContentChildren(GoTabComponent) tabs: QueryList<GoTabComponent>;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.tabArray = this.tabs.toArray();
    if (this.tabs.length) {
      this.activateTab(this.activeTab);
      this.tabArray[this.activeTab].detectChanges();
    }
    this.changeDetector.detectChanges();
  }

  activateTab(index: number): void {
    this.tabArray[this.activeTab].active = false;
    this.tabArray[index].active = true;
    this.activeTab = index;
  }
}
