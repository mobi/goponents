import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
 standalone: false,
 encapsulation: ViewEncapsulation.None,
 selector: 'go-card',
 styleUrls: ['./go-card.component.scss'],
 templateUrl: './go-card.component.html'
})

export class GoCardComponent {

  @Input() showHeader: boolean = true;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() shadow: boolean = true;

  get cardClasses(): { [k: string]: boolean } {
    return {
      'card': true,
      'card--dark': this.theme === 'dark',
      'card--no-shadow': !this.shadow
    };
  }

}
