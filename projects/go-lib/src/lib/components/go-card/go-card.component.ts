import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'go-card',
    styleUrls: ['./go-card.component.scss'],
    templateUrl: './go-card.component.html',
  imports: [],
})

export class GoCardComponent {

  @Input() showHeader: boolean = true;

}
