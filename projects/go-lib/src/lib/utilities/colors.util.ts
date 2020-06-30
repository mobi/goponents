/**
 * Represents an RGB color value
 */
export interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Use this method to check the contrast ratio between a foreground and background color combination
 * @param backgroundHex the hexidecimal code for the background color
 * @param foregroundHex the hexidecimal code for the foreground color
 */
export function contrastIsAccessible(backgroundHex: string, foregroundHex: string): boolean {
  return calculateContrast(
    hexToRgb(backgroundHex),
    hexToRgb(foregroundHex)
  ) > 4.5;
}

/**
 * Use to change the shade of a color (similar to lighten/darken in SASS)
 * @param hex the base hexidecimal code to change (6 digits)
 * @param percent the percentage to change, valid values are between -100 and 100
 */
export function shadeHex(hex: string, percent: number): string {
  return rgbToHex(shadeRGB(hexToRgb(hex), percent));
}

/**
 * Use to scale the shade of an rgb color by a certain percentage
 * @param rgb RGB interface base value
 * @param percent the percentage to change, valid values are between -100 and 100
 */
export function shadeRGB(rgb: RGB, percent: number): RGB {
  ['r', 'g', 'b'].forEach((hue: string) => {
    const newValue: number = rgb[hue] * (100 + percent) / 100;
    rgb[hue] = newValue < 255 ? Math.round(newValue) : 255;
  });

  return rgb;
}

/**
 * Use to change an RGB interface to a hexidecimal string
 * @param rgb RGB interface to convert
 */
export function rgbToHex(rgb: RGB): string {
  let hex: string = '#';

  ['r', 'g', 'b'].forEach((hue: string) => {
    const hueString: string = rgb[hue].toString(16);
    hex += hueString.length === 1 ? `0${hueString}` : hueString;
  });

  return hex;
}

/**
 * Use to convert a hexidecimal string to an RGB interface
 * @param hex hexidecimal string to convert
 */
export function hexToRgb(hex: string): RGB {
  const result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  } else {
    throw new Error(`

    GoConfigService: Unable to convert hex to RGB, invalid hex code.

    hex: ${hex}
    `);
  }
}

/**
 * Use to calculate luminance of an RGB color
 * @param r R value of RGB
 * @param g G value of RGB
 * @param b B value of RGB
 */
export function luminance(r: number, g: number, b: number): number {
  const a: number[] = [r, g, b].map((v: number) => {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return (a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722) + 0.05;
}

/**
 * Use to calculate contrast between two RGB interfaces
 * @param rgb1 First RGB interface
 * @param rgb2 Second RGB interface
 */
export function calculateContrast(rgb1: RGB, rgb2: RGB): number {
  return luminance(rgb1.r, rgb1.g, rgb1.b) / luminance(rgb2.r, rgb2.g, rgb2.b);
}
