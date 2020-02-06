import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoNavItemComponent } from './go-nav-item.component';
import { GoIconModule } from '../../go-icon/go-icon.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../../go-config.service';

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
      component.ngOnInit();

      configService.setBrandColor(newBrandColor);

      expect(component.brandColor).toEqual(newBrandColor);
    });
  });
});
