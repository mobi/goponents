import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { GoBrandingService } from '../../../go-branding.service';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent implements OnInit {
  brandColor: string;

  @Input() navItem: NavItem;

  constructor (
    public navService: GoSideNavService,
    private brandingService: GoBrandingService
  ) { }

  ngOnInit(): void {
    this.brandingService.brandColor.subscribe((value: string) => {
      this.brandColor = value;
    });
  }
}
