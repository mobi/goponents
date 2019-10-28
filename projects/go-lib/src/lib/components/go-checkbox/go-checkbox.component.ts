import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-checkbox',
  styleUrls: ['./go-checkbox.component.scss'],
  templateUrl: './go-checkbox.component.html'
})
export class GoCheckboxComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() key: string;
  @Input() label: string;
  @Input() theme: string = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'checkbox';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is a chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
