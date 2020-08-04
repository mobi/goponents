import { Type } from '@angular/core';

export interface GoOffCanvasItem {
  component: Type<{}>;
  bindings: {};
  header?: string;
  size: 'large' | 'small';
}
