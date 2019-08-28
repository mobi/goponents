import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GoCheckboxComponent } from './go-checkbox.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'go-checkbox-group',
  templateUrl: './go-checkbox-group.component.html'
})
export class GoCheckboxGroupComponent implements AfterContentInit {
  @Input() control: FormControl | FormGroup;
  @Input() hints: string[];
  @Input() legend: string;
  @Input() theme: 'light' | 'dark' = 'light';

  @ContentChildren(GoCheckboxComponent) checkboxes: QueryList<GoCheckboxComponent>;

  ngAfterContentInit(): void {
    this.checkboxes.toArray().forEach((checkbox: GoCheckboxComponent) => {
      checkbox.theme = this.theme;
    });
  }
}
