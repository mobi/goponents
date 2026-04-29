import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'go-card',
    styleUrls: ['./go-card.component.scss'],
    templateUrl: './go-card.component.html',
    standalone: false
})

export class GoCardComponent {

  @Input() showHeader: boolean = true;

}
