import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoCopyComponent } from './go-copy.component';

describe('goCopyComponent', () => {
  let component: GoCopyComponent;
  let fixture: ComponentFixture<GoCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCopyComponent ],
      imports: [
        BrowserAnimationsModule,
        GoIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('copyStringToClipboard()', () => {
    it('selects the text in the text area', () => {
      spyOn(component.copyText.nativeElement, 'select').and.callThrough();

      component.text = 'Ohhhhh Snappppp!';
      fixture.detectChanges();
      component.copyStringToClipboard();

      const start: number = component.copyText.nativeElement.selectionStart;
      const end: number = component.copyText.nativeElement.selectionEnd;
      const selectedText: string = component.copyText.nativeElement.value.substring(start, end);

      expect(selectedText).toBe(component.text);
    });

    it('executes the copy command', () => {
      spyOn(document, 'execCommand');

      component.text = 'Ohhhhh Snappppp!';
      fixture.detectChanges();
      component.copyStringToClipboard();

      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });

    it('sets the icon to a check mark for 1.5 seconds', fakeAsync(() => {
      expect(component.icon).toBe('content_copy');

      component.copyStringToClipboard();
      expect(component.icon).toBe('check');

      tick(1499);
      expect(component.icon).toBe('check');

      tick(1501);
      expect(component.icon).toBe('content_copy');
    }));
  });

  describe('template', () => {
    it('child element should contain the text to be copied', () => {
      component.text = 'test';
      fixture.detectChanges();

      const goCopyFixture: HTMLElement = fixture.nativeElement;
      const copyElement: HTMLElement = goCopyFixture.querySelector('span');

      // expectations for copyStringToClipboard method
      expect(copyElement.children[1].innerHTML).toEqual('test');
    });
  });
});
