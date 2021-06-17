import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoModalComponent } from './go-modal.component';
import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';

describe('GoModalComponent', () => {
  let component: GoModalComponent;
  let fixture: ComponentFixture<GoModalComponent>;
  let goModalHostFixture: ComponentFixture<GoTestModalHostComponent>;
  let goModalService: GoModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoModalComponent,
        GoTestModalHostComponent,
        GoModalDirective
      ],
      imports: [ GoIconButtonModule ],
      providers: [ GoModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoModalComponent);
    goModalHostFixture = TestBed.createComponent(GoTestModalHostComponent);

    component = fixture.componentInstance;
    component.goModalHost = goModalHostFixture.componentInstance.goModalHost;
    goModalService = TestBed.inject(GoModalService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('sets up a subscription to clear the view container if the off canvas is closed', () => {
      spyOn(component.goModalHost.viewContainerRef, 'clear');

      goModalService.openModal(GoTestModalHostComponent, { });

      expect(component.currentComponent).toBeDefined();

      goModalService.toggleModal(false);

      expect(component.goModalHost.viewContainerRef.clear).toHaveBeenCalled();
    });

    it('resets default options when off canvas is closed', () => {
      spyOn(goModalService, 'toggleModal').and.callThrough();

      goModalService.openModal(
        GoTestModalHostComponent,
        {},
        {
          closeWithBackdrop: true,
          modalTitle: 'Hogwarts',
          modalSize: 'xl',
          noContentPadding: true,
          showCloseIcon: false
        }
      );

      expect(component.closeWithBackdrop).toEqual(true);
      expect(component.modalTitle).toEqual('Hogwarts');
      expect(component.modalSize).toEqual('xl');
      expect(component.noContentPadding).toEqual(true);
      expect(component.showCloseIcon).toEqual(false);

      goModalService.toggleModal(false);

      expect(component.closeWithBackdrop).toBe(false);
      expect(component.modalTitle).toEqual('');
      expect(component.modalSize).toEqual('lg');
      expect(component.noContentPadding).toEqual(false);
      expect(component.showCloseIcon).toEqual(true);
    });
  });

  describe('loadComponent', () => {
    beforeEach(() => {
      // Variables reset to initial component state
      component.modalTitle = undefined;
      component.modalSize = component.defaultModalSize;
    });

    it('handles when no title and no modal size is set', () => {
      component.currentComponent = { component: GoTestModalHostComponent, bindings: { } };

      expect(component.modalTitle).toBeUndefined();
      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalTitle).toEqual('');
      expect(component.modalSize).toEqual(component.defaultModalSize);
    });

    it('handles when a title is set', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { },
        modalOptions: { modalTitle: 'Test Title' }
      };

      expect(component.modalTitle).toBeUndefined();

      component.loadComponent();

      expect(component.modalTitle).toEqual('Test Title');
    });

    /**
     * @deprecated test
     */
    it('handles when a title is set (deprecated)', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: {
          modalTitle: 'Test Title'
        }
      };

      expect(component.modalTitle).toBeUndefined();

      component.loadComponent();

      expect(component.modalTitle).toEqual('Test Title');
    });

    it('handles when a modal size is set to supported size', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { },
        modalOptions: { modalSize: 'xl' }
      };

      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalSize).toEqual('xl');
    });

    /**
     * @deprecated test
     */
    it('handles when a modal size is set to supported size (deprecated)', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: {
          modalSize: 'xl'
        }
      };

      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalSize).toEqual('xl');
    });

    it('sets closeWithBackdrop to false if not passed in', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { }
      };

      component.closeWithBackdrop = true;

      component.loadComponent();

      expect(component.closeWithBackdrop).toEqual(false);
    });

    it('sets closeWithBackdrop to true if passed in', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { },
        modalOptions: { closeWithBackdrop: true }
      };
      component.closeWithBackdrop = false;

      component.loadComponent();

      expect(component.closeWithBackdrop).toEqual(true);
    });

    /**
     * @deprecated test
     */
    it('sets closeWithBackdrop to true if passed in (deprecated)', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: {
          closeWithBackdrop: true
        }
      };
      component.closeWithBackdrop = false;

      component.loadComponent();

      expect(component.closeWithBackdrop).toEqual(true);
    });

    it('sets showCloseIcon to true if not passed in', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { }
      };

      component.showCloseIcon = false;

      component.loadComponent();

      expect(component.showCloseIcon).toEqual(true);
    });

    it('sets closeWithBackdrop to false if passed in', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: { },
        modalOptions: { showCloseIcon: false }
      };
      component.showCloseIcon = true;

      component.loadComponent();

      expect(component.showCloseIcon).toEqual(false);
    });

    /**
     * @deprecated test
     */
    it('sets closeWithBackdrop to false if passed in (deprecated)', () => {
      component.currentComponent = {
        component: GoTestModalHostComponent,
        bindings: {
          showCloseIcon: false
        }
      };
      component.showCloseIcon = true;

      component.loadComponent();

      expect(component.showCloseIcon).toEqual(false);
    });
  });

  describe('backdropClick', () => {
    beforeEach(() => {
      spyOn(component, 'closeModal');

      component.closeWithBackdrop = true;
      component.goModal = <any> {
        nativeElement: '<test-element></test-element>'
      };
    });

    it('handles when $event is null', () => {
      component.backdropClick(null);

      expect(component.closeModal).not.toHaveBeenCalled();
    });

    it('handles when $event has target different from base modal', () => {
      component.backdropClick(<any> { target: '<other-element></other-element>' });

      expect(component.closeModal).not.toHaveBeenCalled();
    });

    it('handles when $event has target equal to base modal', () => {
      component.backdropClick(<any> { target: component.goModal.nativeElement });

      expect(component.closeModal).toHaveBeenCalled();
    });

    it('does not close the modal if closeWithBackdrop is false', () => {
      component.closeWithBackdrop = false;
      component.backdropClick(<any> { target: component.goModal.nativeElement });

      expect(component.closeModal).not.toHaveBeenCalled();
    });
  });
});

@Component({
  selector: 'go-test',
  template: '<ng-template go-modal-host></ng-template>'
})
class GoTestModalHostComponent {
  @ViewChild(GoModalDirective, { static: true }) goModalHost: GoModalDirective;
}
