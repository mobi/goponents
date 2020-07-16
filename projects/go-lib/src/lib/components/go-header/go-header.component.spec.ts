import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { skip } from 'rxjs/operators';
import { BrandingMode, GoConfigInterface } from '../../go-config.model';
import { GoConfigService } from '../../go-config.service';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoHeaderComponent } from './go-header.component';

describe('GoHeaderComponent', () => {
  let component: GoHeaderComponent;
  let fixture: ComponentFixture<GoHeaderComponent>;
  let configService: GoConfigService;

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
        GoConfigService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderComponent);
    component = fixture.componentInstance;
    configService = TestBed.get(GoConfigService);
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
});
