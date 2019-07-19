import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'go-accordion-panel',
  templateUrl: './go-accordion-panel.component.html',
  styleUrls: ['./go-accordion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoAccordionPanelComponent implements OnInit {

  @Input() expanded: boolean = false;
  @Input() icon: string = null;
  @Input() title: string;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.expanded = this.expanded || false;
  }

}
