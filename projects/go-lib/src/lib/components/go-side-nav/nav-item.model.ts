import { CustomNavAttribute } from './custom-nav-attribute.model';

export interface NavItem {
  attributes?: CustomNavAttribute[];
  description?: string;
  route: string;
  routeIcon?: string;
  routeTitle: string;
  routeActive?: boolean;

  /**
   * When `isExternalLink` is true, the value passed to `route` will be used for redirection. By default, all external links will open in a
   * new tab unless a different target is specified within `externalLinkTarget`.
   */
  isExternalLink?: boolean;
  externalLinkTarget?: '_self' | '_blank' | '_parent' | '_top';
}
