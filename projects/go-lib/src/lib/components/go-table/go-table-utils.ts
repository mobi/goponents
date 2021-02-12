export function extractFieldData(key: string, obj: object): any {
  if (key) {
    return key.split('.').reduce((p: any, c: any) => p && p[c], obj) || '';
  }
  return '';
}

export function sortBy(key: string, reverse: boolean): Function {
  return (a: object, b: object) => {
    let aFieldData: any = extractFieldData(key, a);
    let bFieldData: any = extractFieldData(key, b);
    aFieldData = typeof aFieldData === 'string' ? aFieldData.toLowerCase() : aFieldData;
    bFieldData = typeof bFieldData === 'string' ? bFieldData.toLowerCase() : bFieldData;

    if (aFieldData < bFieldData) {
      return reverse ? -1 : 1;
    }

    if (aFieldData > bFieldData) {
      return reverse ? 1 : -1;
    }

    return 0;
  };
}
