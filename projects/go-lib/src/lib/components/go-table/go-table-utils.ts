export function extractFieldData(key: string, obj: object): any {
  if (key) {
    return key.split('.').reduce((p: any, c: any) => p && p[c], obj);
  }
  return '';
}

export function sortBy(key: string, reverse: boolean): (a: object, b: object) => 1 | 0 | -1 {
  return (a: object, b: object) => {
    const aFieldData: any = formatSortValue(key, a);
    const bFieldData: any = formatSortValue(key, b);

    if (aFieldData < bFieldData) {
      return reverse ? -1 : 1;
    }

    if (aFieldData > bFieldData) {
      return reverse ? 1 : -1;
    }

    return 0;
  };
}

export function formatSortValue(key: any, object: any): any {
  const value: any = nullCheck(extractFieldData(key, object));
  return typeof value === 'string' ? value.toLowerCase() : value;
}

// TODO: Replace instances using this with ?? after upgrade to typescript 3.7+ and tsconfig.target is ES2020
export function nullCheck(value: any, fallback: any = ''): any {
  return value !== null && value !== undefined ? value : fallback;
}
