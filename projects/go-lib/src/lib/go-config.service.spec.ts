import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs/operators';
import { BrandingMode, GoConfigInterface } from './go-config.model';
import { GoConfigService } from './go-config.service';


describe('GoConfigService', () => {
  let service: GoConfigService;

  const configMock: GoConfigInterface = {
    brandColor: '#ffffff',
    brandingMode: BrandingMode.company,
    logoConfig: {
      logo: 'hedwig.jpg'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [GoConfigService]
    });

    service = TestBed.get(GoConfigService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('setBrandColor', () => {
    it('sets config.brandColor to a new color', () => {
      spyOn(service, 'setBrandColor').and.callThrough();

      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          expect(updatedConfig.brandColor).toBe('#f6f6f6');
        });

      service.setBrandColor('#f6f6f6');
    });
  });

  describe('setBrandingMode', () => {
    it('sets config.brandingMode to a new mode', () => {
      service.setBrandingMode(BrandingMode.company);

      spyOn(service, 'setBrandingMode').and.callThrough();

      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          expect(updatedConfig.brandingMode).toBe(BrandingMode.client);
        });

      service.setBrandingMode(BrandingMode.client);
    });
  });

  describe('setLogo', () => {
    it('updates logoConfig on config', () => {
      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          expect(updatedConfig.logoConfig.logo).toEqual(configMock.logoConfig.logo);
        });

      service.setLogo(configMock.logoConfig);
    });
  });

  describe('setConfig', () => {
    it('sets the config to the new config provided', () => {
      service.config.next({
        brandColor: '#000000',
        brandingMode: BrandingMode.client,
        logoConfig: { }
      });

      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          expect(updatedConfig).toEqual(configMock);
        });

      service.setConfig(configMock);
    });
  });

  describe('getConfig', () => {
    it('gets the current configuration', () => {
      service.config.next(configMock);

      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          const config: GoConfigInterface = service.getConfig();
          expect(config).toEqual(configMock);
        });
    });
  });
});
