import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { GoTabComponent } from './go-tab.component';
import { GoTabGroupComponent } from './go-tab-group.component';

@Component({
  selector: 'go-test',
  template: `
    <go-tab-group>
      <go-tab title="Test 1">
        This is some content for Test 1.
      </go-tab>
      <go-tab title="Test 2">
        This is a second thing.
      </go-tab>
    </go-tab-group>
  `
})
class GoTestTabGroupComponent {}

describe('GoTabGroupComponent', () => {
  let component: GoTabGroupComponent;
  let fixture: ComponentFixture<GoTestTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoTabComponent,
        GoTabGroupComponent,
        GoTestTabGroupComponent
      ],
      imports: [
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTestTabGroupComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should initialize with the active tab as 0 if there are tabs', () => {
      expect(component.activeTab).toBe(0);
      expect(component.tabArray[0].active).toBe(true);
      expect(component.tabArray[1].active).toBe(false);
    });
  });

  describe('activateTab', () => {
    beforeEach(() => {
      component.tabArray[0].active = true;
      component.tabArray[1].active = false;
      component.activeTab = 0;
    });

    it('should set activeTab to index param', () => {
      component.activateTab(1);

      expect(component.tabArray[0].active).toBe(false);
      expect(component.tabArray[1].active).toBe(true);
      expect(component.activeTab).toBe(1);
    });
  });
});
