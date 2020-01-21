import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html',
  styleUrls: ['./go-input.component.scss']
})
export class GoInputComponent implements OnInit {
  id: string;

  @Input() control: FormControl;
  @Input() key: string;
  @Input() hints: string[];
  @Input() inputType: string = 'text';
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() theme: 'light' | 'dark' = 'light';

  constructor() { }

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'input';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
