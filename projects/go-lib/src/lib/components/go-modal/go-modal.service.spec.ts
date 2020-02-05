import { TestBed } from '@angular/core/testing';
import { GoModalService } from './go-modal.service';
import { BasicTestComponent } from 'projects/go-style-guide/src/app/features/ui-kit/components/basic-test/basic-test.component';
import { GoInputModule } from '../go-input/go-input.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoModalItem } from './go-modal.item';


describe('GoModalService', () => {
  let service: GoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GoButtonModule,
        GoInputModule
      ],
      declarations: [
        BasicTestComponent
      ],
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

      service.openModal(BasicTestComponent, { testingBinding: 'test'});

      expect(service.setComponent).toHaveBeenCalledWith(BasicTestComponent, { testingBinding: 'test'});
      expect(service.toggleModal).toHaveBeenCalledWith(true);
    });
  });

  describe('setComponent', () => {
    it('emits the new component and its bindings from activeModalComponent', () => {
      service.activeModalComponent.subscribe((item: GoModalItem) => {
        expect({...item}).toEqual({ component: BasicTestComponent, bindings: { testingBinding: 'test'} });
      });

      service.setComponent(BasicTestComponent, { testingBinding: 'test'});
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
