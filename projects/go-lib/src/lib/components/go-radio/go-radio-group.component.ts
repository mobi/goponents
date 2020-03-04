import { AfterContentChecked, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoRadioButtonComponent } from './go-radio-button.component';

@Component({
  selector: 'go-radio-group',
  templateUrl: './go-radio-group.component.html'
})
export class GoRadioGroupComponent implements AfterContentChecked {
  radioButtonCount: number = 0;

  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() legend: string;
  @Input() theme: 'light' | 'dark' = 'light';

  @ContentChildren(GoRadioButtonComponent) radioButtons: QueryList<GoRadioButtonComponent>;

  ngAfterContentChecked(): void {
    // Only want to set all of these if the number of radio buttons change
    if (this.radioButtons.length !== this.radioButtonCount) {
      const radioGroupName: string = this.generateRadioGroupName(this.legend);
      this.radioButtonCount = this.radioButtons.length;

      this.radioButtons.toArray().forEach((button: GoRadioButtonComponent) => {
        button.theme = this.theme;
        button.control = this.control;
        button.name = radioGroupName;
        button.detectChanges();
      });
    }
  }

  private generateRadioGroupName(label: string): string {
    const labelText: string = label || 'radio-group';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is a chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
