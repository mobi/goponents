import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoIconModule } from '../go-icon/go-icon.module';

import { GoHeaderBarComponent } from './go-header-bar.component';

describe('GoHeaderBarComponent', () => {
  let component: GoHeaderBarComponent;
  let fixture: ComponentFixture<GoHeaderBarComponent>;

  const locationSpy: any = jasmine.createSpyObj('Location', ['goBack']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeaderBarComponent ],
      imports: [
        GoIconModule
      ],
      providers: [
        { provide: Location, useValue: locationSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
