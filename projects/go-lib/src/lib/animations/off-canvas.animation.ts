import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const offCanvasAnimation: AnimationTriggerMetadata = trigger('offCanvas', [
  state('slideIn', style({
    transform: 'translateX(-{{width}})'
  }), {params: {width: '300px'}}),
  state('slideOut', style({
    transform: 'translateX(0)',
    visibility: 'hidden'
  })),
  transition('slideIn <=> slideOut', [
    animate(timing + easing)
  ])
]);
