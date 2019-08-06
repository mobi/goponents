import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';

import { GoIconComponent } from './go-icon.component';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [GoIconComponent],
    },
    template: `<go-icon [icon]="icon"></go-icon>`,
    props: {
      icon: text('icon', 'check'),
    },
  }))
  .add('with modifiers', () => ({
    moduleMetadata: {
      declarations: [GoIconComponent],
    },
    template: `<go-icon [iconModifier]="iconModifier" [icon]="icon"></go-icon>`,
    props: {
      icon: text('icon', 'info'),
      iconModifier: optionsKnob('iconModifier', {
        Light: 'light',
        Negative: 'negative',
        Neutral: 'neutral',
        Positive: 'positive',
      }, 'light', {
        display: 'inline-radio'
      })
    },
  }))
