import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GoPillBadgeComponent } from "./go-pill-badge.component";

describe("GoPillBadgeComponent", () => {
  let component: GoPillBadgeComponent;
  let fixture: ComponentFixture<GoPillBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoPillBadgeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPillBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("badgeClasses()", () => {
    beforeEach(() => {
      component.badgeStyles = {};
    });

    it("returns an object that sets go-pill-badge--success to true based on type", () => {
      expect(component.badgeStyles["go-pill-badge--success"]).toBeFalsy();

      component.type = "success";
      component.ngOnChanges();
      expect(component.badgeStyles["go-pill-badge--success"]).toBe(true);
    });

    it("returns an object that set go-pill-badge--error to true based on type", () => {
      expect(component.badgeStyles["go-pill-badge--error"]).toBeFalsy();

      component.type = "error";
      component.ngOnChanges();
      expect(component.badgeStyles["go-pill-badge--error"]).toBe(true);
    });

    it("returns an object that set go-pill-badge--info to true based on type", () => {
      expect(component.badgeStyles["go-pill-badge--info"]).toBeFalsy();

      component.type = "info";
      component.ngOnChanges();
      expect(component.badgeStyles["go-pill-badge--info"]).toBe(true);
    });
  });
});
