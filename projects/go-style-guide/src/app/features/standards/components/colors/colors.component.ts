import { Component } from '@angular/core';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  pageTitle: string = 'Colors';

  baseColors: string = `
  $base-primary: #65B360;
  $base-light: #FFFFFF;
  // $base-light-secondary: #B1B1B1;
  $base-light-secondary: #ADB5BD;
  $base-dark: #313536;
  $base-dark-secondary: #202626;
  `;

  lightTheme: string = `
  // Use as the app background
  $theme-light-app-bg: #F0F0F0;
  // Used as the base background for all components
  $theme-light-bg: $base-light;
  // Used when the background needs an active state
  $theme-light-bg-hover: darken($base-light, 3.5%);
  // Used when the background needs a hover state
  $theme-light-bg-active: darken($base-light, 7%);
  // Used for the font color
  $theme-light-color: $base-dark;
  // Used when the font color needs a hover state
  $theme-light-color-hover: lighten($base-dark, 20%);
  // Used to apply a border to an element
  $theme-light-border: $base-light-secondary;
  `;

  earthGreen: string = `
  // Use this to apply the positive (success) state color
  $ui-color-positive: #1D8915;

  // Used when the ui color needs a hover state
  $ui-color-positive-hover: darken($ui-color-positive, 3.5%);

  // Used when the ui color needs an active state
  $ui-color-positive-active: darken($ui-color-positive, 7%);

  // Use this to apply the brand color as a gradient.
  // Should only be used as a small accent
  $ui-color-positive-gradient: linear-gradient(to bottom, $ui-color-positive, $ui-color-positive-hover);
  `;

  galaxyBlue: string = `
  // Use this to apply the positive (success) state color
  $ui-color-positive: #4EDED2;

  // Used when the ui color needs a hover state
  $ui-color-positive-hover: darken($ui-color-primary, 3.5%);

  // Used when the ui color needs an active state
  $ui-color-positive-active: darken($ui-color-primary, 7%);

  // Use this to apply the brand color as a gradient.
  // Should only be used as a small accent
  $ui-color-positive-gradient: linear-gradient(to bottom, $ui-color-positive, $ui-color-positive-hover);
  `;

  horizonRed: string = `
  // Use this to apply the negative (error) state color
  // $ui-color-negative: #DB3939;
  $ui-color-negative: #DC3545;

  // Used when the ui color needs a hover state
  $ui-color-negative-hover: darken($ui-color-negative, 3.5%);

  // Used when the ui color needs an active state
  $ui-color-negative-active: darken($ui-color-negative, 7%);

  // Use this to apply the brand color as a gradient.
  // Should only be used as a small accent
  $ui-color-negative-gradient: linear-gradient(to bottom, $ui-color-negative, $ui-color-negative-hover);
  `;

  nebulaPurple: string = `
  // Use this to apply the neutral (info) state color
  $ui-color-neutral: #7F47CC;

  // Used when the ui color needs a hover state
  $ui-color-neutral-hover: darken($ui-color-neutral, 3.5%);
\
  // Used when the ui color needs an active state
  $ui-color-neutral-active: darken($ui-color-neutral, 7%);

  // Use this to apply the brand color as a gradient.
  // Should only be used as a small accent
  $ui-color-neutral-gradient: linear-gradient(to bottom, $ui-color-neutral, $ui-color-neutral-hover);
  `;
}
