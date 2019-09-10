import {
  AnimationTriggerMetadata,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

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
          style({ opacity: 1 })
        ],
        { optional: true }
      )
    ])
  ]);
