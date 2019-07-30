import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const offCanvasAnimation = trigger('offCanvas', [
  state('slideIn', style({
    transform: 'translateX(-300px)'
  })),
  state('slideOut', style({
    transform: 'translateX(0)',
    visibility: 'hidden'
  })),
  transition('slideIn <=> slideOut', [
    animate('.5s cubic-bezier(.25, .8, .25, 1)')
  ])
]);
