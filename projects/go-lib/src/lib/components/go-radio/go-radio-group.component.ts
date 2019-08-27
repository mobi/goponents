import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoRadioButtonComponent } from './go-radio-button.component';

@Component({
  selector: 'go-radio-group',
  templateUrl: './go-radio-group.component.html'
})
export class GoRadioGroupComponent implements AfterContentInit {
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() label: string;
  @Input() theme: string = 'light';

  @ContentChildren(GoRadioButtonComponent) radioButtons: QueryList<GoRadioButtonComponent>;

  ngAfterContentInit(): void {
    this.radioButtons.toArray().forEach((button: GoRadioButtonComponent) => {
      button.theme = this.theme;
      button.control = this.control;
    });
  }
}
