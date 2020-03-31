import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { GoConfigInterface } from '../../../go-config.model';
import { GoConfigService } from '../../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { NavItem } from '../nav-item.model';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent implements OnInit {
  brandColor: string;

  @Input() navItem: NavItem;
  @Input() level: number;

  @ViewChild('navItemRef') navItemRef: ElementRef;

  constructor (
    public navService: GoSideNavService,
    private configService: GoConfigService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.navItem.attributes) {
      this.navService.setAttributes(this.navItem.attributes, this.navItemRef, this.renderer);
    }

    this.configService.config
      .pipe(distinctUntilKeyChanged('brandColor'))
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
      });
  }
}
