import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Component, ViewChild } from '@angular/core';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoModalComponent } from './go-modal.component';
import { GoModalDirective } from './go-modal.directive';
import { GoModalItem } from './go-modal.item';
import { GoModalService } from './go-modal.service';

describe('GoModalComponent', () => {
  let component: GoModalComponent;
  let fixture: ComponentFixture<GoModalComponent>;
  let goModalHostFixture: ComponentFixture<GoTestModalHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoModalComponent,
        GoTestModalHostComponent,
        GoModalDirective
      ],
      imports: [ GoIconModule ],
      providers: [ GoModalService ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ GoTestModalHostComponent ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoModalComponent);
    goModalHostFixture = TestBed.createComponent(GoTestModalHostComponent);

    component = fixture.componentInstance;
    component.goModalHost = goModalHostFixture.componentInstance.goModalHost;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadComponent', () => {
    beforeEach(() => {
      spyOn(component.goModalHost.viewContainerRef, 'clear');

      // Variables reset to initial component state
      component.modalTitle = undefined;
      component.modalSize = component.defaultModalSize;
    });

    afterEach(() => {
      expect(component.goModalHost.viewContainerRef.clear).toHaveBeenCalled();
    });

    it('handles when no title and no modal size is set', () => {
      component.currentComponent = new GoModalItem(GoTestModalHostComponent, {});

      expect(component.modalTitle).toBeUndefined();
      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalTitle).toEqual('');
      expect(component.modalSize).toEqual(component.defaultModalSize);
    });

    it('handles when a title is set', () => {
      component.currentComponent = new GoModalItem(GoTestModalHostComponent, { modalTitle: 'Test Title' });

      expect(component.modalTitle).toBeUndefined();

      component.loadComponent();

      expect(component.modalTitle).toEqual('Test Title');
    });

    it('handles when a modal size is set to supported size', () => {
      component.currentComponent = new GoModalItem(GoTestModalHostComponent, { modalSize: 'xl' });

      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalSize).toEqual('xl');
    });

    it('handles when a modal size is set to unsupported size', () => {
      component.currentComponent = new GoModalItem(GoTestModalHostComponent, { modalSize: 'abc' });

      expect(component.modalSize).toEqual(component.defaultModalSize);

      component.loadComponent();

      expect(component.modalSize).toEqual(component.defaultModalSize);
    });
  });

  describe('backdropClick', () => {
    beforeEach(() => {
      spyOn(component, 'closeModal');

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
  });
});

@Component({
  selector: 'go-test',
  template: '<ng-template go-modal-host></ng-template>'
})
class GoTestModalHostComponent {
  @ViewChild(GoModalDirective) goModalHost: GoModalDirective;
}
