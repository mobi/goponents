import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GoOffCanvasItem } from './go-off-canvas.interface';
import { GoOffCanvasService } from './go-off-canvas.service';

@Component({
  standalone: false,
  selector: 'go-test',
  template: '<div>This is a test off-canvas component</div>'
})
class GoTestOffCanvasComponent {}

describe('GoOffCanvasService', () => {
  let service: GoOffCanvasService;
  const offCanvasItemMock: GoOffCanvasItem<GoTestOffCanvasComponent> = {
    component: GoTestOffCanvasComponent,
    bindings: { testingBinding: 'test'}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoTestOffCanvasComponent],
      providers: [GoOffCanvasService]
    });

    service = TestBed.inject(GoOffCanvasService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('openOffCanvas', () => {
    it('emits the new component and its bindings from activeOffCanvasComponent', () => {
      service.activeOffCanvasComponent.subscribe((item: GoOffCanvasItem<GoTestOffCanvasComponent>) => {
        expect({...item}).toEqual(offCanvasItemMock);
      });

      service.openOffCanvas(offCanvasItemMock);
    });

    it('emits true from offCanvasOpen', () => {
      const emissions: boolean[] = [];
      service.offCanvasOpen.subscribe((isOpen: boolean) => {
        emissions.push(isOpen);
      });

      service.openOffCanvas(offCanvasItemMock);

      expect(emissions[emissions.length - 1]).toBe(true);
    });
  });

  describe('closeOffCanvas', () => {
    it('emits false from offCanvasOpen', () => {
      const emissions: boolean[] = [];
      service.offCanvasOpen.subscribe((isOpen: boolean) => {
        emissions.push(isOpen);
      });

      service.openOffCanvas(offCanvasItemMock);

      service.closeOffCanvas();

      expect(emissions[emissions.length - 1]).toBe(false);
    });
  });
});

