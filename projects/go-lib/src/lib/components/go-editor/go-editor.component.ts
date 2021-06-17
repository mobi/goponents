import {
  Component,
  ElementRef,
  EmbeddedViewRef,
  forwardRef,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { GoConfigService } from '../../go-config.service';
import { GoConfigInterface } from '../../go-config.model';

export const TINYMCE_SCRIPT_SRC: InjectionToken<string> = new InjectionToken<string>('TINYMCE_SCRIPT_SRC');

@Component({
  selector: 'go-editor',
  templateUrl: './go-editor.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GoEditorComponent),
    multi: true
  }]
})
export class GoEditorComponent extends EditorComponent implements OnInit, OnDestroy, OnChanges {

  @Input() formControl: FormControl;
  @Input() label: string;
  @Input() hints: string[] = [];
  @Input() plugins: string = 'autolink lists link paste';
  @Input() toolbar: string = 'undo redo | formatselect | bold | bullist numlist | removeformat';

  // @Input() theme: 'light' | 'dark' = 'light';
  theme: 'light' | 'dark' = 'light';

  @HostBinding('class.go-editor--light')
  public isLightEditor: boolean = true;

  @HostBinding('class.go-editor--dark')
  public isDarkEditor: boolean = false;

  @ViewChild('hintsTemplate', { read: TemplateRef, static: true }) hintsTemplate: TemplateRef<any>;
  @ViewChild('errorsTemplate', { read: TemplateRef, static: true }) errorsTemplate: TemplateRef<any>;

  private _goConfig: GoConfigInterface;
  private _goEditorElementRef: ElementRef;
  private _subscriptions: Subscription = new Subscription();
  private _viewContainerRef: ViewContainerRef;

  constructor(
    elementRef: ElementRef,
    ngZone: NgZone,
    viewContainerRef: ViewContainerRef,
    goConfigService: GoConfigService,
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject(TINYMCE_SCRIPT_SRC) tinymceScriptSrc?: string
  ) {
    super(elementRef, ngZone, platformId, tinymceScriptSrc);

    if (!this.theme) {
      this.theme = 'light';
    }

    this._goConfig = goConfigService.getConfig();
    this._goEditorElementRef = elementRef;
    this._viewContainerRef = viewContainerRef;
  }

  ngOnInit(): void {
    this.setupInit();

    this._subscriptions.add(this.ngZone.onMicrotaskEmpty.asObservable().pipe(take(1)).subscribe(() => {
      this.setupHints(this.hintsTemplate);
      this.setupHints(this.errorsTemplate);
    }));
  }

  ngOnChanges(): void {
    this.isLightEditor = this.theme === 'light';
    this.isDarkEditor = this.theme === 'dark';
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private setupInit(): void {
    const tinyDefaultInit: Record<string, any> = {
      block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
      content_css: `tangoe-${this.theme}`,
      convert_urls: false,
      height: 300,
      menubar: false,
      relative_urls: false,
      remove_script_host: false,
      skin: `tangoe-${this.theme}`,
      toolbar_mode: 'wrap'
    };

    if (this._goConfig.tinyMceConfig) {
      tinyDefaultInit.base_url = this._goConfig.tinyMceConfig.baseUrl ?? undefined;
      tinyDefaultInit.language = this._goConfig.tinyMceConfig.language ?? undefined;
      tinyDefaultInit.language_url = this._goConfig.tinyMceConfig.languageUrl ?? undefined;
    }

    this.init = this.init ? {
      ...tinyDefaultInit,
      ...this.init
    } : tinyDefaultInit;
  }

  private setupHints(hints: TemplateRef<any>): void {
    const embeddedViewRef: EmbeddedViewRef<any> = this._viewContainerRef.createEmbeddedView(hints);
    embeddedViewRef.detectChanges();

    for (const node of embeddedViewRef.rootNodes) {
      this._goEditorElementRef.nativeElement.appendChild(node);
    }
  }
}
