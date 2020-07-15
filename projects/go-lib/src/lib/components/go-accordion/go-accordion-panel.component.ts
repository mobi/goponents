import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';

import { accordionAnimation } from '../../animations/accordion.animation';
import { GoConfigService } from '../../go-config.service';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { GoConfigInterface } from '../../go-config.model';

@Component({
  selector: 'go-accordion-panel',
  templateUrl: './go-accordion-panel.component.html',
  styleUrls: ['./go-accordion-panel.component.scss'],
  animations: [
    accordionAnimation
  ]
})
export class GoAccordionPanelComponent implements OnInit, OnChanges {
  _expanded: boolean = false; // Note: Use _expanded in the template
  containerClasses: object = {};
  headerClasses: object = {};
  brandColor: string;
  loaded: boolean = false;

  @Input() borderless: boolean;
  @Input() boxShadow: boolean;
  @Input() forActionSheet: boolean = false;
  @Input() heading: string;
  @Input() icon: string = null;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() persistState: boolean = true;
  @Input() removeContentPadding: boolean = false;
  @Input() slim: boolean;
  @Input() theme: 'dark' | 'light';
  @Input() title: string;

  @Input()
  set expanded(expanded: boolean) {
    this._expanded = expanded;
    this.containerClasses['go-accordion-panel--active'] = expanded;
    this.headerClasses['go-accordion-panel__header--active'] = expanded;
    if (expanded) {
      this.loaded = true;
    } else if (!this.persistState) {
      this.loaded = false;
    }
  }
  get expanded(): boolean {
    return this._expanded;
  }

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  @ContentChild('headerContent', { static: false }) headerContent: TemplateRef<any>;
  @ContentChild('panelContent', { static: false }) panelContent: TemplateRef<any>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private configService: GoConfigService
  ) { }

  ngOnInit(): void {
    // NOTE: `title` is deprecated and will be removed in later version
    this.heading = this.heading || this.title;

    this.configService.config
      .pipe(distinctUntilKeyChanged('brandColor'))
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
      });
  }

  ngOnChanges(): void {
    this.updateClasses();
  }

  detectChanges(): void {
    this.changeDetector.detectChanges();
  }

  updateClasses(): void {
    this.containerClasses = {
      'go-accordion-panel--active': this.expanded === true,
      'go-accordion-panel--borderless': this.borderless === true,
      'go-accordion-panel--box-shadow': this.boxShadow === true,
      'go-accordion-panel--dark': this.theme === 'dark',
      'go-accordion-panel--first': this.isFirst === true,
      'go-accordion-panel--last': this.isLast === true,
      'go-accordion-panel--action-sheet': this.forActionSheet === true
    };

    this.headerClasses = {
      'go-accordion-panel__header--active': this.expanded === true,
      'go-accordion-panel__header--dark': this.theme === 'dark',
      'go-accordion-panel__header--slim': this.slim === true
    };
  }
}
