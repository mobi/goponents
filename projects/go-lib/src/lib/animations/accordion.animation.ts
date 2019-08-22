import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { easing, timing } from './_configs';

export const accordionAnimation: AnimationTriggerMetadata = trigger('accordionAnimation', [
  state('open', style({
    height: '*',
    visibility: 'visible'
  })),
  state('close', style({
    height: 0,
    visibility: 'hidden'
  })),
  transition('open <=> close', [
    animate(timing + easing)
  ])
]);
