export function extractFieldData(key: string, obj: object) {
  return key.split('.').reduce((p,c) => p && p[c], obj);
}

export function sortBy(key: string, reverse: boolean) {
  return (a: any, b: any) => {
    let aFieldData = extractFieldData(key, a);
    let bFieldData = extractFieldData(key, b);
    aFieldData = typeof aFieldData === "string" ? aFieldData.toLowerCase() : aFieldData;
    bFieldData = typeof bFieldData === "string" ? bFieldData.toLowerCase() : bFieldData;

    if (aFieldData < bFieldData) {
      return reverse ? -1 : 1;
    }
    
    if (aFieldData > bFieldData) {
      return reverse ? 1 : -1;
    }

    return 0;
  }
}
