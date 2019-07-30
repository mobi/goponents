import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const searchLoaderAnim = trigger('searchLoaderAnim', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0,
      padding: 0
    }),
    animate(timing + ' ' + easing, style({
      height: '*',
      opacity: 1,
      padding: '2rem'
    }))
  ]),
  transition(':leave', [
    style({
      padding: '2rem'
    }),
    animate(timing + ' ' + easing, style({
      height: 0,
      opacity: 0,
      padding: 0
    }))
  ])
]);

export const searchResultsAnim = trigger('searchResultsAnim', [
  transition(':enter', [
    style({
      height: 0,
      margin: 0,
      opacity: 0
    }),
    animate(timing + ' .25s ' + easing, style({
      height: '*',
      margin: '1rem 0 0.5rem 0',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      overflowY: 'hidden',
      margin: '1rem 0 0.5rem 0'
    }),
    animate(timing + ' ' + easing, style({
      height: 0,
      margin: 0,
      opacity: 0
    }))
  ])
]);
