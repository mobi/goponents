import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilKeyChanged, takeUntil } from 'rxjs/operators';
import { GoConfigInterface } from '../../../go-config.model';
import { GoConfigService } from '../../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { NavItem } from '../nav-item.model';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent implements AfterViewInit, OnInit, OnDestroy {
  brandColor: string;

  private destroy$: Subject<void> = new Subject();

  @Input() navItem: NavItem;
  @Input() level: number;

  @ViewChild('navItemRef', { static: false }) navItemRef: ElementRef;

  constructor (
    public navService: GoSideNavService,
    private configService: GoConfigService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
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

  ngAfterViewInit(): void {
    if (this.navItem.attributes) {
      this.navService.setAttributes(this.navItem.attributes, this.navItemRef, this.renderer);
    }
  }
}
