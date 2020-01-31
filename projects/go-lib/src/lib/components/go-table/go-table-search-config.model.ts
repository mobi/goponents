export class GoTableSearchConfig {
  /**
   * Determines whether to show a search bar above the table or not
   */
  searchable: boolean = false;

  /**
   * The term entered by the user to search
   */
  searchTerm: string;

  constructor(fields?: {
    searchable: boolean,
    searchTerm?: string
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
