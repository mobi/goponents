import { sortBy, extractFieldData } from './go-table-utils';

describe('go-table-utils', () => {
  describe('sortBy', () => {
    it('should treat undefined as empty string', () => {
      const orig = [
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
      const result = orig.sort(sortBy('last', true));
      expect(result[0].first).toBe('Hagrid');
    });
  });
  describe('extractFieldData', () => {
    it('should treat undefined as empty string', () => {
      const row = {
        first: 'Voldemort',
      };
      const result: string = extractFieldData('last', row)
      expect(result).toBe('');
    });
    it('should treat null as empty string', () => {
      const row = {
        first: 'Voldemort',
        last: null
      };
      const result: string = extractFieldData('last', row)
      expect(result).toBe('');
    });
  });
});
