interface NavAppDrawer {
  currentAppIcon: string;
  currentAppDisplayName: string;
  appDrawerConfig?: NavAppDrawerItem[];
}

interface NavAppDrawerItem {
  displayName: string;
  icon: string;
  url: string;
  target?: string;
}

export { NavAppDrawer, NavAppDrawerItem };
