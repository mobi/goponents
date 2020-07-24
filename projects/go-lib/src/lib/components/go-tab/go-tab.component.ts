import { ChangeDetectorRef, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'go-tab',
  templateUrl: './go-tab.component.html'
})
export class GoTabComponent {
  private _active: boolean = false;
  loaded: boolean = false;

  @Input() heading: string;

  set active(active: boolean) {
    this._active = active;
    this.loaded = true;
  }
  get active(): boolean {
    return this._active;
  }

  @ContentChild('tabContent', { static: false }) tabContent: TemplateRef<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  detectChanges(): void {
    this.changeDetectorRef.detectChanges();
  }
}
