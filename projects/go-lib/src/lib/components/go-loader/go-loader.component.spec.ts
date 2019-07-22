import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLoaderComponent } from './go-loader.component';

describe('GoLoaderComponent', () => {
  let component: GoLoaderComponent;
  let fixture: ComponentFixture<GoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLoaderComponent ]
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

  describe('ngOnInit()', () => {
    it('initializes pathClasses to be neutral by default', () => {
      expect(component.pathClasses).toEqual({
        'go-loader--neutral': true,
        'go-loader--positive': false,
        'go-loader--negative': false
      });
    });

    it('initializes pathClasses to be positive based on loaderType', () => {
      component.loaderType = 'positive';
      component.ngOnInit();

      expect(component.pathClasses).toEqual({
        'go-loader--neutral': false,
        'go-loader--positive': true,
        'go-loader--negative': false
      });
    });

    it('initializes pathClasses to be negative based on loaderType', () => {
      component.loaderType = 'negative';
      component.ngOnInit();

      expect(component.pathClasses).toEqual({
        'go-loader--neutral': false,
        'go-loader--positive': false,
        'go-loader--negative': true
      });
    });

    it('initializes containerClasses and sets container to medium', () => {
      expect(component.containerClasses).toEqual({
        'go-loader-container--small': false,
        'go-loader-container--medium': true,
        'go-loader-container--large': false,
        'go-loader-container--completed': false
      });
    });

    it('initializes container size to small based on loaderSize', () => {
      component.loaderSize = 'small';
      component.ngOnInit();

      expect(component.containerClasses).toEqual({
        'go-loader-container--small': true,
        'go-loader-container--medium': false,
        'go-loader-container--large': false,
        'go-loader-container--completed': false
      });
    });

    it('initializes container size to large based on loaderSize', () => {
      component.loaderSize = 'large';
      component.ngOnInit();

      expect(component.containerClasses).toEqual({
        'go-loader-container--small': false,
        'go-loader-container--medium': false,
        'go-loader-container--large': true,
        'go-loader-container--completed': false
      });
    });
  });

  describe('completeAnimation()', () => {
    it('sets loaderDone to true', () => {
      expect(component.loaderDone).toBe(false);
      component.completeAnimation();
      expect(component.loaderDone).toBe(true);
    });
  });
});
