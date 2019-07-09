import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { timing, easing } from './_configs';

export const fadeAnimation = trigger('fade', [
  state('in', style({
    opacity: 1,
    visibility: 'visible'
  })),
  state('out', style({
    opacity: 0,
    visibility: 'hidden'
  })),
  transition('in <=> out', [
    animate(timing + easing)
  ])
]);

export const fadeTemplateAnimation = trigger('fadeTemplate', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(timing + easing, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(timing + easing, style({
      opacity: 0
    }))
  ])
])