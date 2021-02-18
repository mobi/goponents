import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoNavItemComponent } from './go-nav-item.component';
import { GoIconModule } from '../../go-icon/go-icon.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../../go-config.service';
import { of } from 'rxjs';

describe('GoNavItemComponent', () => {
  let component: GoNavItemComponent;
  let configService: GoConfigService;
  let fixture: ComponentFixture<GoNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(GoNavItemComponent);
    configService = TestBed.get(GoConfigService);
    component = fixture.componentInstance;
    component.navItem = {
      route: '/help',
      routeTitle: 'Help'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set up a subscription that updates brandColor when ConfigService updates brandColor', () => {
      const newBrandColor: string = '#000000';
      expect(component.brandColor).not.toEqual(newBrandColor);

      spyOn(configService.config, 'pipe').and.returnValue(of({ brandColor: newBrandColor }));

      component.ngOnInit();

      configService.setBrandColor(newBrandColor);

      expect(component.brandColor).toEqual(newBrandColor);
    });
  });

  describe('ngAfterViewInit', () => {
    it('should set any attributes on the navItem', () => {
      component.navItem.attributes = [{ name: 'walkme-id', value: 'go-side-nav' }];

      component.ngAfterViewInit();

      expect(component.navItemRef.nativeElement.getAttribute('walkme-id')).toEqual('go-side-nav');
    });
  });
});
