import {
  animate,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

import { easing, timing } from './_configs';

export const routerAnimation =
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
          animate(timing + easing, style({ opacity: 0, transform: 'scale(0.95)' }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0, transform: 'scale(0.95)' }),
          animate(timing + easing, style({ opacity: 1, transform: 'scale(1)' }))
        ],
        { optional: true }
      )
    ])
  ]);
