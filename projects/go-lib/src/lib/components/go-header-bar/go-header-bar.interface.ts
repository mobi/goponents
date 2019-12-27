import {EventEmitter, TemplateRef} from '@angular/core';

export interface GoHeaderBarItem {
  templateRef: TemplateRef<any>;
  title: string;
  backButtonFn?: EventEmitter<any>;
  showBackArrow?: boolean;
}
