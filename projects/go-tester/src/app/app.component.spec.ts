import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../../go-lib/src/public_api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const goConfigServiceMock = {
    setConfig: jasmine.createSpy('setConfig')
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        { provide: GoConfigService, useValue: goConfigServiceMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should configure GoConfigService on init', () => {
    TestBed.createComponent(AppComponent);
    expect(goConfigServiceMock.setConfig).toHaveBeenCalled();
  });
});
