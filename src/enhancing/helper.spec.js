const help = require('./helper');

describe('repair function', () => {

  it('enhancement to 100', () => {
    const expected = { name: 'Tomer', durability: 100, enhancement: 15 };
    const actual = help.repair({ name: 'Tomer', durability: 15, enhancement: 15 });
    expect(actual).toEqual(expected);

  });
});

describe('succeed function', () => {

  it('enhances item by 1', () => {
    const expected = { name: 'Tomer', durability: 15, enhancement: 16 };
    const actual = help.succeed({ name: 'Tomer', durability: 15, enhancement: 15 });
    expect(actual).toEqual(expected);
  })
});

describe('fail function', () => {

  it('durability -10, enhancement -1', () => {
    const expected = { name: 'Tomer', durability: 5, enhancement: 18 };
    const actual = help.fail({ name: 'Tomer', durability: 15, enhancement: 19 });
    expect(actual).toEqual(expected);
  })

  it('durability -5, enhancement unaffected', () => {
    const expected = { name: 'Tomer', durability: 9, enhancement: 10 };
    const actual = help.fail({ name: 'Tomer', durability: 14, enhancement: 10 });
    expect(actual).toEqual(expected);
  })
});