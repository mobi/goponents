import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const tableRowBorderAnim: AnimationTriggerMetadata  = trigger('tableRowBorderAnim', [
  state('open', style({
    'border-bottom-color': 'rgba(248, 249, 250, 0)'
  })),
  state('close', style({
    'border-bottom-color': 'rgba(248, 249, 250, 1)'
  })),
  transition('open <=> close', [
    animate(timing + easing)
  ])
]);
