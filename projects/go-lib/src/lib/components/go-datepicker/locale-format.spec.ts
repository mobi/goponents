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
    it('should return true for a leap year date', () => {
      const feb = 1;
      expect(LocaleFormat.validDate(feb, 29, 2024)).toBe(true);
    });

    it('should return false for a non leap year date', () => {
      const feb = 1;
      expect(LocaleFormat.validDate(feb, 29, 2023)).toBe(false);
    });
  });
});
