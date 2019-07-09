import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { timing, easing } from './_configs';

export const offCanvasAnimation = trigger('offCanvas', [
  state('slideIn', style({
    transform: 'translateX(-300px)'
  })),
  state('slideOut', style({
    transform: 'translateX(0)',
    visibility: 'hidden'
  })),
  transition('slideIn <=> slideOut', [
    animate(timing + easing)
  ])
]);
