import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GoOffCanvasItem } from './go-off-canvas.interface';
import { GoOffCanvasService } from './go-off-canvas.service';

describe('GoOffCanvasService', () => {
  let service: GoOffCanvasService;
  const offCanvasItemMock: GoOffCanvasItem = {
    component: GoTestOffCanvasComponent,
    bindings: { testingBinding: 'test'}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoTestOffCanvasComponent],
      providers: [GoOffCanvasService]
    });

    service = TestBed.get(GoOffCanvasService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('openOffCanvas', () => {
    it('emits the new component and its bindings from activeOffCanvasComponent', () => {
      service.activeOffCanvasComponent.subscribe((item: GoOffCanvasItem) => {
        expect({...item}).toEqual(offCanvasItemMock);
      });

      service.openOffCanvas(offCanvasItemMock);
    });

    it('emits true from offCanvasOpen', () => {
      service.offCanvasOpen.subscribe((isOpen: boolean) => {
        expect(isOpen).toBe(true);
      });

      service.openOffCanvas(offCanvasItemMock);
    });
  });

  describe('closeOffCanvas', () => {
    it('emits false from offCanvasOpen', () => {
      service.offCanvasOpen.subscribe((isOpen: boolean) => {
        expect(isOpen).toBe(false);
      });

      service.closeOffCanvas();
    });
  });
});

@Component({
  selector: 'go-test',
  template: '<div>This is a test off-canvas component</div>'
})
class GoTestOffCanvasComponent {}
