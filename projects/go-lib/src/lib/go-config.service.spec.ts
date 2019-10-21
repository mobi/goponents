import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs/operators';
import { GoConfigInterface } from './go-config.model';
import { GoConfigService } from './go-config.service';


describe('GoConfigService', () => {
  let service: GoConfigService;

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

  describe('toggleHeaderBrandingEnabled', () => {
    it('toggles config.headerBrandingEnabled', () => {
      spyOn(service, 'setBrandColor').and.callThrough();
      service.config
        .pipe(skip(1))
        .subscribe((updatedConfig: GoConfigInterface) => {
          expect(updatedConfig.headerBrandingEnabled).toBe(true);
        });
      service.toggleHeaderBrandingEnabled();
    });
  });

  describe('contrastIsAccessible', () => {
    it('returns false when given a color combo that is not accessible', () => {
      expect(service.contrastIsAccessible('#ffffff', '#bababa')).toBeFalsy();
    });

    it('returns true when given a color combo that is accessible', () => {
      expect(service.contrastIsAccessible('#ffffff', '#000000')).toBeTruthy();
    });
  });
});

