export class GoTableSearchConfig {

  /**
   * Specifies the debounce time between search changes. It is recommended to not change this.
   */
  debounce: number = 500;

  /**
   * Shows as the placeholder for the search bar in the table
   */
  placeholder: string = 'Search...';

  /**
   * Determines whether to show a search bar above the table or not
   */
  searchable: boolean = false;

  /**
   * The term entered by the user to search
   */
  searchTerm: string;

  constructor(fields?: {
    debounce?: number,
    placeholder?: string,
    searchable: boolean,
    searchTerm?: string
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
