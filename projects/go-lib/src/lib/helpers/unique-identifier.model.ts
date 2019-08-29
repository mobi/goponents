interface Options {
  fallback?: string;
}

export class UniqueIdentifier {
  static generate(key: string, options: Options = {}): string {
    const defaultOptions: Options = { fallback: 'identifier' };
    const identifierOptions: Options = {...defaultOptions, ...options};
    const labelText: string = key || identifierOptions.fallback;
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
