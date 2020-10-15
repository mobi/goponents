export interface SplitButtonOption {
  label: string;
  action?: (label: string, ...args: any[]) => any;
}
