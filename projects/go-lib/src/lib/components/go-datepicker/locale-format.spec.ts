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

    /**
     * @see https://github.com/mobi/goponents/issues/828
     *
     * it('should return false when dates are out of range', () => {
     *   const badDate: Date = new Date(2021, -1, 32);
     *
     *   expect(LocaleFormat.validDate(badDate.getMonth(), badDate.getDate(), badDate.getFullYear())).toBeFalsy(
     *     'Date(2020, -1, 32) should be invalid'
     *   );
     * });
     */
  });
});
