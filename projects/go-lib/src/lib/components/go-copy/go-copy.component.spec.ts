import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCopyComponent } from './go-copy.component';
import { GoIconModule } from '../go-icon/go-icon.module';

describe('goCopyComponent', () => {
  let component: GoCopyComponent;
  let fixture: ComponentFixture<GoCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCopyComponent ],
      imports: [ GoIconModule ]
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
  });

  describe('template', () => {
    it('child element should contain the text to be copied', () => {
      component.text = 'test';
      fixture.detectChanges();

      const goCopyFixture: HTMLElement = fixture.nativeElement;
      const copyElement: HTMLElement = goCopyFixture.querySelector('div');

      // expectations for copyStringToClipboard method
      expect(copyElement.children[1].innerHTML).toEqual('test');
    });
  });
});
