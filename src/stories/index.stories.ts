import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/angular/demo';
import { GoButtonComponent as Button } from '../../projects/go-lib/src/lib/components/go-button/go-button.component';
import {GoIconModule} from '../../projects/go-lib/src/lib/components/go-icon/go-icon.module';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    // component: Button,
    moduleMetadata: {
      declarations: [Button],
      imports: [
        GoIconModule
      ]
    },
    template: `<go-button (handleClick)="alert('hello')">hello</go-button>`,
    props: {
      text: 'Hello Button',
      alert: (arg) => {
        console.log(arg)
      }
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
