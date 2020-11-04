import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoButtonComponent } from './go-button.component';

describe('GoButtonComponent', () => {
  let component: GoButtonComponent;
  let fixture: ComponentFixture<GoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoButtonComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GoIconModule,
        GoLoaderModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicked()', () => {
    it('emits the handleClick event with the isProcessing boolean', () => {
      spyOn(component.handleClick, 'emit');
      spyOn(component, 'clicked').and.callThrough();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      buttonElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.clicked).toHaveBeenCalled();
      expect(component.handleClick.emit).toHaveBeenCalledWith(component.isProcessing);
    });
  });

  describe('classObject()', () => {
    beforeEach(() => {
      component.classObject = {};
    });

    it('returns an object that sets go-button--negative to true based on buttonVariant', () => {
      expect(component.classObject['go-button--negative']).toBeFalsy();

      component.buttonVariant = 'negative';
      component.ngOnChanges();
      expect(component.classObject['go-button--negative']).toBe(true);
    });

    it('returns an object that set go-button--neutral to true based on buttonVariant', () => {
      expect(component.classObject['go-button--neutral']).toBeFalsy();

      component.buttonVariant = 'neutral';
      component.ngOnChanges();
      expect(component.classObject['go-button--neutral']).toBe(true);
    });

    it('returns an object that set go-button--primary to true based on buttonVariant', () => {
      expect(component.classObject['go-button--primary']).toBeFalsy();

      component.buttonVariant = 'primary';
      component.ngOnChanges();
      expect(component.classObject['go-button--primary']).toBe(true);
    });

    it('returns an object that set go-button--secondary to true based on buttonVariant', () => {
      expect(component.classObject['go-button--secondary']).toBeFalsy();

      component.buttonVariant = 'secondary';
      component.ngOnChanges();
      expect(component.classObject['go-button--secondary']).toBe(true);
    });

    it('returns an object that set go-button--tertiary to true based on buttonVariant', () => {
      expect(component.classObject['go-button--tertiary']).toBeFalsy();

      component.buttonVariant = 'tertiary';
      component.ngOnChanges();
      expect(component.classObject['go-button--tertiary']).toBe(true);
    });

    it('returns an object that set other modifiers to true', () => {
      expect(component.classObject['go-button--dark']).toBeFalsy();
      expect(component.classObject['go-button--loading']).toBeFalsy();

      component.useDarkTheme = true;
      component.isProcessing = true;
      component.ngOnChanges();

      expect(component.classObject['go-button--dark']).toBe(true);
      expect(component.classObject['go-button--loading']).toBe(true);
    });
  });

  describe('the template', () => {
    it('does not include a <go-icon> by default', () => {
      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const iconComponent: HTMLElement = goButtonTemplate.querySelector('go-icon');

      expect(iconComponent).toBeNull();
    });

    it('does include a <go-icon> if buttonIcon is set', () => {
      component.buttonIcon = 'test';
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const iconComponent: HTMLElement = goButtonTemplate.querySelector('go-icon');

      expect(iconComponent).not.toBeNull();
    });

    it('disables the button if buttonDisabled is set to true', () => {
      component.buttonDisabled = true;
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.disabled).toBe(true);
    });

    it('disables the button if isProcessing is set to true', () => {
      component.isProcessing = true;
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.disabled).toBe(true);
    });

    it('sets button type to button by default', () => {
      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.type).toBe('button');
    });

    it('sets the button type if buttonType is passed in', () => {
      component.buttonType = 'submit';
      fixture.detectChanges();

      const goButtonTemplate: HTMLElement = fixture.nativeElement;
      const buttonElement: HTMLButtonElement = goButtonTemplate.querySelector('button');

      expect(buttonElement.type).toBe(component.buttonType);
    });
  });

  describe('isAlternativeDark', () => {
    it('returns true if useDarkTheme is true and buttonVariant is "secondary"', () => {
      component.buttonVariant = 'secondary';
      component.useDarkTheme = true;

      const result: boolean = component['isAlternativeDark']();

      expect(result).toBe(true);
    });

    it('returns true if useDarkTheme is true and buttonVariant is "tertiary"', () => {
      component.buttonVariant = 'tertiary';
      component.useDarkTheme = true;

      const result: boolean = component['isAlternativeDark']();

      expect(result).toBe(true);
    });
  });

  describe('isAlternativeLight', () => {
    it('returns true if useDarkTheme is false and buttonVariant is "secondary"', () => {
      component.buttonVariant = 'secondary';
      component.useDarkTheme = false;

      const result: boolean = component['isAlternativeLight']();

      expect(result).toBe(true);
    });

    it('returns true if useDarkTheme is false and buttonVariant is "tertiary"', () => {
      component.buttonVariant = 'tertiary';
      component.useDarkTheme = false;

      const result: boolean = component['isAlternativeLight']();

      expect(result).toBe(true);
    });
  });

  describe('isSplitButton', () => {
    it('returns true if splitButtonOptions are present and buttonVariant is primary or secondary', () => {
      component.splitButtonOptions = [{ action: (): void => {}, label: 'Option 1' }];
      component.buttonVariant = 'secondary';

      expect(component.isSplitButton()).toBe(true);
    });

    it('returns false if splitButtonOptions are not present', () => {
      component.splitButtonOptions = [];
      component.buttonVariant = 'secondary';

      expect(component.isSplitButton()).toBe(false);
    });

    it('returns false if buttonVariant is not primary or secondary', () => {
      component.splitButtonOptions = [];
      component.buttonVariant = 'tertiary';

      expect(component.isSplitButton()).toBe(false);
    });
  });

  describe('toggleSplitButtonMenu', () => {
    it('toggles showSplitButtonMenu', () => {
      expect(component.showSplitButtonMenu).toBe(false);

      component.toggleSplitButtonMenu();

      expect(component.showSplitButtonMenu).toBe(true);
    });
  });

  describe('splitButtonOptionSelected', () => {
    it('calls the option\'s action and closes the menu', () => {
      let testValue: string;
      const testFunction: Function = function (): void {
        testValue = 'Success!';
      };
      component.showSplitButtonMenu = true;
      component.splitButtonOptions = [
        { action: testFunction, label: 'Option 1' },
      ];

      component.splitButtonOptionSelected(
        component.splitButtonOptions[0].action
      );

      expect(testValue).toBe('Success!');
      expect(component.showSplitButtonMenu).toBe(false);
    });

    it('successfully passes arguments to the option\'s action', () => {
      let testValue: string;
      const testFunction: Function = function (
        arg1: string,
        arg2: string
      ): void {
        testValue = arg1 + arg2;
      };
      component.showSplitButtonMenu = true;
      component.splitButtonOptions = [
        {
          action: testFunction.bind(this, 'It is ', 'working!'),
          label: 'Option 1',
        },
      ];

      component.splitButtonOptionSelected(
        component.splitButtonOptions[0].action
      );

      expect(testValue).toBe('It is working!');
      expect(component.showSplitButtonMenu).toBe(false);
    });
  });
});
