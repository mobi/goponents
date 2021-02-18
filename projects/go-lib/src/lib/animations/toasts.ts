import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const toastAnimation: AnimationTriggerMetadata = trigger('toastAnimation', [
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
