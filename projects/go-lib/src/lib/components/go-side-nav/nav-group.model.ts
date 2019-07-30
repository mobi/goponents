import { NavItem } from './nav-item.model';

export interface NavGroup {
  description?: string;
  expanded?: boolean;
  routeIcon?: string;
  routeTitle: string;
  subRoutes: Array<NavGroup | NavItem>;
}
