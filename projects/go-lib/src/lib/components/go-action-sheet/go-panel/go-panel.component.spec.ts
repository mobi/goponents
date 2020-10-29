import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPanelComponent } from './go-panel.component';
import { GoActionSheetComponent } from '../go-action-sheet.component';
import { ElementRef } from '@angular/core';

class MockGoActionSheetComponent extends GoActionSheetComponent {
  showContent: boolean = false;
}

describe('GoPanelComponent', () => {
  let component: GoPanelComponent;
  let fixture: ComponentFixture<GoPanelComponent>;
  let parentComponent: GoActionSheetComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPanelComponent ],
      providers: [
        { provide: ElementRef, useValue: new ElementRef(MockGoActionSheetComponent) },
        { provide: GoActionSheetComponent, useClass: MockGoActionSheetComponent }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPanelComponent);
    component = fixture.componentInstance;
    parentComponent = fixture.debugElement.injector.get(GoActionSheetComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleAction', () => {
    it('should emit an event', () => {
      spyOn(component.action, 'emit').and.callThrough();

      component.handleAction();

      expect(component.action.emit).toHaveBeenCalled();
    });

    it('should call panelClicked', () => {
      spyOn(component, 'panelClicked');

      component.handleAction();

      expect(component.panelClicked).toHaveBeenCalled();
    });
  });

  describe('panelClicked', () => {
    it('should set parent action sheet\'s showContent to false if closeOnClick is true', () => {
      parentComponent.showContent = true;

      component.panelClicked();

      expect(parentComponent.showContent).toBeFalsy();
    });

    it('should not set parent action sheet\'s showContent to false if closeOnClick is false', () => {
      parentComponent.showContent = true;
      component.closeOnClick = false;

      component.panelClicked();

      expect(parentComponent.showContent).toBe(true);
    });
  });
});
