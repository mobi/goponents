import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomNavAttribute } from '../custom-nav-attribute.model';
import { NavGroup } from '../nav-group.model';
import { NavItem } from '../nav-item.model';
import { GoSideNavService } from './go-side-nav.service';

describe('GoSideNavService', () => {
  let service: GoSideNavService;

  const navItems: (NavItem | NavGroup)[] = [
    {
      routeTitle: 'Group',
      subRoutes: [
        { routeTitle: 'GroupItem1', route: '/group_item_1' },
        { routeTitle: 'GroupItem2', route: '/group_item_2' }
      ]
    }, {
      routeTitle: 'Level1 Item',
      route: '/level_1_item'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        GoSideNavService
      ]
    });

    service = TestBed.get(GoSideNavService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('setMenuItems', () => {
    it('sets up navItems', () => {
      service.setMenuItems(navItems);
      expect(service.menuItems).toEqual(navItems);
    });

    it('should call createNavMap', () => {
      const spy: jasmine.Spy = spyOn<any>(service, 'createNavMap').and.callThrough();

      service.setMenuItems(navItems);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('setAttributes', () => {
    it('should set the attributes onto the element passed in', () => {
      const attributesMock: CustomNavAttribute[] = [
        { name: 'attribute1', value: 'value1' },
        { name: 'attribute1', value: 'value1' }
      ];
      const elementRefMock: ElementRef = { nativeElement: { attributes: [] } };
      const renderer2Mock: Renderer2 = jasmine.createSpyObj('renderer2Mock', ['setAttribute']);

      service.setAttributes(attributesMock, elementRefMock, renderer2Mock);

      expect(renderer2Mock.setAttribute).toHaveBeenCalledWith(elementRefMock.nativeElement, 'attribute1', 'value1');
      expect(renderer2Mock.setAttribute).toHaveBeenCalledTimes(2);
    });
  });

  describe('toggleNav', () => {
    it('should set navOpen to false if previously true', () => {
      service.navOpen = true;

      service.toggleNav();

      expect(service.navOpen).toBe(false);
    });

    it('should set navOpen to true if previously false', () => {
      service.navOpen = false;

      service.toggleNav();

      expect(service.navOpen).toBe(true);
    });
  });

  describe('extractBaseUrl', () => {
    let url: string;

    it('shouldn\'t error if url doesn\'t exist', () => {
      url = service.extractBaseUrl('');

      expect(url).toEqual('/');
    });
  });

  describe('setActiveItem', () => {
    it('should set active to true on item passed in', () => {
      service.setMenuItems(navItems);
      service.setActiveItem('/group_item_1');

      expect((service.menuItems[0] as NavGroup).subRoutes[0].routeActive).toBe(true);
    });

    it('should set previously active items to false', () => {
      service.setMenuItems(navItems);
      service.setActiveItem('/group_item_1');
      service.setActiveItem('/level_1_item');

      expect((service.menuItems[0] as NavGroup).subRoutes[0].routeActive).toBe(false);
      expect(service.menuItems[1].routeActive).toBe(true);
    });
  });
});
