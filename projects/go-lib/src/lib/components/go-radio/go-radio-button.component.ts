import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-radio-button',
  templateUrl: './go-radio-button.component.html'
})
export class GoRadioButtonComponent implements OnInit {
  id: string;
  control: FormControl;
  theme: string;

  @Input() formValue: string;
  @Input() label: string;
  @Input() key: string;

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'radio';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is a chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
