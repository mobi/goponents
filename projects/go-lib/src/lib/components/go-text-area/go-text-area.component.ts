import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-text-area',
  templateUrl: './go-text-area.component.html'
})
export class GoTextAreaComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() key: string;
  @Input() hints: Array<string>;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'text-area';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
