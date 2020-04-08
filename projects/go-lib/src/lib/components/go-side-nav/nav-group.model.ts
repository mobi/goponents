import { CustomNavAttribute } from './custom-nav-attribute.model';
import { NavItem } from './nav-item.model';

export interface NavGroup {
  attributes?: CustomNavAttribute[];
  description?: string;
  expanded?: boolean;
  id?: string;
  routeActive?: boolean;
  routeIcon?: string;
  routeTitle: string;
  subRoutes: Array<NavGroup | NavItem>;
}
