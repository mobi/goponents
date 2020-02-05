export function extractFieldData(key: string, obj: object): string | undefined {
  if (key) {
    return key.split('.').reduce((p, c) => p && p[c], obj);
  }
  return '';
}

export function sortBy(key: string, reverse: boolean) {
  return (a: any, b: any) => {
    let aFieldData = extractFieldData(key, a) || '';
    let bFieldData = extractFieldData(key, b) || '';
    aFieldData = aFieldData.toLowerCase();
    bFieldData = bFieldData.toLowerCase();

    if (aFieldData < bFieldData) {
      return reverse ? -1 : 1;
    }

    if (aFieldData > bFieldData) {
      return reverse ? 1 : -1;
    }

    return 0;
  };
}
