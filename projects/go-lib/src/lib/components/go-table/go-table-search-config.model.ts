export class GoTableSearchConfig {
  searchable: boolean = false;
  searchTerm: string;

  constructor(fields?: {
    searchable: boolean,
    searchTerm?: string
  }) {
    if (fields) { Object.assign(this, fields); }
  }
}
