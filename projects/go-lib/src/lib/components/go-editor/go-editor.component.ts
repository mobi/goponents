import { Component, ElementRef, Inject, InjectionToken, Injector, Input, NgZone, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

export const TINYMCE_SCRIPT_SRC: InjectionToken<string> = new InjectionToken<string>('TINYMCE_SCRIPT_SRC');

@Component({
  selector: 'go-editor',
  template: '<ng-template></ng-template>'
})
export class GoEditorComponent extends EditorComponent implements OnInit {

  // @Input() base_url: string = '/ng-dist/assets/tinymce';
  // @Input() language: string;
  // @Input() language_url: string;

  // @Input() control: FormControl;
  @Input() plugins: string = 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount';
  @Input() theme: 'tangoe-light' | 'tangoe-dark' = 'tangoe-light';
  @Input() toolbar: string = 'undo redo | formatselect | bold | bullist numlist | removeformat';

  constructor(
    elementRef: ElementRef,
    ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject(TINYMCE_SCRIPT_SRC) tinymceScriptSrc?: string
  ) {
    super(elementRef, ngZone, platformId, tinymceScriptSrc);


    const tinyMceDefaultInit: Record<string, any> = {
      base_url: '/assets/tinymce',
      block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
      content_css: this.theme,
      convert_urls: false,
      height: 400,
      menubar: false,
      relative_urls: false,
      remove_script_host: false,
      toolbar_mode: 'wrap'
    };

    this.init = this.init ? {
      ...tinyMceDefaultInit,
      ...this.init
    } : tinyMceDefaultInit;
  }

  ngOnInit(): void {
  }

}
