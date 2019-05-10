import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

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
    animate('.5s cubic-bezier(.25, .8, .25, 1)')
  ])
]);
