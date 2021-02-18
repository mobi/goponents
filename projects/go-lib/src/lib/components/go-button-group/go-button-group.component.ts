import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList } from '@angular/core';
import { GoButtonComponent } from '../go-button/go-button.component';

@Component({
  selector: 'go-button-group',
  templateUrl: './go-button-group.component.html'
})
export class GoButtonGroupComponent implements OnChanges, AfterContentInit {

  @Input() buttonDisabled: boolean = false;
  @Input() buttonVariant: GoButtonComponent['buttonVariant'] = 'primary';

  @ContentChildren(GoButtonComponent) buttons: QueryList<GoButtonComponent>;

  ngOnChanges(): void {
    this.processButtons();
  }

  ngAfterContentInit(): void {
    this.processButtons();
  }

  private processButtons(): void {
    if (this.buttons) {
      this.buttons.forEach((btn: GoButtonComponent, i: number) => {
        btn.groupPosition = this.determinePosition(i);
        btn.buttonDisabled = this.buttonDisabled;
        btn.buttonVariant = this.buttonVariant;
        btn.ngOnChanges();
      });
    }
  }

  private determinePosition(i: number): GoButtonComponent['groupPosition'] {
    if (this.buttons.length > 1) {
      if (i === 0) {
        return 'first';
      }

      if (i === this.buttons.length - 1) {
        return 'last';
      }

      if (this.buttons.length > 2 && i > 0 && i < this.buttons.length - 1) {
        return 'middle';
      }
    }

    return null;
  }

}
