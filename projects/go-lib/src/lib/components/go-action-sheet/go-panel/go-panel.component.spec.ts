import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { GoPanelComponent } from './go-panel.component';
import { GoActionSheetComponent } from '../go-action-sheet.component';

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
    describe('if readonly and disablePanel are false', () => {
      beforeEach(() => {
        component.readonly = false;
        component.disablePanel = false;
      });

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

    describe('if readonly is true', () => {
      beforeEach(() => {
        component.readonly = true;
      });

      it('should not emit an event', () => {
        spyOn(component.action, 'emit').and.callThrough();

        component.handleAction();

        expect(component.action.emit).not.toHaveBeenCalled();
      });
    });

    describe('if disabled is true', () => {
      beforeEach(() => {
        component.disablePanel = true;
      });

      it('should not emit an event', () => {
        spyOn(component.action, 'emit').and.callThrough();

        component.handleAction();

        expect(component.action.emit).not.toHaveBeenCalled();
      });
    });
  });

  describe('panelClicked', () => {
    it('should set parent action sheet\'s showContent to false if closeOnClick is true', () => {
      parentComponent.showContent = true;
      component.closeOnClick = true;

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
