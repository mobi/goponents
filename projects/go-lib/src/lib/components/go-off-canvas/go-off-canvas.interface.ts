import { Type } from '@angular/core';
import { GoOffCanvasOptions } from './go-off-canvas-options';

export interface GoOffCanvasItem<T> {
  /**
   * The Angular Component to be rendered in the Off Canvas.
   */
  component: Type<T>;
  /**
   * The bindings for the Component being rendered.
   */
  bindings: Partial<T>;
  /**
   * @deprecated use offCanvasOptions instead
   */
  header?: string;
  /**
   * @deprecated use offCanvasOptions instead
   */
  size?: 'large' | 'small';
  /**
   * Various configuration options for this instance of the Off Canvas.
   */
  offCanvasOptions?: GoOffCanvasOptions;
}
