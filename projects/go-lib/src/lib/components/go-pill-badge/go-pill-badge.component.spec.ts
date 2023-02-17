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
});