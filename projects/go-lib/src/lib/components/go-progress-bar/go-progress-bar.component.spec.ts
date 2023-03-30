import { SimpleChange, SimpleChanges } from "@angular/core";
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";

import { GoProgressBarComponent } from "./go-progress-bar.component";

describe("GoProgressBarComponent", () => {
  let component: GoProgressBarComponent;
  let fixture: ComponentFixture<GoProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoProgressBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnChanges()", () => {
    it("should test when value is undefined", fakeAsync(() => {
      component.ngOnChanges({
        value: new SimpleChange(undefined, undefined, false),
      });

      tick(500);
      expect(component.indicatorWidth).toBe(undefined);
    }));

    it("should test when value is defined", fakeAsync(() => {
      component.ngOnChanges({ value: new SimpleChange(undefined, 40, true) });

      tick(501);
      expect(component.indicatorWidth).toEqual(40);
    }));
  });
});
