import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { accordionAnimation } from '../../animations/accordion.animation';

@Component({
  selector: 'go-accordion-panel',
  templateUrl: './go-accordion-panel.component.html',
  styleUrls: ['./go-accordion-panel.component.scss'],
  animations: [
    accordionAnimation
  ]
})
export class GoAccordionPanelComponent implements OnInit {
  @Input() borderless: boolean = false;
  @Input() expanded: boolean = false;
  @Input() heading: string;
  @Input() icon: string = null;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() slim: boolean = false;
  @Input() title: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.expanded = this.expanded || false;
    this.heading = this.heading || this.title;
  }

  containerClasses(): object {
    return {
      'go-accordion-panel--borderless': this.borderless,
      'go-accordion-panel--active': this.expanded,
      'go-accordion-panel--first': this.isFirst,
      'go-accordion-panel--last': this.isLast,
    };
  }
}
