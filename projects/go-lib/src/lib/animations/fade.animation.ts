import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const timing = '.5s cubic-bezier(.25, .8, .25, 1)';

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
    animate(timing)
  ])
]);

export const fadeTemplateAnimation = trigger('fadeTemplate', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(timing, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(timing, style({
      opacity: 0
    }))
  ])
])