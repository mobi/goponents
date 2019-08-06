import {moduleMetadata, storiesOf} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, optionsKnob, select, text, withKnobs } from '@storybook/addon-knobs';

import { GoButtonComponent as Button } from './go-button.component';
import {GoIconModule} from '../go-icon/go-icon.module';
import markdownNotes from './go-button.docs.md';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [Button],
      imports: [
        GoIconModule
      ]
    }),
  )
  .add('Basics', () => ({
    template: `<go-button [buttonVariant]="buttonVariant">hello</go-button>`,
    props: {
      buttonVariant: select('buttonVariant', {
        default: '',
        negative: 'negative',
        neutral: 'neutral',
        positive: 'positive'
      }),
    },
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('Disabled', () => ({
    template: `<go-button [buttonDisabled]="true">hello</go-button>`,
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('Icon Button', () => ({
    template: `<go-button [buttonVariant]="buttonVariant" [buttonIcon]="buttonIcon">with an icon</go-button>`,
    props: {
      buttonVariant: select('buttonVariant', {
        default: '',
        negative: 'negative',
        neutral: 'neutral',
        positive: 'positive'
      }),
      buttonIcon: text('buttonIcon', 'home'),
    },
  }))

