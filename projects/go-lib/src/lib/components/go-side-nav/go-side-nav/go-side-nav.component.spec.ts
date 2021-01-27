import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoActionSheetModule } from '../../go-action-sheet/go-action-sheet.module';
import { GoSideNavComponent } from './go-side-nav.component';
import { GoNavGroupComponent } from '../go-nav-group/go-nav-group.component';
import { GoIconModule } from '../../go-icon/go-icon.module';
import { GoIconButtonModule } from "../../go-icon-button/go-icon-button.module";
import { GoNavItemComponent } from '../go-nav-item/go-nav-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../../go-config.service';
import { NavGroup } from '../nav-group.model';
import { Component } from '@angular/core';

@Component({
  template: ''
})
export class FakeComponent {
}

describe('GoSideNavComponent', () => {
  let component: GoSideNavComponent;
  let fixture: ComponentFixture<GoSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FakeComponent,
        GoNavGroupComponent,
        GoNavItemComponent,
        GoSideNavComponent
      ],
      imports: [
        GoActionSheetModule,
        GoIconModule,
        GoIconButtonModule,
        RouterTestingModule
      ],
      providers: [
        GoConfigService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSideNavComponent);
    component = fixture.componentInstance;

    component.menuItems = [
      {
        routeTitle: 'Group 1',
        subRoutes: [
          {
            routeTitle: 'Item1',
            route: '/'
          }
        ]
      },
      {
        routeTitle: 'Group 2',
        subRoutes: [
          {
            routeTitle: 'Item2',
            route: '/item_2'
          },
          {
            routeTitle: 'SubGroup',
            subRoutes: [
              {
                routeTitle: 'SubGroupItem',
                route: '/sub_group_item'
              }
            ]
          }
        ]
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should add an id to only NavGroup items of menuItems', () => {
      component.ngOnInit();

      expect(Object.keys(component.menuItems[0])).toContain('id');
      expect(Object.keys(component.menuItems[1])).toContain('id');
      expect(Object.keys((component.menuItems[1] as NavGroup).subRoutes[1])).toContain('id');
      expect(Object.keys((component.menuItems[1] as NavGroup).subRoutes[0])).not.toContain('id');
    });

    it('should expand navGroup of route', () => {
      component.ngOnInit();
      expect(component.menuItems[0]['expanded']).toBe(true);
    });
  });

  describe('closeNavs', () => {
    beforeEach(() => {
      component.menuItems[1]['expanded'] = true;
      component.menuItems[0]['expanded'] = false;
    });

    it('sets all navGroups to closed beside the one passed in', () => {
      component.closeNavs(component.menuItems[0] as NavGroup);

      expect(component.menuItems[1]['expanded']).toBe(false);
      expect(component.menuItems[0]['expanded']).toBe(true);
    });

    it('should keep top level open if nested group expanded', () => {
      const nestedGroup: NavGroup = component.menuItems[1]['subRoutes'][1];

      component.closeNavs(nestedGroup);

      expect(component.menuItems[1]['expanded']).toBe(true);
      expect(nestedGroup.expanded).toBe(true);
    });

    it('sets nested navGroups all closed if they\'re not the one passed in', () => {
      const nestedGroup: NavGroup = component.menuItems[1]['subRoutes'][1];
      nestedGroup.expanded = true;

      component.closeNavs(component.menuItems[0] as NavGroup);

      expect(nestedGroup.expanded).toBe(false);
      expect(component.menuItems[1]['expanded']).toBe(false);
      expect(component.menuItems[0]['expanded']).toBe(true);
    });
  });

  describe('ngAfterViewInit', () => {
    it('should set any attributes passed into the component', () => {
      component.attributes = [{ name: 'walkme-id', value: 'go-side-nav' }];

      component.ngAfterViewInit();

      expect(component.sideNavRef.nativeElement.getAttribute('walkme-id')).toEqual('go-side-nav');
    });
  });
});
