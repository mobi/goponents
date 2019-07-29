import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLoaderComponent } from './go-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GoLoaderComponent', () => {
  let component: GoLoaderComponent;
  let fixture: ComponentFixture<GoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLoaderComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loaderClasses()', () => {
    it('adds a small modifier class based on loaderSize', () => {
      component.loaderSize = 'small';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--small']).toBe(true);
      expect(containerClasses['go-loader--medium']).toBe(false);
      expect(containerClasses['go-loader--large']).toBe(false);
    });

    it('adds a medium modifier class based on loaderSize', () => {
      component.loaderSize = 'medium';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--small']).toBe(false);
      expect(containerClasses['go-loader--medium']).toBe(true);
      expect(containerClasses['go-loader--large']).toBe(false);
    });

    it('adds a large modifier class based on loaderSize', () => {
      component.loaderSize = 'large';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--small']).toBe(false);
      expect(containerClasses['go-loader--medium']).toBe(false);
      expect(containerClasses['go-loader--large']).toBe(true);
    });

    it('adds a neutral modifier class based on loaderType', () => {
      component.loaderType = 'neutral';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--neutral']).toBe(true);
      expect(containerClasses['go-loader--negative']).toBe(false);
      expect(containerClasses['go-loader--positive']).toBe(false);
    });

    it('adds a negative modifier class based on loaderType', () => {
      component.loaderType = 'negative';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--neutral']).toBe(false);
      expect(containerClasses['go-loader--negative']).toBe(true);
      expect(containerClasses['go-loader--positive']).toBe(false);
    });

    it('adds a positive modifier class based on loaderType', () => {
      component.loaderType = 'positive';

      const containerClasses = component.loaderClasses();
      expect(containerClasses['go-loader--neutral']).toBe(false);
      expect(containerClasses['go-loader--negative']).toBe(false);
      expect(containerClasses['go-loader--positive']).toBe(true);
    });
  });
});
