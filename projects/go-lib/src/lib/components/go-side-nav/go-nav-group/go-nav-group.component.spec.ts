import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoNavGroupComponent } from './go-nav-group.component';
import { GoIconModule } from '../../go-icon/go-icon.module';
import { GoNavItemComponent } from '../go-nav-item/go-nav-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../../go-config.service';
import { NavGroup } from '../nav-group.model';

describe('GoNavGroupComponent', () => {
  let component: GoNavGroupComponent;
  let fixture: ComponentFixture<GoNavGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoNavGroupComponent,
        GoNavItemComponent
      ],
      imports: [
        GoIconModule,
        RouterTestingModule
      ],
      providers: [
        GoConfigService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoNavGroupComponent);
    component = fixture.componentInstance;
    component.navItem = {
      routeTitle: 'Help',
      subRoutes: [{
        routeTitle: 'The real help',
        route: '/help'
      }]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('expand', () => {
    let navGroup: NavGroup;

    beforeEach(() => {
      navGroup = component.navItem as NavGroup;
    });

    it('sets group expanded attribute to true if previously false', () => {
      navGroup.expanded = false;

      component.expand(navGroup);

      expect(navGroup.expanded).toBe(true);
    });

    it('sets group expanded attribute to false if previously true', () => {
      navGroup.expanded = true;

      component.expand(navGroup);

      expect(navGroup.expanded).toBe(false);
    });

    it('toggles nav if sideNav is not open', () => {
      spyOn(component.navService, 'toggleNav');
      component.navService.navOpen = false;

      component.expand(navGroup);

      expect(component.navService.toggleNav).toHaveBeenCalled();
    });

    it('emits a call to close other navs if expanding a navGroup', () => {
      spyOn(component.closeNavs, 'emit');

      component.expand(navGroup);

      expect(component.closeNavs.emit).toHaveBeenCalled();
    });

    it('doesn\'t emit a call to close other navs if closing a navGroup', () => {
      spyOn(component.closeNavs, 'emit');
      navGroup.expanded = true;

      component.expand(navGroup);

      expect(component.closeNavs.emit).not.toHaveBeenCalled();
    });
  });
});
