import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  animations: [
    trigger('checkMarkFadeInOut', [
      state('content_copy', style({
        opacity: '1'
      })),
      state('check', style({
        opacity: '1'
      })),
      transition('content_copy => check', [
        group([
          animate('3s', keyframes([
            style({ opacity: '0', offset: 0 }),
            style({ opacity: '1', offset: 0.1 }),
            style({ opacity: '1', offset: 0.9 }),
            style({ opacity: '0', offset: 1 })
          ]))
        ])
      ]),
      transition('check => content_copy', [
        group([
          animate('300ms', keyframes([
            style({ opacity: '0' }),
            style({ opacity: '1' })
          ]))
        ])
      ]),
    ])
  ],
  selector: 'go-copy',
  templateUrl: './go-copy.component.html',
  styleUrls: ['./go-copy.component.scss']
})
export class GoCopyComponent {

  @HostBinding('class.go-copy')

  @Input() text: string;

  @ViewChild('copyText', { static: false }) copyText: ElementRef;

  icon: string = 'content_copy';

  copyStringToClipboard(): void {
    this.copyText.nativeElement.select();
    document.execCommand('copy');

    this.icon = 'check';
    setTimeout(() => {
      this.icon = 'content_copy';
    }, 3000);
  }
}
