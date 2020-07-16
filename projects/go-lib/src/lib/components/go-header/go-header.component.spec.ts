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

  // describe('isNavCollapsed', () => {
  //   it('returns true if the window width is less than 768px', () => {
  //     Object.defineProperty(window, 'innerWidth', {
  //       writable: true,
  //       configurable: true,
  //       value: 750
  //     });
  //     console.log('window.innerWidth 1', window.innerWidth);

  //     expect(component.isNavCollapsed()).toBe(true);
  //   });

  //   it('returns true if the side nav is collapsed and window width is greater than 768px', () => {
  //     Object.defineProperty(window, 'innerWidth', {
  //       writable: true,
  //       configurable: true,
  //       value: 800
  //     });
  //     console.log('window.innerWidth 2', window.innerWidth);

  //     expect(component.isNavCollapsed()).toBe(true);
  //   });

  //   it('returns false if the side nav is open and window width is greater than 768px', () => {
  //     Object.defineProperty(window, 'innerWidth', {
  //       writable: true,
  //       configurable: true,
  //       value: 800
  //     });

  //     expect(component.isNavCollapsed()).toBe(false);
  //   });
  // });

  describe('getLogoBackground', () => {
    it('returns brandColor if it is defined and the side nav is not collapsed', () => {
      expect(component.getLogoBackground()).toBe(component.brandColor);
    });

    it('returns null if side nav is collapsed', () => {
      sideNavService.navOpen = false;
      expect(component.getLogoBackground()).toBe(null);
    });
  });
});
