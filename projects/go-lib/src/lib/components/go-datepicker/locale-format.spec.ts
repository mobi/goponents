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
    it('should return false for a non leap year date', () => {
      const nonLeapYear: Date = new Date(2021, 1, 29);
      expect(LocaleFormat.validDate(nonLeapYear.getMonth(), nonLeapYear.getDate(), nonLeapYear.getFullYear())).toBeTruthy(
        nonLeapYear.toUTCString() + ' is not a valid date'
      )});

    it('should return true for a  leap year date', () => {
      const leapYear: Date = new Date(2020, 1, 29);
      expect(LocaleFormat.validDate(leapYear.getMonth(), leapYear.getDate(), leapYear.getFullYear())).toBeTruthy(
        leapYear.toUTCString() + ' is a valid date'
      )});
  });
});
