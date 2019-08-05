import { configure } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!@tangoe/gosheets/gosheets.scss';
import '!style-loader!css-loader!material-design-icons/iconfont/material-icons.css';
import yourTheme from './yourTheme';
import {addParameters} from "@storybook/angular";

// addParameters({
//   options: {
//     theme: yourTheme,
//   },
// });

// automatically import all files ending in *.stories.ts
const req = require.context('../projects/go-lib/src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
