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
});
