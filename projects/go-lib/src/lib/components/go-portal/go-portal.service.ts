import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoPortalService {
  private targets: Map<string, ViewContainerRef>;

  constructor() {
    this.targets = new Map<string, ViewContainerRef>();
  }

  addTarget(targetName: string, viewContainer: ViewContainerRef): void {
    this.targets.set(targetName, viewContainer);
  }

  attachToTarget(targetName: string, template: TemplateRef<any>): void {
    const target: ViewContainerRef = this.getTarget(targetName);

    if (target) {
      target.createEmbeddedView(template);
    }
  }

  clearTarget(targetName: string): void {
    const target: ViewContainerRef = this.getTarget(targetName);

    if (target) {
      target.clear();
    }
  }

  private getTarget(targetName: string): ViewContainerRef | null {
    return this.targets.has(targetName) ? this.targets.get(targetName) : null;
  }

}
