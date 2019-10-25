import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const detailButtonAnim: AnimationTriggerMetadata = trigger('detailButtonAnim', [
  state('open', style({
    transform: 'rotate(90deg)'
  })),
  state('close', style({
    transform: 'rotate(0)'
  })),
  transition('open <=> close', [
    animate(timing + easing)
  ])
]);

export const detailsAnimation: AnimationTriggerMetadata = trigger('detailsAnimation', [
  state('open', style({
    display: 'table-row'
  })),
  state('close', style({
    display: 'none'
  })),
  transition('open <=> close', [
    animate('.125s ' + easing)
  ])
]);
