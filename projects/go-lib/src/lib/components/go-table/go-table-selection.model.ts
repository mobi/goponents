export interface RowSelectionEvent extends SelectionState {
  /**
   * The current row that was targeted for selection
   */
  currentRow: {
    /**
     * The entire data in the row
     */
    data: object;
    /**
     * Whether or not this row was selected (`true`) or deselected (`false`)
     */
    selected: boolean;
  };
}

export interface SelectionState {
  /**
   * The current deselected rows; if `selectionMode` is `selection` then this will always be an empty array
   */
  deselectedRows?: any[];

  /**
   * Defines the current mode of selection. `selection` will add items to `selectedRows`
   * and `deselection` will add items to `deselectedRows`.
   *
   * If in `deselection` mode, the UI toggle all checkboxes to true. Items instead will be added to `deselectedRows`
   * because they're being removed from the selection.
   */
  selectionMode: SelectionMode;

  /**
   * The current selected rows; if `selectionMode` is `deselection` then this will always be an empty array
   */
  selectedRows?: any[];
}

export enum SelectionMode {
  selection,
  deselection
}
