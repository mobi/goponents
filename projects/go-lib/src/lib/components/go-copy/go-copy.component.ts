import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  animations: [],
  selector: 'go-copy',
  templateUrl: './go-copy.component.html',
  styleUrls: ['./go-copy.component.scss']
})
export class GoCopyComponent {

  @HostBinding('class.go-copy')

  @Input() text: string;

  @ViewChild('copyText') copyText: ElementRef;

  constructor() { }

  copyStringToClipboard(): void {
    this.copyText.nativeElement.select();
    document.execCommand('copy');
  }
}
