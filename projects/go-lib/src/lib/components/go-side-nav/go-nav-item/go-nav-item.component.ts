import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { GoBrandingService } from '../../../go-branding.service';

@Component({
  selector: 'go-nav-item',
  templateUrl: './go-nav-item.component.html',
  styleUrls: ['./go-nav-item.component.scss']
})
export class GoNavItemComponent implements AfterContentInit {
  @Input() navItem: NavItem;

  @ViewChild('goNavItemSelected') selectedBinding: ElementRef;

  constructor (
    public navService: GoSideNavService,
    private brandingService: GoBrandingService
  ) { }

  ngAfterContentInit(): void {
    this.selectedBinding.nativeElement.style.background = this.brandingService.brandColor;
  }
}
