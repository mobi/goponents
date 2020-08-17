import { Directive, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { GoPortalService } from './go-portal.service';

@Directive({
  selector: '[goPortalAttachTo]'
})
export class GoPortalAttachToDirective implements OnInit, OnDestroy {
  @Input('goPortalAttachTo') targetName: string;

  constructor(
    private portalService: GoPortalService,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.portalService.attachToTarget(this.targetName, this.template);
  }

  ngOnDestroy(): void {
    this.portalService.clearTarget(this.targetName);
  }
}
