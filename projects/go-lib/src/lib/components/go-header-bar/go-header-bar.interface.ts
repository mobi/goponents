import { TemplateRef } from '@angular/core';

export interface GoHeaderBarItem {
  templateRef: TemplateRef<any>;
  title: string;
  goBack?: Function;
  showBackArrow?: boolean;
}
