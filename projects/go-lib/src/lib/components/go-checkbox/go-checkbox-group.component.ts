import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GoCheckboxComponent } from './go-checkbox.component';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-checkbox-group',
  templateUrl: './go-checkbox-group.component.html'
})
export class GoCheckboxGroupComponent extends GoFormBaseComponent implements AfterContentInit {

  @Input() legend: string;

  @ContentChildren(GoCheckboxComponent, { descendants: true }) checkboxes: QueryList<GoCheckboxComponent>;

  ngAfterContentInit(): void {
    this.checkboxes.toArray().forEach((checkbox: GoCheckboxComponent) => {
      checkbox.theme = this.theme;
    });
  }
}
