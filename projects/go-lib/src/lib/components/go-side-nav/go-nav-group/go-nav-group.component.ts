import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { GoConfigInterface } from '../../../go-config.model';
import { GoConfigService } from '../../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';

@Component({
  selector: 'go-nav-group',
  templateUrl: './go-nav-group.component.html',
  styleUrls: ['./go-nav-group.component.scss'],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class GoNavGroupComponent implements OnInit, OnDestroy {
  @Input() navItem: NavGroup | NavItem;
  @Input() class: string;
  @Input() index: number;
  @Input() level: number;
  @Output() closeNavs: EventEmitter<NavGroup> = new EventEmitter<NavGroup>();

  brandColor: string;
  group: NavGroup;

  private destroy$: Subject<void> = new Subject();

  // We are using a setter on this ViewChild because of the *ngIf on the element.
  // This enables us to check whether the element exists before attempting to set its attributes.
  @ViewChild('navGroupRef', { static: false }) set content(navGroupRef: ElementRef) {
    if (navGroupRef && this.navItem.attributes) {
      this.navService.setAttributes(this.navItem.attributes, navGroupRef, this.renderer);
    }
  }

  constructor (
    public navService: GoSideNavService,
    private configService: GoConfigService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // Using this to do type checking between NavGroup and NavItem in the html
    this.group = this.navItem as NavGroup;
    this.configService.config
      .pipe(
        distinctUntilKeyChanged('brandColor'),
        takeUntil(this.destroy$)
      )
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  expand(navGroup: NavGroup): void {
    navGroup.expanded = !navGroup.expanded;

    if (!this.navService.navOpen) {
      this.navService.toggleNav();
    }

    if (navGroup.expanded) {
      this.closeNavs.emit(navGroup);
    }
  }
}
