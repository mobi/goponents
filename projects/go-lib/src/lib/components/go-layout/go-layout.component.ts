import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
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
  private routeScrollPositions: { [url: string]: number }[] = [];
  private goingBack: boolean = false;

  routeLoader: boolean = false;

  @ViewChild(GoHeaderBarComponent) headerBar: GoHeaderBarComponent;
  @ViewChild('routeContainer') routeContainer: ElementRef<any>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.routeLoader = true;

        if (event.navigationTrigger === 'popstate') {
          this.goingBack = true;
        }
        this.routeScrollPositions[this.router.url] = this.routeContainer.nativeElement.scrollTop;
      } else if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel) || (event instanceof NavigationError)) {
        this.headerBar.reset();
        this.routeLoader = false;

        if (this.goingBack && this.routeScrollPositions[event.url]) {
          this.routeContainer.nativeElement.scrollTop = this.routeScrollPositions[event.url];
        } else {
          this.routeContainer.nativeElement.scrollTop = 0;
        }
        this.goingBack = false;
      }
    });
  }

  routeAnimation(outlet: RouterOutlet): ActivatedRoute | string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
