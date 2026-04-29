import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { GoPortalService } from './go-portal.service';

@Directive({
    selector: '[goPortalTarget]',
    standalone: false
})
export class GoPortalTargetDirective implements OnInit {
  @Input('goPortalTarget') targetName: string;

  constructor(
    private portalService: GoPortalService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.portalService.addTarget(this.targetName, this.viewContainer);
  }
}
