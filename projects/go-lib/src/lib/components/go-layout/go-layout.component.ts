import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { fadeAnimation, fadeTemplateAnimation } from '../../animations/fade.animation';
import { routerAnimation } from '../../animations/route.animation';
import { GoHeaderBarComponent } from '../go-header-bar/go-header-bar.component';

import { RouterModule } from '@angular/router';
import { GoHeaderModule  } from '../go-header/go-header.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoModalModule } from '../go-modal/go-modal.module';
import { GoOffCanvasModule } from '../go-off-canvas/go-off-canvas.module';
import { GoToasterModule } from '../go-toaster/go-toaster.module';
import { GoHeaderBarModule } from '../go-header-bar/go-header-bar.module';
@Component({
    selector: 'go-layout',
    templateUrl: './go-layout.component.html',
    styleUrls: ['./go-layout.component.scss'],
    animations: [
        routerAnimation,
        fadeAnimation,
        fadeTemplateAnimation
    ],
    encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterModule, GoHeaderModule, GoLoaderModule, GoModalModule, GoOffCanvasModule, GoToasterModule, GoHeaderBarModule],
})
export class GoLayoutComponent implements OnInit, OnDestroy {
  private routeScrollPositions: { [url: string]: number }[] = [];
  private goingBack: boolean = false;
  private destroy$: Subject<void> = new Subject();

  routeLoader: boolean = false;

  @ViewChild(GoHeaderBarComponent, { static: true }) headerBar: GoHeaderBarComponent;
  @ViewChild('routeContainer', { static: true }) routeContainer: ElementRef<any>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event): event is NavigationStart | NavigationEnd | NavigationCancel | NavigationError =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ),
      takeUntil(this.destroy$)
    ).subscribe((event) => {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  routeAnimation(outlet: RouterOutlet): ActivatedRoute | string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
