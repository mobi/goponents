export interface GoTableRowSelectionEvent {
  currentRow: {
    data: object;
    selected: boolean;
  };
  deselectedRows?: any[];
  selectionMode: GoTableSelectionMode;
  selectedRows?: any[];
}

export enum GoTableSelectionMode {
  selection,
  deselection
}