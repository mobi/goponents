import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFooterComponent } from './go-footer.component';

describe('GoFooterComponent', () => {
  let component: GoFooterComponent;
  let fixture: ComponentFixture<GoFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoFooterComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
