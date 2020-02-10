interface NavAppDrawer {
  currentAppIcon: string;
  currentAppDisplayName: string;
  appDrawerConfig?: NavAppDrawerItem[];
}

interface NavAppDrawerItem {
  displayName: string;
  icon: string;
  url: string;
}

export { NavAppDrawer, NavAppDrawerItem };
