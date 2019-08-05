import {moduleMetadata, storiesOf} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/angular/demo';
import { GoButtonComponent as Button } from './go-button.component';
import {GoIconModule} from '../go-icon/go-icon.module';
import { GoIconComponent } from '../go-icon/go-icon.component';
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
  .add('default', () => ({
    template: `<go-button [buttonVariant]="buttonVariant">hello</go-button>`,
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('positive', () => ({
    template: `<go-button [buttonVariant]="buttonVariant">hello</go-button>`,
    props: {
      buttonVariant: text('buttonVariant', 'positive')
    },
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('negative', () => ({
    template: `<go-button [buttonVariant]="buttonVariant">hello</go-button>`,
    props: {
      buttonVariant: text('buttonVariant', 'negative')
    },
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('neutral', () => ({
    template: `<go-button [buttonVariant]="buttonVariant">hello</go-button>`,
    props: {
      buttonVariant: text('buttonVariant', 'neutral')
    },
  }),{
    notes: { markdown: markdownNotes },
  })
  .add('disabled', () => ({
    template: `<go-button [buttonDisabled]="true">hello</go-button>`,
    props: {
      buttonVariant: text('buttonVariant', 'positive')
    },
  }))
  .add('with icon', () => ({
    template: `<go-button [buttonIcon]="buttonIcon">with an icon</go-button>`,
    props: {
      buttonIcon: text('buttonIcon', 'home')
    },
  }))

