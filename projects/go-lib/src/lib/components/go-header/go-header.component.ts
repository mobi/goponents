import { Component, Input } from '@angular/core';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent {

  @Input() logo: string = '';

  constructor(public sideNavService: GoSideNavService) { }

  toggleSideMenu(): void {
    this.sideNavService.toggleNav();
  }

}
