import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';

import { routerAnimation } from '../../animations/route.animation';
import { fadeTemplateAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'go-layout',
  templateUrl: './go-layout.component.html',
  styleUrls: ['./go-layout.component.scss'],
  animations: [routerAnimation, fadeTemplateAnimation],
  encapsulation: ViewEncapsulation.None
})
export class GoLayoutComponent implements OnInit {

  routeLoader: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.routeLoader = true;
      }
      if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel) || (event instanceof NavigationError)) {
        this.routeLoader = false;
      }
    });
  }

  routeAnimation(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
