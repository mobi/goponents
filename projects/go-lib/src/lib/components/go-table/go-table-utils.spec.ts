import { extractFieldData, formatSortValue, nullCheck, sortBy } from './go-table-utils';

const data: any = {
  headmaster: undefined,
  house: null,
  school: 'Hogwarts'
};

describe('go-table-utils', () => {

  describe('sortBy', () => {
    it('should treat undefined as empty string', () => {
      const orig: any = [
        {
          first: 'Harry',
          last: 'Potter'
        },
        {
          first: 'Ronald',
          last: 'Weasley'
        },
        {
          first: 'Hagrid',
          last: undefined
        },
      ];
      const result: any = orig.sort(sortBy('last', true));
      expect(result[0].first).toBe('Hagrid');
    });
  });

  describe('extractFieldData', () => {
    it('should return value from key specified on object param', () => {
      const result: any = extractFieldData('school', data);

      expect(result).toBe('Hogwarts');
    });

    it('should return null or undefined if key specified on object param is null or undefined respectively', () => {
      const nullResult: any = extractFieldData('house', data);
      const undefinedResult: any = extractFieldData('headmaster', data);

      expect(nullResult).toBeNull();
      expect(undefinedResult).toBeUndefined();
    });
  });

  describe('formatSortValue', () => {
    it('formats keys that are of type strings to lowercase', () => {
      const result: any = formatSortValue('school', data);

      expect(result).toBe('hogwarts');
    });

    it('forms keys that are null or undefined to an empty string', () => {
      const nullResult: any = formatSortValue('house', data);
      const undefinedResult: any = formatSortValue('headmaster', data);

      expect(nullResult).toBe('');
      expect(undefinedResult).toBe('');
    });
  });

  describe('nullCheck', () => {
    it('returns value if not null or undefined', () => {
      const result: any = nullCheck('Hogwarts');

      expect(result).toBe('Hogwarts');
    });

    it('returns specified fallback if value passed is null or undefined', () => {
      const nullResult: any = nullCheck(null);
      const undefinedResult: any = nullCheck(undefined);

      expect(nullResult).toBe('');
      expect(undefinedResult).toBe('');
    });
  });

});
