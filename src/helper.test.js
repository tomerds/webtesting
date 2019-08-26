const help = require('./helper');

jest.mock('uuid', () => () => 'abcde');
jest.useFakeTimers();

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
});

describe('executeIfEven function', () => {
  it('executes callback if even', () => {
    const spy = jest.fn();
    help.executeIfEven(2, spy);
    expect(spy).toBeCalledWith(2);
  });

  it('doesnt execute callback if odd', () => {
    const spy = jest.fn();
    help.executeIfEven(1, spy);
    expect(spy).not.toBeCalled()
  })
});

describe('asyncThing function', () => {

  it('eventually resolves to 7', async () => {
    const promise = help.asyncThing(Function.prototype);
    jest.runAllTimers();
    const resolvedValue = await promise;
    const expected = 7;
    expect(resolvedValue).toBe(expected);
  });
  it('eventually calls the callback', async () => {
    const spy = jest.fn();
    expect(spy).not.toBeCalled(); // test for sanity.
    const promise = help.asyncThing(spy);
    jest.runAllTimers();
    await promise;
    expect(spy).toBeCalled();
  });
});


