import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  OnChanges
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
export class GoAccordionPanelComponent implements OnInit, OnChanges {
  @Input() borderless: boolean;
  @Input() expanded: boolean = false;
  @Input() heading: string;
  @Input() icon: string = null;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() slim: boolean;
  @Input() theme: 'dark' | 'light';
  @Input() title: string;

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  containerClasses: object;
  headerClasses: object;

  constructor() { }

  ngOnInit(): void {
    // NOTE: `title` is deprecated and will be removed in later version
    this.heading = this.heading || this.title;
  }

  ngOnChanges(): void {
    this.updateClasses();
  }

  updateClasses(): void {
    this.containerClasses = {
      'go-accordion-panel--active': this.expanded === true,
      'go-accordion-panel--borderless': this.borderless === true,
      'go-accordion-panel--dark': this.theme === 'dark',
      'go-accordion-panel--first': this.isFirst === true,
      'go-accordion-panel--last': this.isLast === true,
    };

    this.headerClasses = {
      'go-accordion-panel__header--active': this.expanded === true,
      'go-accordion-panel__header--dark': this.theme === 'dark',
      'go-accordion-panel__header--slim': this.slim === true
    };
  }
}
