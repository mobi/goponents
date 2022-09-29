import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoProgressBarComponent } from './go-progress-bar.component';

describe('GoProgressBarComponent', () => {
  let component: GoProgressBarComponent;
  let fixture: ComponentFixture<GoProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
