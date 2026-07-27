import { CommonModule } from '@angular/common';
import { waitForAsync, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  const clientConfigMock: GoConfigInterface = {
    brandColor: '#123456',
    brandingMode: BrandingMode.client,
    logoConfig: {
      logo: 'client.jpg',
      logoLink: '/home',
      useHref: false,
      altText: 'Client Logo'
    }
  };

  beforeEach(waitForAsync(() => {
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
    configService = TestBed.inject(GoConfigService);
    sideNavService = TestBed.inject(GoSideNavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setupConfig', () => {
    it('updates brandColor, logoConfig, menuBgHoverValue, and fontColor on events from configService.config', () => {
      expect(component.brandColor).toBe('#20A65F');
      expect(component.logoConfig).toEqual({});

      configService.config.pipe(skip(1)).subscribe(() => {
        expect(component.brandColor).toBe('#ffffff');
        expect(component.logoConfig).toEqual({ logo: 'hedwig.jpg' });
        expect(component.menuBgHoverValue).toBe('#e6e6e6');
        expect(component.fontColor).toEqual('#ffffff');
      });

      configService.setConfig(configMock);
    });

    it('sets light header theme values when branding mode is client', () => {
      configService.setConfig(clientConfigMock);

      expect(component.brandColor).toBe('#ffffff');
      expect(component.fontColor).toBe('#202626');
      expect(component.menuBgHoverValue).toBe('#e6e6e6');
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

    it('returns false if window width is greater than minWidthBreakpoint and side nav is expanded', () => {
      sideNavService.navOpen = true;

      spyOnProperty(window, 'innerWidth').and.returnValue(800);
      window.dispatchEvent(new Event('resize'));

      expect(component.isNavCollapsed()).toBe(false);
    });
  });

  describe('getLogoBackground', () => {
    it('returns null if side nav is collapsed', () => {
      sideNavService.navOpen = false;
      expect(component.getLogoBackground()).toBe(null);
    });

    it('returns brand color if side nav is expanded', () => {
      sideNavService.navOpen = true;
      component.brandColor = '#abc123';

      expect(component.getLogoBackground()).toBe('#abc123');
    });
  });

  describe('getLogo', () => {
    it('returns empty string if logo config does not include logo', () => {
      component.logoConfig = { };

      expect(component.getLogo()).toBe('');
    });

    it('returns collapsed logo when nav is collapsed and a collapsed logo exists', () => {
      sideNavService.navOpen = false;
      component.logoConfig = { logo: 'main-logo.png', logoCollapsed: 'collapsed-logo.png' };
      spyOnProperty(window, 'innerWidth').and.returnValue(800);

      expect(component.getLogo()).toBe('collapsed-logo.png');
    });
  });

  describe('logo links and alt text', () => {
    it('returns true for internal logo link only', () => {
      component.logoConfig = { logoLink: '/home', useHref: false };

      expect(component.hasInternalLogoLink()).toBe(true);
      expect(component.hasExternalLogoLink()).toBe(false);
    });

    it('returns true for external logo link only', () => {
      component.logoConfig = { logoLink: 'https://example.com', useHref: true };

      expect(component.hasExternalLogoLink()).toBe(true);
      expect(component.hasInternalLogoLink()).toBe(false);
    });

    it('returns default alt text if altText is not provided', () => {
      component.logoConfig = { logo: 'logo.png' };

      expect(component.logoAltText()).toBe('Application logo');
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
