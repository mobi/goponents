import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

const timing = '.5s cubic-bezier(.25, .8, .25, 1)';

export const toastAnimation = trigger('toastAnimation', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0
    }),
    animate(timing, style({
      height: '*',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(timing, style({
      paddingTop: 0,
      opacity: 0,
      height: 0
    }))
  ])
]);