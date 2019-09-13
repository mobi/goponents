import {
  animate,
  AnimationTriggerMetadata,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const routerAnimation: AnimationTriggerMetadata  =
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
          style({ opacity: 1 }),
          animate(timing + easing, style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate(timing + easing, style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);
