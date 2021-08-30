import {LocaleFormat} from './locale-format';

describe('LocaleFormat', () => {
  describe('validDate()', () => {
    it('should validate dates between jan & dec', () => {
      const jan: Date = new Date(2020, 0, 1);
      const dec: Date = new Date(2020, 11, 1);

      expect(LocaleFormat.validDate(jan.getMonth(), jan.getDate(), jan.getFullYear())).toBeTruthy(
        jan.toUTCString() + ' is not a valid date'
      );
      expect(LocaleFormat.validDate(dec.getMonth(), dec.getDate(), dec.getFullYear())).toBeTruthy(
        dec.toUTCString() + ' is not a valid date'
      );
    });
  });
});
