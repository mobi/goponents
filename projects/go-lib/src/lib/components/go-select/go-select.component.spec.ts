import { CommonModule } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { GoButtonModule } from "../go-button/go-button.module";
import { GoFormErrorsModule } from "../go-form-errors/go-form-errors.module";
import { GoHintModule } from "../go-hint/go-hint.module";
import { GoRequiredTextModule } from "../go-required-text/go-required-text.module";
import { GoSelectComponent } from "./go-select.component";
import { Subject } from "rxjs";
import { By } from "@angular/platform-browser";

describe("GoSelectComponent", () => {
  let component: GoSelectComponent;
  let fixture: ComponentFixture<GoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoSelectComponent],
      imports: [
        CommonModule,
        GoFormErrorsModule,
        GoButtonModule,
        GoHintModule,
        GoRequiredTextModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSelectComponent);
    component = fixture.componentInstance;
    component.control = new FormControl("Some Value");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onSelectAll()", () => {
    beforeEach(() => {
      component.multiple = true;
    });

    it("adds all of the available items to the form control value", () => {
      component.bindValue = undefined;
      component.items = [
        { value: 1, label: "Label 1" },
        { value: 2, label: "Label 2" },
        { value: 3, label: "Label 3" },
      ];

      component.onSelectAll();

      expect(component.control.value).toEqual(component.items);
    });

    it("uses bindValue to get value if bindValue exists", () => {
      component.bindValue = "id";
      component.items = [
        { id: 1, label: "Label 1" },
        { id: 2, label: "Label 2" },
        { id: 3, label: "Label 3" },
      ];

      component.onSelectAll();

      expect(component.control.value).toEqual([1, 2, 3]);
    });

    it("should select only filtered list, when filtered and selectAll", () => {
      component.bindValue = "id";
      component.items = [
        { id: 1, label: "banana" },
        { id: 2, label: "apple" },
        { id: 3, label: "green apple" },
      ];
      const filteredItems: any[] = [
        { id: 2, label: "apple" },
        { id: 3, label: "green apple" },
      ];
      component.ngSelect.searchTerm = "apple";
      component.handleInput({ items: filteredItems, term: "apple" });
      component.onSelectAll();
      expect(component.control.value).toEqual([2, 3]);
    });

    it("should select filtered list with existing items in control value, when filtered and selectAll", () => {
      component.bindValue = "id";
      component.control.patchValue([4]);
      component.items = [
        { id: 1, label: "banana" },
        { id: 2, label: "apple" },
        { id: 3, label: "green apple" },
        { id: 4, label: "grapes" },
      ];
      const filteredItems: any[] = [
        { id: 2, label: "apple" },
        { id: 3, label: "green apple" },
      ];
      component.ngSelect.searchTerm = "apple";
      component.handleInput({ items: filteredItems, term: "apple" });
      component.onSelectAll();
      expect(component.control.value.length).toEqual(3);
    });
  });

  describe("onSelectAll() with typeahead", () => {
    beforeEach(() => {
      component.typeahead = new Subject();
      component.multiple = true;
    });

    it("should store items in previousSelectedItems", () => {
      const initialItems: any[] = [
        { id: 1, label: "banana" },
        { id: 2, label: "apple" },
      ];
      component.items = initialItems;
      component["handleTypeAheadSelectAll"]();
      expect(component["previousSelectedItems"]).toEqual(initialItems);
    });

    it("should add items in previousSelectedItems", () => {
      component.handleItemAdd({ id: 1, label: "banana" });
      expect(component["previousSelectedItems"]).toEqual([
        { id: 1, label: "banana" },
      ]);
    });

    it("should remove items from previousSelectedItems", () => {
      component["previousSelectedItems"] = [{ id: 1, label: "banana" }];
      component.handleItemRemove({ value: { id: 1, label: "banana" } });
      expect(component["previousSelectedItems"]).toEqual([]);
    });

    it("handleControlInitialValue(), should assign previousSelectedItems", () => {
      component.control.patchValue([1]);
      component.bindValue = "id";
      component.items = [
        { id: 1, label: "banana" },
        { id: 2, label: "apple" },
      ];
      component["handleControlInitialValue"]();
      expect(component["previousSelectedItems"]).toEqual([
        { id: 1, label: "banana" },
      ]);
    });
  });

  describe("processSelectAll", () => {
    it("process select all and patch value in form", () => {
      component.bindValue = "id";
      const items: any[] = [
        { id: 1, label: "banana" },
        { id: 2, label: "apple" },
        { id: 3, label: "green apple" },
        { id: 4, label: "grapes" },
      ];

      component["processSelectAll"](items);

      expect(component.control.value).toEqual([1, 2, 3, 4]);
    });
  });

  describe("onRemoveAll", () => {
    it("uses removed the selected values", () => {
      component.bindValue = "id";
      spyOn<any>(component, "resetTypeAheadItems");
      component.items = [
        { id: 1, label: "Label 1" },
        { id: 2, label: "Label 2" },
        { id: 3, label: "Label 3" },
      ];

      component.onSelectAll();

      component.onRemoveAll();

      expect(component.control.value).toBeNull();
      expect(component["resetTypeAheadItems"]).toHaveBeenCalled();
    });
  });
  it("component should not render go-form-errors if hideFieldError property is true ", () => {
    component.hideFieldError = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(0);
  });
  it("component should render go-form-errors if hideFieldError property is false ", () => {
    component.hideFieldError = false;
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(1);
  });
  it("component should render go-form-errors if hideFieldError is not set ", () => {
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css("go-form-errors"))?.length
    ).toBe(1);
  });
});
