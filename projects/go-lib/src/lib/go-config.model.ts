/**
 * Theme colors for Goponents
 */
export enum ThemeColors {
  brand = '#65B360',
  dark = '#202626',
  light = '#ffffff'
}


/**
 * What mode of branding to enable
 */
export enum BrandingMode {
  /**
   * Company mode is for branding the app in accordance
   * to the constaints of the base company (ex. Tangoe)
   */
  company = 'Company',
  /**
   * Client mode is for branding the app in accordance
   * to the standards for a client company (ex. External Branding / White-labelling)
   */
  client = 'Client'
}

/**
 * Configurations for the logo area in the
 * layout header of the application
 */
export interface LogoConfig {
  /**
   * Outputs the alt text for the logo image. This is optional, but recommended.
   */
  altText: string;

  /**
   * The path to the logo file
   */
  logo: string;

  /**
   * The path to the logo file if a different logo is desired when the side nav is collapsed
   * We will default this to the `logo` unless otherwise specified.
   */
  logoCollapsed: string;

  /**
   * Route to direct the user to if they click the logo area.
   * If using routerLink, the route relative to the root of the application should be passed
   */
  logoLink: string;

  /**
   * Renders the link as a routerLink or traditional href. By default it will use a routerLink.
   */
  useHref: boolean;
}

/**
 * Global configurations for the application
 */
export interface GoConfigInterface {
  /**
   * The specific color used throughout Goponents to
   * add a branded element to a UI component.
   */
  brandColor: string;
  /**
   * See `BrandingMode` interface for explanation
   */
  brandingMode: BrandingMode;

  /**
   * See `LogoConfig` interface for explanation
   */
  logoConfig: Partial<LogoConfig>;
}
