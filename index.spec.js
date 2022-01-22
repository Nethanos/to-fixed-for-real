const toFixed = require('./index');
describe('Math Handler tests', () => {
  it('should truncate two decimal places when number has three decimal places', () => {
    const numberFixed = toFixed(12.599, 2);

    expect(numberFixed).toEqual(12.59);
  });

  it('should truncate two decimal places from ascending numbers', () => {
    const numberFixed = toFixed(1.2345, 2);

    expect(numberFixed).toEqual(1.23);
  });

  it(`should check two decimal places when number doesn't have it`, () => {
    const numberFixed = toFixed(10);

    expect(numberFixed).toEqual(10.0);
  });

  it('should check two decimal places with this magic number', () => {
    const numberFixed = toFixed(4.27, 2);

    expect(numberFixed).toEqual(4.27);
  });

  it('should check two decimal places with negative numbers', () => {
    const numberFixed = toFixed(-4.3, 2);

    expect(numberFixed).toEqual(-4.3);
  });

  it('should check two decimal places with crazy numbers', () => {
    const numberFixed = toFixed(21381923.32938989, 2);

    expect(numberFixed).toEqual(21381923.32);
  });

  it('should two decimal places with negative crazy numbers', () => {
    const numberFixed = toFixed(-21381923.32938989, 2);

    expect(numberFixed).toEqual(-21381923.32);
  });

  it('should not break with non decimal number and to fixed 2 decimal', () => {
    const value = toFixed(10, 2);

    expect(value).toEqual(10.0);
  });

  it('should not break with string number', () => {
    const value = toFixed('10', 2);

    expect(value).toEqual(10.0);
  });

  it('should not break with string number with decimal places', () => {
    const value = toFixed('10.58928', 2);

    expect(value).toEqual(10.58);
  });

  it('should not break with string number with decimal places an comma', () => {
    const value = toFixed('982,51832', 2);

    expect(value).toEqual(982.51);
  });

  it('should not break with string number with decimal places an broken comma', () => {
    const value = toFixed('164252,', 2);

    expect(value).toEqual(164252.0);
  });

  it('should not break with string number with non decimal places an broken comma', () => {
    const value = toFixed('164252,');

    expect(value).toEqual(164252.0);
  });

  it('should not break when passing 0', () => {
    const response = toFixed(0, 2);

    expect(response).toEqual(0);
  });
});
