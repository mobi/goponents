import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { skip } from 'rxjs/operators';
import { BrandingMode, GoConfigInterface } from '../../go-config.model';
import { GoConfigService } from '../../go-config.service';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';
import { GoHeaderComponent } from './go-header.component';

describe('GoHeaderComponent', () => {
  let component: GoHeaderComponent;
  let fixture: ComponentFixture<GoHeaderComponent>;
  let configService: GoConfigService;
  let sideNavService: GoSideNavService;

  const configMock: GoConfigInterface = {
    brandColor: '#ffffff',
    brandingMode: BrandingMode.company,
    logoConfig: {
      logo: 'hedwig.jpg'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeaderComponent ],
      imports: [
        CommonModule,
        GoIconModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        GoConfigService,
        GoSideNavService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderComponent);
    component = fixture.componentInstance;
    configService = TestBed.get(GoConfigService);
    sideNavService = TestBed.get(GoSideNavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setupConfig', () => {
    it('subscribes to configuration subject of configService', () => {
      expect(component.brandColor).toBe('#65B360');
      expect(component.logoConfig).toBe(undefined);

      configService.config.pipe(skip(1)).subscribe(() => {
        expect(component.brandColor).toBe('#ffffff');
        expect(component.logoConfig).toEqual({ logo: 'hedwig.jpg' });
        expect(component.menuBgHoverValue).toBe('#e6e6e6');
        expect(component.fontColor).toEqual('#ffffff');
      });

      configService.setConfig(configMock);
    });
  });

  describe('ngOnDestroy', () => {
    it('unsubscribes from resizeSubscription', () => {
      spyOn(component['resizeSubscription'], 'unsubscribe').and.callThrough();

      component.ngOnDestroy();

      expect(component['resizeSubscription'].unsubscribe).toHaveBeenCalled();
    });

    it('unsubscribes from configSubscription', () => {
      spyOn(component['configSubscription'], 'unsubscribe').and.callThrough();

      component.ngOnDestroy();

      expect(component['configSubscription'].unsubscribe).toHaveBeenCalled();
    });
  });

  describe('isNavCollapsed', () => {
    it('returns true if the window width is less than minWidthBreakpoint', () => {
      spyOnProperty(window, 'innerWidth').and.returnValue(750);
      window.dispatchEvent(new Event('resize'));

      expect(component.isNavCollapsed()).toBe(true);
    });

    it('returns true if the window width is greater than minWidthBreakpoint but side nav is collapsed', () => {
      sideNavService.navOpen = false;

      spyOnProperty(window, 'innerWidth').and.returnValue(800);
      window.dispatchEvent(new Event('resize'));

      expect(component.isNavCollapsed()).toBe(true);
    });

    it('returns false window width is greater than minWidthBreakpoint but side nav is expanded', () => {
      sideNavService.navOpen = true;

      spyOnProperty(window, 'innerWidth').and.returnValue(800);
      window.dispatchEvent(new Event('resize'));

      expect(component.isNavCollapsed()).toBe(false);
    });
  });

  describe('getLogoBackground', () => {
    it('returns brandColor if it is defined and the side nav is expanded', () => {
      expect(component.getLogoBackground()).toBe(component.brandColor);
    });

    it('returns null if side nav is collapsed', () => {
      sideNavService.navOpen = false;

      expect(component.getLogoBackground()).toBe(null);
    });
  });

  describe('getLogo', () => {
    it('returns the collapsed version of the logo if the side nav is collapsed', () => {
      sideNavService.navOpen = false;
      component.logoConfig = { logoCollapsed: 'luna.jpg', logo: 'hedwig.jpg' };

      expect(component.getLogo()).toBe('luna.jpg');
    });

    it('returns the normal version of the logo if the side nav is expanded', () => {
      sideNavService.navOpen = true;
      component.logoConfig = { logoCollapsed: 'luna.jpg', logo: 'hedwig.jpg' };

      expect(component.getLogo()).toBe('hedwig.jpg');
    });
  });

  describe('enableMenuHover', () => {
    it('sets menuBgHover to menuBgHoverValue', () => {
      expect(component.menuBgHover).toBe(undefined);

      component.enableMenuHover();

      expect(component.menuBgHover).toBe(component.menuBgHoverValue);
    });
  });

  describe('disableMenuHover', () => {
    it('sets menuBgHover to null', () => {
      component.menuBgHover = '#5ba156';

      component.disableMenuHover();

      expect(component.menuBgHover).toBe(null);
    });
  });
});
