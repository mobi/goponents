import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from '../go-side-nav/go-side-nav.service';
import { GoConfigService } from '../../../go-config.service';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { GoConfigInterface } from '../../../go-config.model';

@Component({
  selector: 'go-nav-group',
  templateUrl: './go-nav-group.component.html',
  styleUrls: ['./go-nav-group.component.scss'],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class GoNavGroupComponent implements OnInit {
  @Input() navItem: NavGroup | NavItem;
  @Input() class: string;
  @Input() level: number;
  @Output() closeNavs: EventEmitter<NavGroup> = new EventEmitter<NavGroup>();

  brandColor: string;
  group: NavGroup;

  constructor (
    public navService: GoSideNavService,
    private configService: GoConfigService
  ) { }

  ngOnInit(): void {
    // Using this to do type checking between NavGroup and NavItem in the html
    this.group = this.navItem as NavGroup;
    this.configService.config
      .pipe(distinctUntilKeyChanged('brandColor'))
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
      });
  }

  expand(navGroup: NavGroup): void {
    navGroup.expanded = !navGroup.expanded;

    if (!this.navService.navOpen) {
      this.navService.toggleNav();
    }

    if (navGroup.expanded) {
      this.closeNavs.emit(navGroup);
    }
  }
}
