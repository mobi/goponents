export interface GoTreeNodeConfig {
  name: string;
  children?: GoTreeNodeConfig[];
  expanded?: boolean;
}
