import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIconButtonComponent } from './go-icon-button.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('GoButtonComponent', () => {
  let component: GoIconButtonComponent;
  let fixture: ComponentFixture<GoIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoIconButtonComponent
      ],
      imports: [
        GoIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    beforeEach(() => {
      component.iconClass = '';
    });

    it('adds a iconClass of small if the button size is small', () => {
      component.buttonSize = 'small';

      component.ngOnChanges();

      expect(component.iconClass).toEqual('go-icon--small');
    });

    it('adds a iconClass of medium if the button size is medium', () => {
      component.buttonSize = 'medium';

      component.ngOnChanges();

      expect(component.iconClass).toEqual('go-icon--medium');
    });

    it('adds a iconClass of large if the button size is large', () => {
      component.buttonSize = 'large';

      component.ngOnChanges();

      expect(component.iconClass).toEqual('go-icon--large');
    });
  });

  describe('clicked', () => {
    it('emits the handleClick event when button is clicked', () => {
      spyOn(component.handleClick, 'emit');
      spyOn(component, 'clicked').and.callThrough();

      const goIconButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goIconButtonTemplate.querySelector('button');

      buttonElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.clicked).toHaveBeenCalled();
      expect(component.handleClick.emit).toHaveBeenCalled();
    });
  });
});
