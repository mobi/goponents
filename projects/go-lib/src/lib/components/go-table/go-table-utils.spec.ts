import { extractFieldData, sortBy } from './go-table-utils';

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
    it('should treat undefined as empty string', () => {
      const row: any = {
        first: 'Voldemort'
      };

      const result: string = extractFieldData('last', row);

      expect(result).toBe('');
    });

    it('should treat null as empty string', () => {
      const row: any = {
        last: null
      };
      const result: string = extractFieldData('last', row);

      expect(result).toBe('');
    });

    it('should convert boolean values to string values', () => {
      const falseRow: any = { active: false };
      const trueRow: any = { active: true };

      const falseResult: string = extractFieldData('active', falseRow);
      const trueResult: string = extractFieldData('active', trueRow);

      expect(falseResult).toBe('false');
      expect(trueResult).toBe('true');
    });
  });
});
