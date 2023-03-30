import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBadgeComponent } from './go-badge.component';

describe('GoBadgeComponent', () => {
  let component: GoBadgeComponent;
  let fixture: ComponentFixture<GoBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("badgeClasses()", () => {
    beforeEach(() => {
      component.badgeStyles = {};
    });

    it("returns an object that sets go-badge--positive to true based on type", () => {
      expect(component.badgeStyles["go-badge--positive"]).toBeFalsy();

      component.badgeColor = "positive";
      component.ngOnChanges();
      expect(component.badgeStyles["go-badge--positive"]).toBe(true);
    });

    it("returns an object that set go-badge--negative to true based on type", () => {
      expect(component.badgeStyles["go-badge--negative"]).toBeFalsy();

      component.badgeColor = "negative";
      component.ngOnChanges();
      expect(component.badgeStyles["go-badge--negative"]).toBe(true);
    });

    it("returns an object that set go-badge--neutral to true based on type", () => {
      expect(component.badgeStyles["go-badge--neutral"]).toBeFalsy();

      component.badgeColor = "neutral";
      component.ngOnChanges();
      expect(component.badgeStyles["go-badge--neutral"]).toBe(true);
    });

    it("returns an object that set go-badge--dot to true based on type", () => {
      expect(component.badgeStyles["go-badge--dot"]).toBeFalsy();

      component.displayData = false;
      component.ngOnChanges();
      expect(component.badgeStyles["go-badge--dot"]).toBe(true);
    });
  });
});
