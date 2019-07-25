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

  describe('fillIDs', () => {
    it('creates an object with unique values', () => {
      const values: string[] = Object.values(component.fillIDs);
      const duplicates: string[] = values.filter((item, index) => {
        return values.indexOf(item) !== index;
      });

      expect(duplicates.length).toBe(0);
    });
  });

  describe('fillUrl()', () => {
    it('returns a fill url property value with the unique id located in fillIDs', () => {
      const fill: string = component.fillUrl();

      expect(fill).toBe(`url(#${component.fillIDs[component.loaderType]})`);
    });
  });
});
