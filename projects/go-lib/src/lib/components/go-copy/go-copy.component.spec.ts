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
