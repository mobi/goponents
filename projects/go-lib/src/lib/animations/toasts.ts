import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

import { timing, easing } from './_configs';

export const toastAnimation = trigger('toastAnimation', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0
    }),
    animate(timing + easing, style({
      height: '*',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(timing + easing, style({
      paddingTop: 0,
      opacity: 0,
      height: 0
    }))
  ])
]);