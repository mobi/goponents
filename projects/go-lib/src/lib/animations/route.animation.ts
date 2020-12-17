import {
  animate,
  AnimationTriggerMetadata,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

const enterDelay: string = '.1s ';

export const routerAnimation: AnimationTriggerMetadata =
  trigger('routerAnimation', [
    transition('* <=> *', [
      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),
      query(':leave',
        [
          style({
            display: 'none',
            opacity: 0
          }),
        ],
        { optional: true }
      ),
      query(':enter',
        [
          style({ opacity: 0 }),
          animate(timing + enterDelay + easing, style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);
