import { Component } from "@angular/core";
import { SubNavService } from "projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service";

@Component({
  selector: "app-pill-badge-docs",
  templateUrl: "./pill-badge-docs.component.html",
})
export class PillBadgeDocsComponent {
  componentBindings: string = `
  @Input() badgeData: string;
  @Input() type: string = 'info';
  `;

  iconBadgeInfo: string = `<go-pill-badge badgeData="12" type="info"></go-pill-badge>`;

  iconBadgeSuccess: string = `<go-pill-badge badgeData="success" type="success"></go-pill-badge>`;

  iconBadgeError: string = `<go-pill-badge badgeData="Error" type="error"></go-pill-badge>`;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Pill Badge';
    this.subNavService.linkToSource =
    "https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-pill-badge"
  }
}
