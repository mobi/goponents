import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPillComponent } from './go-pill.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('GoPillComponent', () => {
  let component: GoPillComponent;
  let fixture: ComponentFixture<GoPillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoPillComponent, GoIconModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {
    it('should be called when the go-icon is clicked', () => {
      spyOn(component, 'onClick').and.callThrough();

      const goPillElement: HTMLElement = fixture.nativeElement;
      const goIconElement: HTMLElement = goPillElement.querySelector('go-icon');

      goIconElement.dispatchEvent(new Event('click'));

      expect(component.onClick).toHaveBeenCalled();
    });

    it('should emit the removed event', () => {
      spyOn(component.removed, 'emit').and.callThrough();

      component.onClick();

      expect(component.removed.emit).toHaveBeenCalled();
    });
  });

  describe('removable', () => {
    it('should not render the remove go-icon if removable is false', () => {
      fixture.componentRef.setInput('removable', false);

      fixture.detectChanges();

      const goPillElement: HTMLElement = fixture.nativeElement;
      const goIconElement: HTMLElement = goPillElement.querySelector('go-icon');

      expect(goIconElement).toBeNull();
    });

    it('should render the remove go-icon if removable is true', () => {
      fixture.componentRef.setInput('removable', true);

      fixture.detectChanges();

      const goPillElement: HTMLElement = fixture.nativeElement;
      const goIconElement: HTMLElement = goPillElement.querySelector('go-icon');

      expect(goIconElement).not.toBeNull();
    });
  });

});
