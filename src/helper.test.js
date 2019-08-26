const help = require('./helper');

jest.mock('uuid', () => () => 'abcde');

describe('sum function', () => {

  it('sums two integers', () => {
    const expected = 4;
    const actual = help.sum([1, 2, 1]);
    expect(actual).toBe(expected);
  })
});

describe('makeUser function', () => {

  it('generates user with id and full name', () => {
    const expected = { id: 'abcde', fullname: `Peter Parker` };
    const actual = help.makeUser('Peter', 'Parker');
    expect(actual).toEqual(expected);
  })
})

