import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { GoConfigService } from '../../../go-config.service';
import { GoConfigInterface } from '../../../go-config.model';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent implements OnInit {
  brandColor: string;

  @Input() navItem: NavItem;
  @Input() level: number;

  constructor (
    public navService: GoSideNavService,
    private configService: GoConfigService
  ) { }

  ngOnInit(): void {
    this.configService.config
      .pipe(distinctUntilKeyChanged('brandColor'))
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
      });
  }
}
