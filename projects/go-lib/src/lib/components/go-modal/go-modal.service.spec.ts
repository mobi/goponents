import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoInputModule } from '../go-input/go-input.module';
import { GoModalItem } from './go-modal.item';
import { GoModalService } from './go-modal.service';

describe('GoModalService', () => {
  let service: GoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoTestModalComponent],
      providers: [GoModalService]
    });

    service = TestBed.get(GoModalService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('openModal', () => {
    it('calls setComponent and toggleModal', () => {
      spyOn(service, 'setComponent');
      spyOn(service, 'toggleModal');

      service.openModal(GoTestModalComponent, { testingBinding: 'test'});

      expect(service.setComponent).toHaveBeenCalledWith(GoTestModalComponent, { testingBinding: 'test'});
      expect(service.toggleModal).toHaveBeenCalledWith(true);
    });
  });

  describe('setComponent', () => {
    it('emits the new component and its bindings from activeModalComponent', () => {
      service.activeModalComponent.subscribe((item: GoModalItem) => {
        expect({...item}).toEqual({ component: GoTestModalComponent, bindings: { testingBinding: 'test'} });
      });

      service.setComponent(GoTestModalComponent, { testingBinding: 'test'});
    });
  });

  describe('toggleModal', () => {
    it('emits true from modalOpen if called with true', () => {
      service.modalOpen.subscribe((open: boolean) => {
        expect(open).toEqual(true);
      });

      service.toggleModal(true);
    });

    it('emits false from modalOpen if called with false', () => {
      service.modalOpen.subscribe((open: boolean) => {
        expect(open).toEqual(false);
      });

      service.toggleModal(false);
    });
  });
});

@Component({
  selector: 'go-test',
  template: '<div>This is a test modal component</div>'
})
class GoTestModalComponent {}
