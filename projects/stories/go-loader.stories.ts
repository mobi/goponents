import {moduleMetadata, storiesOf} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { boolean, number, optionsKnob, select, text, withKnobs } from '@storybook/addon-knobs';

import { GoLoaderComponent } from '../go-lib/src/lib/components/go-loader/go-loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [GoLoaderComponent],
      imports: [BrowserAnimationsModule]
    }),
  )
  .add('Basics', () => ({
    template: `<go-loader [loaderSize]="loaderSize" [loaderType]="loaderType"></go-loader>`,
    props: {
      loaderSize: select('loaderSize', {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }, 'medium'),
      loaderType: select('loaderType', {
        negative: 'negative',
        neutral: 'neutral',
        positive: 'positive'
      }, 'neutral'),
    },
  }))
  .add('Show/Hide Animation', () => ({
    template: `<go-loader *ngIf="show"></go-loader>`,
    props: {
      show: select('show', {
        show: true,
        hide: false,
      }, true),
    },
  }))
  //
