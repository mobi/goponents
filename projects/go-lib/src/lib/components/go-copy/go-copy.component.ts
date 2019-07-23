import { Component, Input } from '@angular/core';

@Component({
  animations: [],
  selector: 'go-copy',
  templateUrl: './go-copy.component.html',
  styleUrls: ['./go-copy.component.scss']
})
export class GoCopyComponent {
  @Input() text: string;

  constructor() { }

  copyStringToClipboard (element: HTMLElement): void {
    (element.children[1] as HTMLInputElement).select();
    document.execCommand('copy');
  }
}
