import { Component, Input, OnInit } from '@angular/core';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnInit {

  @Input() logo: string = '';

  constructor(public sideNavService: GoSideNavService) { }

  ngOnInit() {
  }

  toggleSideMenu(): void {
    this.sideNavService.toggleNav();
  }

}
