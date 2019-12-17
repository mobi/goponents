import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';

import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';

import { routerAnimation } from '../../animations/route.animation';
import { fadeAnimation, fadeTemplateAnimation } from '../../animations/fade.animation';
import { GoHeaderBarComponent } from '../go-header-bar/go-header-bar.component';

@Component({
  selector: 'go-layout',
  templateUrl: './go-layout.component.html',
  styleUrls: ['./go-layout.component.scss'],
  animations: [
    routerAnimation,
    fadeAnimation,
    fadeTemplateAnimation
  ],
  encapsulation: ViewEncapsulation.None
})
export class GoLayoutComponent implements OnInit {

  routeLoader: boolean = false;

  @ViewChild(GoHeaderBarComponent) headerBar: GoHeaderBarComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routeLoader = true;
      } else if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel) || (event instanceof NavigationError)) {
        this.headerBar.reset();
        this.routeLoader = false;
      }
    });
  }

  routeAnimation(outlet: RouterOutlet): ActivatedRoute | string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
